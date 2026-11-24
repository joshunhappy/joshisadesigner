<script lang="ts">
	import type { CaseStudySection } from '$lib/types';

	let {
		sections,
		activeId,
		variant = 'rail'
	}: { sections: CaseStudySection[]; activeId: string; variant?: 'rail' | 'bar' } = $props();

	const PAGE_BG = '#f5f5f5';
	const fadeRight = `background: linear-gradient(to left, ${PAGE_BG} 40%, rgba(245, 245, 245, 0) 100%);`;
	const fadeLeft = `background: linear-gradient(to right, ${PAGE_BG} 40%, rgba(245, 245, 245, 0) 100%);`;

	let listEl: HTMLUListElement | undefined = $state();
	let canScrollLeft = $state(false);
	let canScrollRight = $state(false);

	function updateEdges() {
		if (!listEl) return;
		const { scrollLeft, scrollWidth, clientWidth } = listEl;
		canScrollLeft = scrollLeft > 4;
		canScrollRight = scrollLeft + clientWidth < scrollWidth - 4;
	}

	/** Edge cues: only show a fade on a side that still has items hidden behind it. */
	$effect(() => {
		if (variant !== 'bar' || !listEl) return;

		updateEdges();
		const observer = new ResizeObserver(updateEdges);
		observer.observe(listEl);
		window.addEventListener('resize', updateEdges);

		return () => {
			observer.disconnect();
			window.removeEventListener('resize', updateEdges);
		};
	});

	/** Follow scroll-spy: keep the active label centred so the list visibly moves. */
	$effect(() => {
		const id = activeId;
		if (variant !== 'bar' || !listEl || listEl.clientWidth === 0) return;

		const item = listEl.querySelector<HTMLElement>(`[data-section="${id}"]`);
		if (!item) return;

		const target = item.offsetLeft - (listEl.clientWidth - item.offsetWidth) / 2;
		listEl.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
	});
</script>

{#if variant === 'rail'}
	<nav aria-label="Case study sections" class="sticky top-32 self-start">
		<p class="text-[10px] tracking-widest uppercase text-[#bbb] mb-4">Contents</p>
		<ul class="space-y-1">
			{#each sections as section, i (section.id)}
				<li>
					<a
						href="#{section.id}"
						aria-current={activeId === section.id ? 'true' : undefined}
						class="flex items-baseline gap-3 py-1.5 text-sm transition-colors {activeId ===
						section.id
							? 'text-[#111]'
							: 'text-[#aaa] hover:text-[#555]'}"
					>
						<span class="text-[10px] font-mono {activeId === section.id ? 'text-[#111]' : 'text-[#ccc]'}">
							{String(i + 1).padStart(2, '0')}
						</span>
						<span class={activeId === section.id ? 'font-semibold' : ''}>{section.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{:else}
	<nav
		aria-label="Case study sections"
		class="sticky top-[84px] z-40 -mx-6 bg-[#f5f5f5] md:hidden"
	>
		<div class="relative">
			<ul
				bind:this={listEl}
				onscroll={updateEdges}
				class="flex overflow-x-auto px-6 py-3"
				style="scrollbar-width: none; -webkit-overflow-scrolling: touch;"
			>
				{#each sections as section (section.id)}
					<li class="shrink-0" data-section={section.id}>
						<a
							href="#{section.id}"
							aria-current={activeId === section.id ? 'true' : undefined}
							class="block border-b px-3 py-1.5 text-xs whitespace-nowrap transition-colors {activeId ===
							section.id
								? 'text-[#111]'
								: 'text-[#aaa] '}"
						>
							{section.label}
						</a>
					</li>
				{/each}
			</ul>

			{#if canScrollLeft}
				<div
					class="pointer-events-none absolute inset-y-0 left-0 w-10"
					style={fadeLeft}
					aria-hidden="true"
				></div>
			{/if}

			{#if canScrollRight}
				<div
					class="pointer-events-none absolute inset-y-0 right-0 flex w-14 items-center justify-end pr-2"
					style={fadeRight}
					aria-hidden="true"
				>
					<span class="text-base leading-none text-[#888]">›</span>
				</div>
			{/if}
		</div>
	</nav>
{/if}
