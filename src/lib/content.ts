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
