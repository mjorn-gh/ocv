// @ts-check
import { defineConfig } from 'astro/config';
import cvPdf from './integrations/cv-pdf';

// https://astro.build/config
export default defineConfig({
	site: 'https://elias.mjoen.ch',
	integrations: [cvPdf()],
});
