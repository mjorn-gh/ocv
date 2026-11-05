import { getCollection } from 'astro:content';

// "MM/YYYY" → sortable number YYYYMM.
const monthKey = (date: string) => {
	const [month, year] = date.split('/');
	return Number(year) * 100 + Number(month);
};

/** Career entries, newest first. */
export const getCareer = async () =>
	(await getCollection('career')).sort((a, b) => monthKey(b.data.from) - monthKey(a.data.from));

/** Projects in their curated order. */
export const getProjects = async () =>
	(await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);

/** Skills from every career entry, newest first, without duplicates. */
export const getSkills = async () => {
	const seen = new Map<string, string>();
	for (const { data } of await getCareer()) {
		for (const skill of data.skills) {
			const key = skill.toLowerCase();
			if (!seen.has(key)) seen.set(key, skill);
		}
	}
	return [...seen.values()];
};

/**
 * Languages from every career entry, in order of first mention. A level such
 * as "English (C1)" is kept wherever any entry gives one.
 */
export const getLanguages = async () => {
	const levels = new Map<string, { name: string; level?: string }>();
	for (const { data } of await getCareer()) {
		for (const item of data.languages) {
			const [, name, level] = item.match(/^(.*?)\s*(?:\((.+)\))?$/) ?? [];
			const key = name.toLowerCase();
			const known = levels.get(key);
			if (!known) levels.set(key, { name, level });
			else if (!known.level && level) known.level = level;
		}
	}
	return [...levels.values()];
};
