<script lang="ts">
	import { onMount } from 'svelte';
	import type { WorkItem, CaseStudy, Fact } from '$lib/types';
	import SectionNav from './SectionNav.svelte';
	import Block from './Block.svelte';
	import Figure from './Figure.svelte';
	import WorkPager from '$lib/components/loom/WorkPager.svelte';

	let {
		item,
		study,
		prev,
		next
	}: { item: WorkItem; study: CaseStudy; prev: WorkItem; next: WorkItem } = $props();

	function fallbackFacts(): Fact[] {
		const entries: Fact[] = [];
		if (item.role) entries.push({ label: 'Role', value: item.role });
		if (item.client) entries.push({ label: 'Client', value: item.client });
		if (item.timeline) entries.push({ label: 'Timeline', value: item.timeline });
		if (item.tools?.length) entries.push({ label: 'Tools', value: item.tools.join(', ') });
		return entries;
	}

	const facts: Fact[] = $derived(study.facts ?? fallbackFacts());

	let observedId = $state('');
	const activeId = $derived(observedId || study.sections[0]?.id || '');
	let progress = $state(0);
	let articleEl: HTMLElement;
	let bodyEl: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) observedId = entry.target.id;
				}
			},
			{ rootMargin: '-80px 0px -60% 0px', threshold: 0 }
		);

		for (const el of bodyEl.querySelectorAll('section[id]')) observer.observe(el);

		const onScroll = () => {
			const { top, height } = articleEl.getBoundingClientRect();
			const scrollable = height - window.innerHeight;
			progress = scrollable <= 0 ? 1 : Math.min(1, Math.max(0, -top / scrollable));
			// The last section is often too short to cross the spy line; claim it at the end.
			const bodyBottom = bodyEl.getBoundingClientRect().bottom;
			if (bodyBottom <= window.innerHeight + 8) {
				observedId = study.sections[study.sections.length - 1]?.id ?? observedId;
			}
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	});
</script>

<!-- Reading progress: a single weft pick drawn across the top as you read. -->
<div
	class="fixed top-0 left-0 z-[150] h-[3px] w-full origin-left bg-marigold"
	style:transform="scaleX({progress})"
	aria-hidden="true"
></div>

<article bind:this={articleEl}>
	<!-- Header on the indigo warp -->
	<header class="warp">
		<div class="mx-auto max-w-[1200px] px-5 pt-10 pb-12 md:px-10 md:pt-16 md:pb-16">
			<a
				href="/work"
				class="inline-flex items-center gap-2 text-base text-on-indigo-muted no-underline hover:text-on-indigo"
			>
				<svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 10H4M9 5l-5 5 5 5" /></svg>
				All work
			</a>

			<h1
				class="mt-8 font-display font-extrabold leading-[0.9] tracking-[-0.035em] text-on-indigo"
				style="font-size: clamp(3rem, 9vw, 6rem);"
			>
				{item.title}
			</h1>

			{#if study.lede ?? item.summary}
				<p class="mt-6 max-w-[40ch] font-display text-xl font-medium leading-snug text-on-indigo md:text-3xl">
					{study.lede ?? item.summary}
				</p>
			{/if}

			{#if facts.length}
				<dl class="facts mt-10 grid sm:grid-cols-2 lg:grid-cols-3">
					{#each [{ label: 'Year', value: String(item.year) }, ...facts] as fact (fact.label)}
						<div class="fact bg-indigo-950 px-5 py-4">
							<dt class="mb-1 text-sm text-on-indigo-muted">{fact.label}</dt>
							<dd class="text-base leading-snug text-on-indigo">{fact.value}</dd>
						</div>
					{/each}
				</dl>
			{/if}

			{#if study.hero}
				<div class="mt-10">
					<Figure {...study.hero} eager plain />
				</div>
			{/if}
		</div>
	</header>

	<!-- Body on undyed cotton, the reading surface -->
	<div class="cotton bg-cotton text-ink">
		<div class="mx-auto w-full max-w-[1200px] px-5 md:px-10">
			<SectionNav sections={study.sections} {activeId} variant="bar" />

			<div class="md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-14 lg:gap-20">
				<div class="hidden pt-16 md:block">
					<SectionNav sections={study.sections} {activeId} variant="rail" />
				</div>

				<div bind:this={bodyEl} class="min-w-0 pt-10 md:pt-16">
					{#each study.sections as section, sectionIndex (section.id)}
						<section id={section.id} class="mb-20 scroll-mt-20 md:mb-28 md:scroll-mt-10">
							<h2
								class="mb-8 border-b border-rule pb-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-ink md:text-4xl"
							>
								{section.title ?? section.label}
							</h2>

							{#each section.blocks as block, blockIndex (blockIndex)}
								<Block {block} eager={sectionIndex === 0 && blockIndex <= 1} />
							{/each}
						</section>
					{/each}

					<WorkPager {prev} {next} tone="cotton" />
				</div>
			</div>
		</div>
	</div>
</article>

<style>
	.facts {
		/* Any cell the grid leaves empty shows bare warp, not a hole. */
		background-image: repeating-linear-gradient(
			90deg,
			transparent 0 9px,
			color-mix(in oklab, var(--color-on-indigo) 30%, transparent) 9px 10px
		);
		border-top: 1px solid var(--color-indigo-700);
		border-left: 1px solid var(--color-indigo-700);
	}
	.fact {
		border-right: 1px solid var(--color-indigo-700);
		border-bottom: 1px solid var(--color-indigo-700);
	}
</style>
