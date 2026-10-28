import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const career = defineCollection({
	loader: file('src/data/career.yaml'),
	schema: z.object({
		kind: z.enum(['work', 'education']),
		from: z.string(),
		to: z.string().optional(),
		title: z.string(),
		org: z.string(),
		summary: z.string(),
		// Shorter, denser lines for the printed CV; falls back to summary.
		highlights: z.array(z.string()).optional(),
	}),
});

const projects = defineCollection({
	loader: file('src/data/projects.yaml'),
	schema: ({ image }) =>
		z.object({
			order: z.number(),
			title: z.string(),
			label: z.string(),
			summary: z.string(),
			tags: z.array(z.string()),
			image: image(),
			code: z.url().optional(),
			site: z.url().optional(),
		}),
});

export const collections = { career, projects };
