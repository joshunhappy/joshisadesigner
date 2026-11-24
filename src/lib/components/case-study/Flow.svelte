<script lang="ts">
	import type { FlowBlock } from '$lib/types';

	let { block }: { block: FlowBlock } = $props();

	const trackColors: Record<string, string> = {
		Shared: '#111111',
		'Top-up': '#F97316',
		'Gift card': '#6D28D9'
	};

	const color = (track?: string) => (track && trackColors[track]) || '#888888';

	const tracks = $derived([...new Set(block.steps.map((s) => s.track).filter(Boolean))] as string[]);
</script>

<div class="mb-10">
	{#if block.heading}
		<h3 class="text-xs tracking-widest uppercase text-[#aaa] mb-4">{block.heading}</h3>
	{/if}

	{#if tracks.length > 1}
		<div class="flex flex-wrap items-center gap-4 mb-5">
			{#each tracks as track (track)}
				<span class="flex items-center gap-2 text-xs text-[#555]">
					<span class="w-2 h-2 rounded-full shrink-0" style:background-color={color(track)}></span>
					{track}
				</span>
			{/each}
		</div>
	{/if}

	<ol class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
		{#each block.steps as step, i (step.label + i)}
			<li
				class="relative px-4 py-4"
			>
				<span
					class="absolute left-0 top-4 bottom-4 w-[3px] rounded-full"
					style:background-color={color(step.track)}
				></span>

				<div class="flex items-baseline gap-3 pl-2">
					<span class="text-[11px] font-mono text-[#bbb] shrink-0">
						{String(i + 1).padStart(2, '0')}
					</span>
					<div class="min-w-0">
						<p class="text-sm font-semibold text-[#111] leading-snug">{step.label}</p>
						{#if step.detail}
							<p class="text-xs text-[#777] leading-relaxed mt-1">{step.detail}</p>
						{/if}
						{#if step.branch}
							<p class="text-[10px] tracking-widest uppercase text-[#aaa] mt-2">Fork / rejoin</p>
						{/if}
					</div>
				</div>
			</li>
		{/each}
	</ol>

	{#if block.caption}
		<p class="text-sm text-[#777] leading-relaxed mt-4">{block.caption}</p>
	{/if}
</div>
