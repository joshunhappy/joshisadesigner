<script lang="ts">
	import type { WorkItem } from '$lib/types';
	import Figure from './case-study/Figure.svelte';
	import WorkPager from './site/WorkPager.svelte';
	import { deviceOf, screenName } from '$lib/images';
	import Img from './site/Img.svelte';
	import FactsGrid from './site/FactsGrid.svelte';

	let { item, prev, next }: { item: WorkItem; prev: WorkItem; next: WorkItem } = $props();

	const groups = $derived(
		(['desktop', 'mobile'] as const)
			.map((kind) => ({ kind, screens: item.screens.filter((src) => deviceOf(src) === kind) }))
			.filter((g) => g.screens.length)
	);

	const facts = $derived(
		[
			{ label: 'Year', value: String(item.year) },
			item.role && { label: 'Role', value: item.role },
			item.client && { label: 'Client', value: item.client },
			item.responsibilities?.length && { label: 'Responsibilities', value: item.responsibilities.join(', ') },
			item.tools?.length && { label: 'Tools', value: item.tools.join(', ') }
		].filter(Boolean) as { label: string; value: string }[]
	);
</script>

<div>
	<div class="mx-auto max-w-[1200px] px-5 pt-10 pb-4 md:px-10 md:pt-16">
		<a
			href="/work"
			class="inline-flex items-center gap-2 text-base text-ink-muted no-underline hover:text-ink"
		>
			<img src="/icons/move-right.svg" alt="" width="16" height="16" class="rotate-180" />
			All work
		</a>

		<h1
			style:view-transition-name="title-{item.slug}"
			class="type-display mt-8"
		>
			{item.title}
		</h1>

		<p class="type-lede mt-6 max-w-[40ch]">
			{item.description}
		</p>

		{#if item.problem?.length}
			<div class="mt-8 max-w-[38rem] space-y-3 text-lg leading-relaxed font-light">
				{#each item.problem as sentence, i (i)}
					<p>{sentence}</p>
				{/each}
			</div>
		{/if}

		<p class="mt-8 text-base text-ink-muted">
			{groups.length
				? 'Screens only. A written case study for this project isn’t up yet.'
				: 'Screens and a written case study for this project are on their way.'}
		</p>

		<FactsGrid {facts} />
	</div>

	{#if !groups.length && item.listCover}
		<div class="mx-auto max-w-[1200px] px-5 pt-10 md:px-10 md:pt-14">
			<div class="aspect-[648/383] overflow-hidden rounded-[24px]">
				<Img src={item.listCover} alt="{item.title} project cover" eager sizes="(min-width: 1200px) 1120px, 100vw" class="h-full w-full object-cover" />
			</div>
		</div>
	{/if}

	{#each groups as group (group.kind)}
		<section
			aria-labelledby="screens-{group.kind}"
			class="mx-auto max-w-[1200px] px-5 pt-10 pb-4 md:px-10 md:pt-14"
		>
			<h2 id="screens-{group.kind}" class="type-title flex items-baseline gap-3">
				{group.kind === 'desktop' ? 'Desktop' : 'Mobile'}
				<span class="text-base font-normal tracking-normal text-ink-muted">
					{group.screens.length === 1 ? '1 screen' : `${group.screens.length} screens`}
				</span>
			</h2>
			<p class="mt-2 mb-8 text-base text-ink-muted">
				Shown at the top of each screen. Select one to see it full length.
			</p>
			<ul
				class="grid gap-x-6 gap-y-10 {group.kind === 'desktop'
					? 'md:grid-cols-2'
					: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'}"
			>
				{#each group.screens as src, i (src)}
					<li class="[&>figure]:mb-0">
						<Figure
							{src}
							alt="{item.title}, {group.kind} screen: {screenName(src, i)}"
							chrome={group.kind}
							eager={i < 2}
						/>
						<p class="mt-3 text-sm text-ink-muted">{screenName(src, i)}</p>
					</li>
				{/each}
			</ul>
		</section>
	{/each}

	<div class="mx-auto max-w-[1200px] px-5 pt-6 md:px-10">
		<WorkPager {prev} {next} />
	</div>
</div>
