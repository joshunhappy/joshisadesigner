<script lang="ts">
	import type { WorkItem } from '$lib/types';

	let {
		prev,
		next,
		tone = 'indigo'
	}: { prev: WorkItem; next: WorkItem; tone?: 'indigo' | 'cotton' } = $props();
</script>

<nav
	aria-label="More projects"
	class="pager grid gap-px sm:grid-cols-2 {tone === 'cotton' ? 'on-cotton' : 'on-indigo'}"
>
	<a href="/work/{prev.slug}" class="cell group no-underline">
		<span class="dir">
			<svg viewBox="0 0 20 20" class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 10H4M9 5l-5 5 5 5" /></svg>
			Previous project
		</span>
		<span class="title">{prev.title}</span>
	</a>
	<a href="/work/{next.slug}" class="cell group no-underline sm:text-right">
		<span class="dir sm:justify-end">
			Next project
			<svg viewBox="0 0 20 20" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>
		</span>
		<span class="title">{next.title}</span>
	</a>
</nav>

<style>
	.pager {
		margin-bottom: 4rem;
	}
	.cell {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1.5rem 1.25rem;
	}
	.dir {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: var(--text-ui);
	}
	.title {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 1.75rem;
		line-height: 1;
		letter-spacing: -0.02em;
	}

	.on-cotton {
		background: var(--color-rule);
		border-block: 1px solid var(--color-rule);
	}
	.on-cotton .cell {
		background: var(--color-cotton);
		color: var(--color-ink);
	}
	.on-cotton .dir {
		color: var(--color-ink-muted);
	}
	.on-cotton .cell:hover .title {
		color: var(--color-cochineal);
	}

	.on-indigo {
		background: var(--color-indigo-700);
		border-block: 1px solid var(--color-indigo-700);
	}
	.on-indigo .cell {
		background: var(--color-indigo-900);
		color: var(--color-on-indigo);
	}
	.on-indigo .dir {
		color: var(--color-on-indigo-muted);
	}
	.on-indigo .cell:hover .title {
		color: var(--color-marigold);
	}
</style>
