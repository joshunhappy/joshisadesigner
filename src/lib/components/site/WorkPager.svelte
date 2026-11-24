<script lang="ts">
	import type { WorkItem } from '$lib/types';

	let { prev, next }: { prev: WorkItem; next: WorkItem } = $props();
</script>

<nav aria-label="More projects" class="grid border-y border-rule sm:grid-cols-2">
	<a href="/work/{prev.slug}" class="cell group no-underline">
		<span class="dir">
			<img src="/icons/move-right.svg" alt="" width="16" height="16" class="rotate-180" />
			Previous project
		</span>
		<span class="title">{prev.title}</span>
	</a>
	<a href="/work/{next.slug}" class="cell group no-underline sm:items-end sm:text-right">
		<span class="dir">
			Next project
			<img src="/icons/move-right.svg" alt="" width="16" height="16" />
		</span>
		<span class="title">{next.title}</span>
	</a>
</nav>

<style>
	nav {
		margin-bottom: 4rem;
	}
	.cell {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1.5rem 1.25rem;
		background: var(--color-canvas);
		color: var(--color-ink);
	}
	.dir {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: var(--text-ui);
		font-weight: 300;
		color: var(--color-ink-muted);
	}
	.title {
		font-weight: 700;
		font-size: 1.75rem;
		line-height: 1.1;
		letter-spacing: -0.01em;
	}
	.cell:hover .title {
		text-decoration: underline;
	}
</style>
