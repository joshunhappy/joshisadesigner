<script lang="ts">
	import { onMount } from 'svelte';
	import type { WorkItem, CaseStudy, Fact } from '$lib/types';
	import SectionNav from './SectionNav.svelte';
	import Block from './Block.svelte';
	import Figure from './Figure.svelte';
	import WorkPager from '$lib/components/site/WorkPager.svelte';
	import FactsGrid from '$lib/components/site/FactsGrid.svelte';
	import LiveLinks from '$lib/components/site/LiveLinks.svelte';

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

<!-- Reading progress: a thin black rule across the top as you read. -->
<div
	class="fixed top-0 left-0 z-[150] h-[3px] w-full origin-left bg-ink"
	style:transform="scaleX({progress})"
	aria-hidden="true"
></div>

<article bind:this={articleEl}>
	<header>
		<div class="mx-auto max-w-[1200px] px-5 pt-10 pb-12 md:px-10 md:pt-16 md:pb-16">
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

			{#if study.lede ?? item.summary}
				<p class="type-lede mt-6 max-w-[40ch]">
					{study.lede ?? item.summary}
				</p>
			{/if}

			<LiveLinks links={item.live} />

			<FactsGrid facts={[{ label: 'Year', value: String(item.year) }, ...facts]} />

			{#if study.hero}
				<div class="mt-10">
					<Figure {...study.hero} eager plain />
				</div>
			{/if}
		</div>
	</header>

	<!-- Body: the reading column -->
	<div class="bg-canvas text-ink">
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
								class="type-title mb-8 border-b border-rule pb-5 text-ink"
							>
								{section.title ?? section.label}
							</h2>

							{#each section.blocks as block, blockIndex (blockIndex)}
								<Block {block} eager={sectionIndex === 0 && blockIndex <= 1} />
							{/each}
						</section>
					{/each}

					<WorkPager {prev} {next} />
				</div>
			</div>
		</div>
	</div>
</article>
