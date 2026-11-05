// Renders the /cv page to a PDF with headless Chromium, so the downloadable
// CV always matches the site's content.
// - dev:   /cv.pdf is rendered on request from the running dev server
// - build: dist/cv.pdf is written once the static site is built
import type { AstroIntegration, AstroIntegrationLogger } from 'astro';
import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const CV_PATH = '/cv/';
const PDF_PATH = '/cv.pdf';
const MAX_PAGES = 2;

async function renderPdf(url: string, logger: AstroIntegrationLogger) {
	const browser = await chromium.launch();
	try {
		const page = await browser.newPage();
		await page.goto(url, { waitUntil: 'networkidle' });
		await page.evaluate(() => document.fonts.ready);
		const pdf = await page.pdf({ preferCSSPageSize: true, printBackground: true });
		// Each page object in the PDF is "/Type /Page" (not "/Pages").
		const pages = (Buffer.from(pdf).toString('latin1').match(/\/Type\s*\/Page\b(?!s)/g) ?? []).length;
		if (pages > MAX_PAGES) logger.warn(`The CV is ${pages} pages long; aim for at most ${MAX_PAGES}.`);
		else logger.info(`CV has ${pages} page${pages === 1 ? '' : 's'}.`);
		return pdf;
	} finally {
		await browser.close();
	}
}

const types: Record<string, string> = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.woff2': 'font/woff2',
	'.woff': 'font/woff',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
};

/** Serves a built site from `dir` on a random local port. */
async function serveStatic(dir: string) {
	const server = createServer(async (req, res) => {
		let path = normalize(decodeURIComponent(new URL(req.url ?? '/', 'http://x').pathname));
		if (path.endsWith('/')) path += 'index.html';
		try {
			const body = await readFile(join(dir, path));
			res.writeHead(200, { 'content-type': types[extname(path)] ?? 'application/octet-stream' });
			res.end(body);
		} catch {
			res.writeHead(404).end();
		}
	});
	await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
	const { port } = server.address() as AddressInfo;
	return { url: `http://127.0.0.1:${port}`, close: () => server.close() };
}

export default function cvPdf(): AstroIntegration {
	let devOrigin = '';

	return {
		name: 'cv-pdf',
		hooks: {
			'astro:server:start': ({ address }) => {
				devOrigin = `http://localhost:${address.port}`;
			},
			'astro:server:setup': ({ server, logger }) => {
				server.middlewares.use(PDF_PATH, async (_req, res) => {
					try {
						const pdf = await renderPdf(devOrigin + CV_PATH, logger);
						res.writeHead(200, { 'content-type': 'application/pdf' });
						res.end(pdf);
					} catch (error) {
						logger.error(`Could not render the CV: ${error}`);
						res.writeHead(500, { 'content-type': 'text/plain' });
						res.end('Could not render the CV PDF; see the dev server log.');
					}
				});
			},
			'astro:build:done': async ({ dir, logger }) => {
				const root = fileURLToPath(dir);
				const site = await serveStatic(root);
				try {
					await writeFile(join(root, PDF_PATH), await renderPdf(site.url + CV_PATH, logger));
					logger.info(`CV written to ${PDF_PATH}`);
				} finally {
					site.close();
				}
			},
		},
	};
}
