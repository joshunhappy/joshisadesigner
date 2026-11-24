<script lang="ts">
	import type { FlowBlock } from '$lib/types';

	let { block }: { block: FlowBlock } = $props();

	const trackColors: Record<string, string> = {
		Shared: 'var(--color-track-shared)',
		'Top-up': 'var(--color-track-a)',
		'Gift card': 'var(--color-track-b)'
	};

	const color = (track?: string) => (track && trackColors[track]) || 'var(--color-ink-faint)';

	const tracks = $derived([...new Set(block.steps.map((s) => s.track).filter(Boolean))] as string[]);
</script>

<div class="mb-10">
	{#if block.heading}
		<h3 class="text-sm font-semibold text-ink mb-4">{block.heading}</h3>
	{/if}

	{#if tracks.length > 1}
		<div class="flex flex-wrap items-center gap-4 mb-5">
			{#each tracks as track (track)}
				<span class="flex items-center gap-2 text-xs text-ink-muted">
					<span class="w-2 h-2 rounded-full shrink-0" style:background-color={color(track)}></span>
					{track}
				</span>
			{/each}
		</div>
	{/if}

	<ol class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
		{#each block.steps as step, i (step.label + i)}
			<li class="border-t-[3px] bg-cotton-light px-4 py-4" style:border-color={color(step.track)}>
				<div class="flex items-baseline gap-3">
					<span class="text-xs tabular-nums text-ink-faint shrink-0">
						{String(i + 1).padStart(2, '0')}
					</span>
					<div class="min-w-0">
						<p class="text-sm font-semibold text-ink leading-snug">{step.label}</p>
						{#if step.detail}
							<p class="text-xs text-ink-muted leading-relaxed mt-1">{step.detail}</p>
						{/if}
						{#if step.branch}
							<p class="text-sm font-semibold text-ink mt-2">Fork / rejoin</p>
						{/if}
					</div>
				</div>
			</li>
		{/each}
	</ol>

	{#if block.caption}
		<p class="text-sm text-ink-muted leading-relaxed mt-4">{block.caption}</p>
	{/if}
</div>
