<script lang="ts">
	import type { CaseStudySection } from '$lib/types';

	let {
		sections,
		activeId,
		variant = 'rail'
	}: { sections: CaseStudySection[]; activeId: string; variant?: 'rail' | 'bar' } = $props();

	const fadeRight = `background: linear-gradient(to left, var(--color-cotton) 40%, transparent 100%);`;
	const fadeLeft = `background: linear-gradient(to right, var(--color-cotton) 40%, transparent 100%);`;

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
		listEl.scrollTo({
			left: Math.max(0, target),
			behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
		});
	});
</script>

{#if variant === 'rail'}
	<nav aria-label="Case study sections" class="sticky top-10 self-start">
		<p class="mb-4 text-sm font-semibold text-ink">Contents</p>
		<ul class="space-y-0.5 border-l border-rule">
			{#each sections as section (section.id)}
				<li>
					<a
						href="#{section.id}"
						aria-current={activeId === section.id ? 'true' : undefined}
						class="rail-link -ml-px block py-1.5 pl-4 text-[15px] no-underline transition-colors {activeId ===
						section.id
							? 'is-active font-semibold text-ink'
							: 'text-ink-muted hover:text-ink'}"
					>
						{section.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{:else}
	<nav
		aria-label="Case study sections"
		class="sticky top-0 z-40 -mx-5 border-b border-rule bg-cotton md:hidden"
	>
		<div class="relative">
			<ul
				bind:this={listEl}
				onscroll={updateEdges}
				class="flex overflow-x-auto px-3 py-2"
				style="scrollbar-width: none; -webkit-overflow-scrolling: touch;"
			>
				{#each sections as section (section.id)}
					<li class="shrink-0" data-section={section.id}>
						<a
							href="#{section.id}"
							aria-current={activeId === section.id ? 'true' : undefined}
							class="bar-link block px-3 py-2.5 text-sm whitespace-nowrap no-underline transition-colors {activeId ===
							section.id
								? 'is-active font-semibold text-ink'
								: 'text-ink-muted'}"
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
					<svg viewBox="0 0 20 20" class="h-4 w-4 text-ink-muted" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5l5 5-5 5" /></svg>
				</div>
			{/if}
		</div>
	</nav>
{/if}

<style>
	/* Woven tabs: the active section is a short band of tightly beaten cochineal picks. */
	.rail-link.is-active {
		background-image: repeating-linear-gradient(
			180deg,
			var(--color-cochineal) 0 2px,
			transparent 2px 4px
		);
		background-repeat: no-repeat;
		background-size: 6px 100%;
		background-position: 0 0;
	}
	.bar-link.is-active {
		background-image: repeating-linear-gradient(
			180deg,
			var(--color-cochineal) 0 2px,
			transparent 2px 4px
		);
		background-repeat: no-repeat;
		background-size: calc(100% - 1.5rem) 8px;
		background-position: 50% 100%;
	}
</style>
