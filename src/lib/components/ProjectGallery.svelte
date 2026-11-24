<script lang="ts">
	import type { WorkItem } from '$lib/types';
	import Figure from './case-study/Figure.svelte';
	import WorkPager from './loom/WorkPager.svelte';
	import { deviceOf, screenName } from '$lib/images';

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

<div class="warp" style:--weft={item.bgColor}>
	<div class="mx-auto max-w-[1200px] px-5 pt-10 pb-4 md:px-10 md:pt-16">
		<a
			href="/work"
			class="inline-flex items-center gap-2 text-base text-on-indigo-muted no-underline hover:text-on-indigo"
		>
			<svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 10H4M9 5l-5 5 5 5" /></svg>
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
			<div class="mt-8 max-w-[38rem] space-y-3 text-lg leading-relaxed text-on-indigo">
				{#each item.problem as sentence, i (i)}
					<p>{sentence}</p>
				{/each}
			</div>
		{/if}

		<!-- Bare warp: honest about there being screens and no write-up yet. -->
		<div class="mt-8 flex items-center gap-4">
			<span class="strip h-4 w-24 shrink-0" aria-hidden="true"></span>
			<p class="text-base text-on-indigo-muted">
				Screens only. A written case study for this project isn’t up yet.
			</p>
		</div>

		{#if facts.length}
			<dl class="facts mt-10 grid sm:grid-cols-2 lg:grid-cols-3">
				{#each facts as fact (fact.label)}
					<div class="fact bg-indigo-950 px-5 py-4">
						<dt class="mb-1 text-sm text-on-indigo-muted">{fact.label}</dt>
						<dd class="text-base leading-snug">{fact.value}</dd>
					</div>
				{/each}
			</dl>
		{/if}
	</div>

	{#each groups as group (group.kind)}
		<section
			aria-labelledby="screens-{group.kind}"
			class="mx-auto max-w-[1200px] px-5 pt-10 pb-4 md:px-10 md:pt-14"
		>
			<h2 id="screens-{group.kind}" class="type-title flex items-baseline gap-3">
				{group.kind === 'desktop' ? 'Desktop' : 'Mobile'}
				<span class="text-base font-normal tracking-normal text-on-indigo-muted">
					{group.screens.length === 1 ? '1 screen' : `${group.screens.length} screens`}
				</span>
			</h2>
			<p class="mt-2 mb-8 text-base text-on-indigo-muted">
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
						<p class="mt-3 text-sm text-on-indigo-muted">{screenName(src, i)}</p>
					</li>
				{/each}
			</ul>
		</section>
	{/each}

	<div class="mx-auto max-w-[1200px] px-5 pt-6 md:px-10">
		<WorkPager {prev} {next} />
	</div>
</div>

<style>
	.facts {
		/* Any cell the grid leaves empty shows bare warp, not a hole. */
		background-image: repeating-linear-gradient(
			90deg,
			transparent 0 9px,
			var(--color-thread-bare) 9px 10px
		);
		border-top: 1px solid var(--color-indigo-700);
		border-left: 1px solid var(--color-indigo-700);
	}
	.fact {
		border-right: 1px solid var(--color-indigo-700);
		border-bottom: 1px solid var(--color-indigo-700);
	}
	@supports (color: oklch(from red l c h)) {
		.strip {
			--weft-lit: oklch(from var(--weft) max(l, 0.72) max(c, 0.08) h);
		}
	}
	.strip {
		--weft-lit: var(--weft);
		background-image:
			linear-gradient(var(--weft-lit), var(--weft-lit)),
			repeating-linear-gradient(
				90deg,
				transparent 0 9px,
				var(--color-thread-bare) 9px 10px
			);
		background-size:
			30% 4px,
			auto;
		background-repeat: no-repeat, repeat;
		background-position:
			0 50%,
			0 0;
	}
</style>
