// Renders the built /cv page to dist/cv.pdf with headless Chromium.
// Runs after `astro build`, so the PDF always matches the site's data.
import { chromium } from 'playwright';
import { join, normalize } from 'node:path';

const dist = join(import.meta.dir, '..', 'dist');

const server = Bun.serve({
	port: 0,
	async fetch(req) {
		let path = normalize(decodeURIComponent(new URL(req.url).pathname));
		if (path.endsWith('/')) path += 'index.html';
		const file = Bun.file(join(dist, path));
		return (await file.exists()) ? new Response(file) : new Response('Not found', { status: 404 });
	},
});

const browser = await chromium.launch();
try {
	const page = await browser.newPage();
	await page.goto(new URL('/cv/', server.url).href, { waitUntil: 'networkidle' });
	await page.evaluate(() => document.fonts.ready);
	await page.pdf({
		path: join(dist, 'cv.pdf'),
		preferCSSPageSize: true,
		printBackground: true,
	});
	console.log('CV written to dist/cv.pdf');
} finally {
	await browser.close();
	server.stop();
}
