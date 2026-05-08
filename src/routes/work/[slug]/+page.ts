import type { PageLoad } from './$types';
import { work } from '$lib/data/work';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const index = work.findIndex((w) => w.slug === params.slug);
	if (index === -1) throw error(404, 'Project not found');
	return {
		item: work[index],
		prev: work[(index - 1 + work.length) % work.length],
		next: work[(index + 1) % work.length]
	};
};
