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
		// Listed under the summary, on the site and in the CV.
		highlights: z.array(z.string()).optional(),
		// Collected across all entries into the CV's skills section.
		skills: z.array(z.string()).default([]),
		// "German, English (C1)" or a list; collected like skills.
		languages: z
			.union([z.string(), z.array(z.string())])
			.default([])
			.transform((value) =>
				(typeof value === 'string' ? value.split(',') : value).map((item) => item.trim()).filter(Boolean),
			),
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
