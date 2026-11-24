<script lang="ts">
	/**
	 * Facts on the canvas: no fill, no outer box, hairlines only between facts.
	 * Empty filler cells complete the last row at two and three columns so the
	 * dividers run to the container's edges.
	 */
	import type { Fact } from '$lib/types';

	let { facts }: { facts: Fact[] } = $props();

	const need2 = $derived((2 - (facts.length % 2)) % 2);
	const need3 = $derived((3 - (facts.length % 3)) % 3);
	const fillers = $derived(Math.max(need2, need3));
</script>

{#if facts.length}
	<div class="mt-10 overflow-hidden">
		<dl class="-mt-px -ml-px grid sm:grid-cols-2 lg:grid-cols-3">
			{#each facts as fact (fact.label)}
				<div class="fact py-4 pr-5">
					<dt class="mb-1 text-sm text-ink-muted">{fact.label}</dt>
					<dd class="text-base leading-snug">{fact.value}</dd>
				</div>
			{/each}
			{#each { length: fillers } as _, i (i)}
				<!-- Filler: completes the row at the column counts that need it. -->
				<div
					class="fact filler"
					class:at-2={i < need2}
					class:at-3={i < need3}
					aria-hidden="true"
				></div>
			{/each}
		</dl>
	</div>
{/if}

<style>
	/* Lines only between facts: each cell draws its top and left edge, and the
	   grid sits 1px up-left inside a clipping wrapper so the outer edges are hidden. */
	.fact {
		border-top: 1px solid var(--color-rule);
		border-left: 1px solid var(--color-rule);
		/* Cells that start a row sit flush with the page text: 1, 2 or 3 columns. */
		padding-left: 0;
	}
	.filler {
		display: none;
	}
	@media (min-width: 640px) {
		.fact {
			padding-left: 1.25rem;
		}
		.fact:nth-child(2n + 1) {
			padding-left: 0;
		}
		.filler.at-2 {
			display: block;
		}
	}
	@media (min-width: 1024px) {
		.fact:nth-child(2n + 1) {
			padding-left: 1.25rem;
		}
		.fact:nth-child(3n + 1) {
			padding-left: 0;
		}
		.filler {
			display: none;
		}
		.filler.at-3 {
			display: block;
		}
	}
</style>
