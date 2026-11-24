<script lang="ts">
	import type { CaseStudyBlock } from '$lib/types';
	import Figure from './Figure.svelte';
	import Flow from './Flow.svelte';
	import Decision from './Decision.svelte';
	import Metrics from './Metrics.svelte';
	import Compare from './Compare.svelte';

	let { block, eager = false }: { block: CaseStudyBlock; eager?: boolean } = $props();

	/** Default eyebrow per tone, used when a callout supplies no title. */
	const calloutLabel: Record<string, string> = {
		note: 'Note',
		constraint: 'Constraint',
		risk: 'Risk'
	};
</script>

{#if block.type === 'prose'}
	<div class="mb-10">
		{#if block.heading}
			<h3 class="text-xs tracking-widest uppercase text-[#aaa] mb-4">{block.heading}</h3>
		{/if}
		<div class={block.lead ? 'space-y-5' : 'space-y-4'}>
			{#each block.body as paragraph, i (i)}
				<p
					class={block.lead
						? 'text-xl md:text-2xl font-light text-[#111] leading-snug'
						: 'text-base text-[#555] leading-relaxed'}
				>
					{paragraph}
				</p>
			{/each}
		</div>
	</div>
{:else if block.type === 'figure'}
	<Figure {...block} {eager} />
{:else if block.type === 'gallery'}
	<div class="mb-10">
		{#if block.heading}
			<h3 class="text-xs tracking-widest uppercase text-[#aaa] mb-4">{block.heading}</h3>
		{/if}
		{#if block.layout === 'row'}
			<div
				class="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6"
				style="scrollbar-width: none; -webkit-overflow-scrolling: touch;"
			>
				{#each block.items as item (item.src)}
					<div class="shrink-0 w-[78vw] sm:w-[420px]">
						<Figure {...item} compact />
					</div>
				{/each}
			</div>
		{:else}
			<div
				class="grid gap-6 sm:grid-cols-2 {block.columns === 4
					? 'lg:grid-cols-4'
					: block.columns === 2
						? ''
						: 'lg:grid-cols-3'}"
			>
				{#each block.items as item (item.src)}
					<Figure {...item} compact />
				{/each}
			</div>
		{/if}
		{#if block.caption}
			<p class="text-sm text-[#777] leading-relaxed mt-2">{block.caption}</p>
		{/if}
	</div>
{:else if block.type === 'compare'}
	<Compare {block} />
{:else if block.type === 'flow'}
	<Flow {block} />
{:else if block.type === 'decision'}
	<Decision {block} />
{:else if block.type === 'metrics'}
	<Metrics {block} />
{:else if block.type === 'list'}
	<div class="mb-10">
		{#if block.heading}
			<h3 class="text-xs tracking-widest uppercase text-[#aaa] mb-4">{block.heading}</h3>
		{/if}
		<ul class="space-y-3">
			{#each block.items as item, i (i)}
				<li class="flex gap-4 items-start">
					{#if block.style === 'number'}
						<span class="text-[11px] font-mono text-[#bbb] pt-[5px] shrink-0 w-5">
							{String(i + 1).padStart(2, '0')}
						</span>
					{:else}
						<span class="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#111] shrink-0"></span>
					{/if}
					<span class="text-base text-[#555] leading-relaxed">{item}</span>
				</li>
			{/each}
		</ul>
	</div>
{:else if block.type === 'callout'}
	<aside class="mb-10 rounded-[14px] bg-white border border-[#e0e0e0] px-5 py-5">
		<p class="text-[10px] tracking-widest uppercase text-[#aaa] mb-2">
			{block.title ?? calloutLabel[block.tone ?? 'note']}
		</p>
		<p class="text-sm text-[#555] leading-relaxed">{block.body}</p>
	</aside>
{:else if block.type === 'quote'}
	<blockquote class="mb-10 border-l-2 border-[#111] pl-6">
		<p class="text-xl font-light text-[#111] leading-snug">{block.text}</p>
		{#if block.attribution}
			<footer class="text-xs tracking-widest uppercase text-[#aaa] mt-3">{block.attribution}</footer>
		{/if}
	</blockquote>
{/if}
