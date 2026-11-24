<script lang="ts">
	import type { CompareBlock } from '$lib/types';
	import Figure from './Figure.svelte';

	let { block }: { block: CompareBlock } = $props();
</script>

<div class="mb-10">
	{#if block.heading}
		<h3 class="text-xs tracking-widest uppercase text-[#aaa] mb-4">{block.heading}</h3>
	{/if}

	<div class="grid gap-8 md:grid-cols-2 md:items-start">
		<div>
			<p class="text-[10px] tracking-widest uppercase text-[#aaa] mb-3">
				{block.beforeLabel ?? 'Before'}
			</p>
			<Figure {...block.before} compact />
		</div>
		<div>
			<p class="text-[10px] tracking-widest uppercase text-[#aaa] mb-3">
				{block.afterLabel ?? 'After'}
			</p>
			<Figure {...block.after} compact />
		</div>
	</div>

	{#if block.caption}
		<p class="text-sm text-[#777] leading-relaxed mt-2">{block.caption}</p>
	{/if}
</div>
