<script lang="ts">
	import { onMount } from 'svelte';
	import type { WorkItem, CaseStudy, Fact } from '$lib/types';
	import SectionNav from './SectionNav.svelte';
	import Block from './Block.svelte';
	import Figure from './Figure.svelte';

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

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) observedId = entry.target.id;
				}
			},
			{ rootMargin: '-140px 0px -60% 0px', threshold: 0 }
		);

		for (const el of articleEl.querySelectorAll('section[id]')) observer.observe(el);

		const onScroll = () => {
			const { top, height } = articleEl.getBoundingClientRect();
			const scrollable = height - window.innerHeight;
			progress = scrollable <= 0 ? 1 : Math.min(1, Math.max(0, -top / scrollable));
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

<!--
	Header band: the logo and menu button are fixed with no backdrop of their own,
	so page content scrolls visibly under them. Height matches the section nav's
	`top-[84px]` so the two meet without overlapping.
-->
<div class="fixed inset-x-0 top-0 h-[84px] bg-[#f5f5f5] z-[90]" aria-hidden="true"></div>

<!-- Reading progress -->
<div
	class="fixed top-0 left-0 h-[2px] bg-[#111] z-[150] origin-left transition-[width] duration-100"
	style:width="{progress * 100}%"
	aria-hidden="true"
></div>

<article bind:this={articleEl} class="pt-24 pb-16">
	<div class="mx-auto w-full max-w-[1200px] px-6">

		<SectionNav sections={study.sections} {activeId} variant="bar" />

		<div class="md:grid md:grid-cols-[180px_1fr] md:gap-16 lg:gap-24">
			<div class="hidden md:block">
				<SectionNav sections={study.sections} {activeId} variant="rail" />
			</div>

			<div class="min-w-0 pt-10 md:pt-0">
        <!-- Hero -->
        <header class="mb-12 md:mb-20">
          <a
            href="/work"
            class="text-xs text-[#888] hover:text-[#111] transition-colors tracking-widest uppercase mb-8 inline-block"
          >
            ← All Work
          </a>

          <p class="text-xs tracking-widest uppercase text-[#aaa] mb-4">
            {item.category} · {item.year}
          </p>

          <h1
            class="font-black leading-none text-[#111] uppercase mb-6"
            style="font-size: clamp(2.5rem, 9vw, 5.5rem);"
          >
            {item.title}
          </h1>

          {#if study.lede ?? item.summary}
            <p class="text-xl md:text-2xl font-light text-[#111] leading-snug mb-10">
              {study.lede ?? item.summary}
            </p>
          {/if}

          {#if facts.length}
            <dl class="grid gap-px bg-[#e0e0e0] rounded-[18px] overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
              {#each facts as fact (fact.label)}
                <div class="bg-gray-100 px-5 py-4">
                  <dt class="text-[10px] tracking-widest uppercase text-[#aaa] mb-1.5">{fact.label}</dt>
                  <dd class="text-sm text-[#111] leading-snug">{fact.value}</dd>
                </div>
              {/each}
            </dl>
          {/if}

          {#if study.hero}
            <div class="mt-10">
              <Figure {...study.hero} eager plain />
            </div>
          {/if}
        </header>

				{#each study.sections as section, sectionIndex (section.id)}
					<section id={section.id} class="scroll-mt-32 mb-20 md:mb-28">
						<header class="mb-8 pb-5 border-b border-[#e0e0e0]">
							<p class="text-[10px] font-mono text-[#bbb] mb-2">
								{String(sectionIndex + 1).padStart(2, '0')}
							</p>
							<h2 class="text-2xl md:text-3xl font-bold text-[#111] leading-tight">
								{section.title ?? section.label}
							</h2>
						</header>

						{#each section.blocks as block, blockIndex (blockIndex)}
							<Block {block} eager={sectionIndex === 0 && blockIndex <= 1} />
						{/each}
					</section>
				{/each}

				<!-- Prev / next -->
				<nav
					aria-label="Project navigation"
					class="pt-8 border-t border-[#e0e0e0] flex items-center justify-between gap-4"
				>
					<a
						href="/work"
						class="text-xs text-[#888] hover:text-[#111] transition-colors tracking-widest uppercase"
					>
						← All Work
					</a>
					<div class="flex items-center gap-2">
						<a
							href="/work/{prev.slug}"
							class="w-10 h-10 rounded-full bg-[#111] text-white flex items-center justify-center text-xl hover:opacity-80 transition-opacity"
							aria-label="Previous project: {prev.title}"
						>
							‹
						</a>
						<a
							href="/work/{next.slug}"
							class="w-10 h-10 rounded-full bg-[#111] text-white flex items-center justify-center text-xl hover:opacity-80 transition-opacity"
							aria-label="Next project: {next.title}"
						>
							›
						</a>
					</div>
				</nav>
			</div>
		</div>
	</div>
</article>
