<script lang="ts">
	/**
	 * One project as a brocade band. The weft colour is the client's own colour.
	 * Rank sets pick density: the flagship is beaten tightest and widest.
	 * Projects without a written case study are bare warp: the threads are up,
	 * nothing has been woven through them yet, and the band says so.
	 */
	import type { WorkItem } from '$lib/types';
	import Img from './Img.svelte';
	import { beat } from '$lib/actions/beat';

	let {
		item,
		flagship = false,
		headingLevel = 3,
		priority = false
	}: { item: WorkItem; flagship?: boolean; headingLevel?: 2 | 3; priority?: boolean } = $props();

	const hasStudy = $derived(Boolean(item.caseStudy));
	const kind = $derived(hasStudy ? 'Case study' : 'Screens only');
	const media = $derived(
		flagship && item.caseStudy?.hero ? [item.caseStudy.hero.src] : item.preview
	);
	const mediaAlt = (i: number) =>
		flagship && item.caseStudy?.hero ? item.caseStudy.hero.alt : `${item.title}, screen ${i + 1}`;
</script>

<article
	use:beat
	class="band group relative"
	class:flagship
	style:--weft={item.bgColor}
>
	<!-- The page's running weft thread passes into this band. -->
	<span class="weft-line" aria-hidden="true"></span>

	<div
		class="strip {hasStudy ? 'picks' : 'bare-warp'}"
		aria-hidden="true"
	></div>

	<div class="body grid gap-6 pt-5 pb-8 md:gap-10 {flagship ? 'md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]' : 'md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]'}">
		<div class="min-w-0">
			<svelte:element
				this={headingLevel === 2 ? 'h2' : 'h3'}
				class="text-on-indigo {flagship
					? 'font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] md:text-7xl'
					: 'type-title'}"
			>
				<a
					href="/work/{item.slug}"
					class="band-link no-underline"
					style:view-transition-name="title-{item.slug}"
				>
					{item.title}
				</a>
			</svelte:element>

			<p class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-on-indigo-muted">
				<span class="kind font-semibold" class:study={hasStudy}>{kind}</span>
				<span aria-hidden="true">·</span>
				<span>{item.category}</span>
				<span aria-hidden="true">·</span>
				<span class="tabular-nums">{item.year}</span>
			</p>

			{#if item.summary}
				<p class="mt-4 max-w-[46ch] text-lg leading-normal text-on-indigo {flagship ? 'md:text-xl' : ''}">
					{item.summary}
				</p>
			{/if}

			{#if item.role}
				<p class="mt-3 text-sm text-on-indigo-muted">{item.role}{#if item.client}{` for ${item.client}`}{/if}</p>
			{/if}

			<p class="cta mt-6 inline-flex items-center gap-2 text-base font-semibold text-marigold" aria-hidden="true">
				{hasStudy ? 'Read the case study' : 'See the screens'}
				<svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M11 5l5 5-5 5" /></svg>
			</p>
		</div>

		<div class="media min-w-0 {flagship ? '' : 'grid grid-cols-3 gap-2 md:gap-3'}">
			{#each media as src, i (src)}
				<div class="frame overflow-hidden {flagship ? 'aspect-[1926/1078]' : 'aspect-[4/5]'}">
					<Img
						{src}
						alt={mediaAlt(i)}
						priority={priority && i === 0}
						eager={flagship && i === 0}
						class="h-full w-full {flagship ? 'object-contain' : 'object-cover object-top'}"
					/>
				</div>
			{/each}
		</div>
	</div>
</article>

<style>
	.band {
		--strip-h: 14px;
		--indent: 1.25rem;
		/* Client colours vary in value; lift dark ones so the weft reads on indigo. */
		--weft-lit: var(--weft);
		/* Client colours vary in value; lift dark ones so the weft reads on indigo. */
		padding-left: var(--indent);
	}
	@supports (color: oklch(from red l c h)) {
		.band {
			--weft-lit: oklch(from var(--weft) max(l, 0.72) max(c, 0.08) h);
		}
	}
	@media (min-width: 768px) {
		.band {
			--indent: 2.5rem;
		}
	}
	.band.flagship {
		--strip-h: 30px;
	}

	.weft-line {
		position: absolute;
		top: calc(var(--strip-h) / 2);
		left: 0;
		width: var(--indent);
		height: 2px;
		background: var(--color-marigold);
		transform-origin: left;
	}

	.strip {
		height: var(--strip-h);
	}
	.strip.picks {
		--pick: var(--pick-1);
		--weft: var(--weft-lit);
	}
	.flagship .strip.picks {
		--pick: var(--pick-0);
	}
	.strip.bare-warp {
		/* One started pick in the client's colour: begun, not yet woven. */
		background-image:
			linear-gradient(var(--weft-lit), var(--weft-lit)),
			repeating-linear-gradient(
				90deg,
				transparent 0 9px,
				var(--color-thread-bare) 9px 10px
			);
		background-size:
			22% 4px,
			auto;
		background-repeat: no-repeat, repeat;
		background-position:
			0 50%,
			0 0;
	}

	/* Hover and focus beat the weft: picks pack to the tightest density. Under
	   reduced motion the density still changes, it just doesn't travel. */
	.band:hover .strip.picks,
	.band:has(.band-link:focus-visible) .strip.picks {
		--pick: var(--pick-0);
	}
	.flagship:hover .strip.picks,
	.flagship:has(.band-link:focus-visible) .strip.picks {
		--pick: 3px;
	}

	.band:global([data-loose]) .strip.picks {
		--pick: var(--pick-3);
	}
	/* Bare warp beats too: its one started pick sits high and is beaten down into place. */
	.band:global([data-loose]) .strip.bare-warp {
		background-position:
			0 0%,
			0 0;
	}

	.kind.study {
		color: var(--color-marigold);
	}

	.frame {
		background: var(--color-indigo-950);
		box-shadow: var(--shadow-screen);
	}
	.flagship .frame {
		border-radius: 4px;
	}

	/* The whole band is the link target; the heading's link stretches over it. */
	.band-link::after {
		content: '';
		position: absolute;
		inset: 0;
	}
	.band-link:focus-visible {
		outline: none;
	}
	.band:has(.band-link:focus-visible) {
		outline: 3px solid var(--color-marigold);
		outline-offset: 6px;
	}
	.band:hover .band-link,
	.band-link:focus-visible {
		text-decoration: underline;
		text-decoration-color: var(--weft-lit);
		text-decoration-thickness: 3px;
	}

	/*
	 * Timing. Hover/focus feedback: fast (180ms in, 120ms out). The beat-in
	 * release: slow (0.9s), only while data-beating is set. Vertical only.
	 */
	@media (prefers-reduced-motion: no-preference) {
		.strip {
			transition:
				--pick 120ms ease-out,
				background-position 120ms ease-out;
		}
		/* Going loose happens off-screen on load: no transition, nothing to watch. */
		.band:global([data-loose]) .strip {
			transition: none;
		}
		.band:global([data-beating]) .strip {
			transition:
				--pick 0.9s var(--ease-beat),
				background-position 0.9s var(--ease-beat);
		}
		/* Declared last so hover keeps its fast timing even during a beat-in. */
		.band:hover .strip,
		.band:has(.band-link:focus-visible) .strip {
			transition:
				--pick 180ms var(--ease-beat),
				background-position 180ms var(--ease-beat);
		}
	}
</style>
