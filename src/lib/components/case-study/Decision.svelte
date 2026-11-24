<script lang="ts">
	import type { DecisionBlock } from '$lib/types';

	let { block }: { block: DecisionBlock } = $props();
</script>

<article class="mb-8 rounded-[18px] border border-[#e0e0e0] bg-white overflow-hidden">
	<header class="px-5 pt-5 pb-4 md:px-7 md:pt-7">
		<p class="text-[10px] tracking-widest uppercase text-[#aaa] mb-2">Decision</p>
		<h3 class="text-xl font-bold text-[#111] leading-snug">{block.title}</h3>
	</header>

	<div class="px-5 pb-6 md:px-7 md:pb-7 space-y-6">
		<div>
			<p class="text-[10px] tracking-widest uppercase text-[#aaa] mb-2">The tension</p>
			<p class="text-sm text-[#555] leading-relaxed">{block.problem}</p>
		</div>

		<div>
			<p class="text-[10px] tracking-widest uppercase text-[#aaa] mb-2">Options</p>
			<ul class="space-y-2">
				{#each block.options as option (option.label)}
					<li class="flex gap-3 items-start">
						<span
							class="mt-[6px] w-2 h-2 rounded-full shrink-0 {option.chosen
								? 'bg-[#111]'
								: 'bg-[#d5d5d5]'}"
						></span>
						<span class="text-sm leading-relaxed {option.chosen ? 'text-[#111]' : 'text-[#888]'}">
							<span class={option.chosen ? 'font-semibold' : ''}>{option.label}</span>
							{#if option.chosen}
								<span class="text-[10px] tracking-widest uppercase text-[#aaa] ml-2">Chosen</span>
							{/if}
							{#if option.note}
								<span class="block text-xs text-[#999] mt-0.5">{option.note}</span>
							{/if}
						</span>
					</li>
				{/each}
			</ul>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			<div>
				<p class="text-[10px] tracking-widest uppercase text-[#aaa] mb-2">Why</p>
				<p class="text-sm text-[#555] leading-relaxed">{block.rationale}</p>
			</div>
			<div class="md:border-l md:border-[#e0e0e0] md:pl-6">
				<p class="text-[10px] tracking-widest uppercase text-[#aaa] mb-2">What it cost</p>
				<p class="text-sm text-[#555] leading-relaxed">{block.tradeoff}</p>
			</div>
		</div>
	</div>
</article>
