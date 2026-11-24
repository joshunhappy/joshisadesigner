import type { PageLoad } from './$types';
import { work, workAliases } from '$lib/data/work';
import { error, redirect } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const moved = workAliases[params.slug];
	if (moved) redirect(301, `/work/${moved}`);

	const index = work.findIndex((w) => w.slug === params.slug);
	if (index === -1) error(404, 'Project not found');
	return {
		item: work[index],
		prev: work[(index - 1 + work.length) % work.length],
		next: work[(index + 1) % work.length]
	};
};
