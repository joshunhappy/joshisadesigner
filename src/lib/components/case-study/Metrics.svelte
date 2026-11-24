<script lang="ts">
	import type { MetricsBlock } from '$lib/types';

	let { block }: { block: MetricsBlock } = $props();
</script>

<div class="mb-10">
	{#if block.heading}
		<h3 class="text-xs tracking-widest uppercase text-[#aaa] mb-4">{block.heading}</h3>
	{/if}

	<div class="grid gap-px bg-[#e0e0e0] rounded-[18px] overflow-hidden sm:grid-cols-3">
		{#each block.items as metric (metric.label)}
			<div class="bg-white px-5 py-6">
				<p class="text-3xl font-black text-[#111] leading-none mb-2">{metric.value}</p>
				<p class="text-sm text-[#555] leading-snug">{metric.label}</p>
				{#if metric.note}
					<p class="text-xs text-[#999] leading-relaxed mt-2">{metric.note}</p>
				{/if}
			</div>
		{/each}
	</div>

	{#if block.note}
		<p class="text-xs text-[#999] leading-relaxed mt-3">{block.note}</p>
	{/if}
</div>
