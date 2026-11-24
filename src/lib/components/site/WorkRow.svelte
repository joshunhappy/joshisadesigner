<script lang="ts">
	/**
	 * One project in the work list: info on the left, composed cover on the right.
	 * Projects without a composed cover show their first screen in its device frame
	 * on a neutral panel, so every row keeps the same rhythm.
	 */
	import type { WorkItem } from '$lib/types';
	import Img from './Img.svelte';
	import DeviceFrame from './DeviceFrame.svelte';
	import { deviceOf, screenName } from '$lib/images';

	let { item, headingLevel = 3, eager = false }: { item: WorkItem; headingLevel?: 2 | 3; eager?: boolean } =
		$props();

	const fallback = $derived(item.screens[0]);
	const fallbackKind = $derived(fallback ? deviceOf(fallback) : 'desktop');
</script>

<article class="row group relative grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_648px] lg:gap-[72px]">
	<div class="flex min-w-0 flex-col items-start gap-4 py-2">
		<svelte:element this={headingLevel === 2 ? 'h2' : 'h3'} class="type-title">
			<a
				href="/work/{item.slug}"
				class="row-link no-underline"
				style:view-transition-name="title-{item.slug}"
			>
				{item.title}
			</a>
		</svelte:element>

		<p class="flex flex-wrap items-center gap-2 text-sm leading-[1.2] text-ink-muted">
			<span>{item.category}</span>
			<img src="/icons/dot.svg" alt="" width="4" height="4" />
			<span class="tabular-nums">{item.year}</span>
		</p>

		{#if item.summary}
			<p class="max-w-[38rem] text-xl leading-[1.2]">{item.summary}</p>
		{/if}

		{#if item.role}
			<p class="text-sm leading-[1.2] text-ink-muted">{item.role}{#if item.client}{` for ${item.client}`}{/if}</p>
		{/if}

		<p class="flex items-center gap-1 text-sm font-light" aria-hidden="true">
			View
			<img src="/icons/move-right.svg" alt="" width="16" height="16" class="arrow" />
		</p>
	</div>

	<div class="cover aspect-[648/383] w-full overflow-hidden rounded-[24px]">
		{#if item.listCover}
			<Img
				src={item.listCover}
				alt="{item.title} project cover"
				{eager}
				sizes="(min-width: 1024px) 648px, 100vw"
				class="h-full w-full object-cover"
			/>
		{:else if fallback}
			<div class="flex h-full w-full items-center justify-center bg-sunken p-[6%]">
				<div class={fallbackKind === 'mobile' ? 'h-full w-auto aspect-[375/812]' : 'w-full'}>
					<DeviceFrame src={fallback} alt="{item.title}, {fallbackKind} screen: {screenName(fallback)}" kind={fallbackKind} {eager} />
				</div>
			</div>
		{/if}
	</div>
</article>

<style>
	/* The whole row is the link target; the heading's link stretches over it. */
	.row-link::after {
		content: '';
		position: absolute;
		inset: 0;
	}
	.row-link:focus-visible {
		outline: none;
	}
	.row:has(.row-link:focus-visible) {
		outline: 2px solid var(--color-ink);
		outline-offset: 8px;
		border-radius: 4px;
	}
	.row:hover .row-link,
	.row-link:focus-visible {
		text-decoration: underline;
		text-decoration-thickness: 3px;
	}
</style>
