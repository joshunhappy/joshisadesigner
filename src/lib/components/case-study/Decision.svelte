<script lang="ts">
	import type { DecisionBlock } from '$lib/types';

	let { block }: { block: DecisionBlock } = $props();
</script>

<article class="mb-8 rounded-sm border border-rule bg-cotton-light overflow-hidden">
	<header class="px-5 pt-5 pb-4 md:px-7 md:pt-7">
				<h3 class="font-display text-xl font-extrabold leading-snug text-ink">{block.title}</h3>
	</header>

	<div class="px-5 pb-6 md:px-7 md:pb-7 space-y-6">
		<div>
			<p class="text-sm font-semibold text-ink mb-2">The tension</p>
			<p class="text-sm text-ink-muted leading-relaxed">{block.problem}</p>
		</div>

		<div>
			<p class="text-sm font-semibold text-ink mb-2">Options</p>
			<ul class="space-y-2">
				{#each block.options as option (option.label)}
					<li class="flex gap-3 items-start">
						<span
							class="mt-[6px] w-2 h-2 rounded-full shrink-0 {option.chosen
								? 'bg-ink'
								: 'bg-rule'}"
						></span>
						<span class="text-sm leading-relaxed {option.chosen ? 'text-ink' : 'text-ink-faint'}">
							<span class={option.chosen ? 'font-semibold' : ''}>{option.label}</span>
							{#if option.chosen}
								<span class="ml-2 text-xs font-semibold text-cochineal">Chosen</span>
							{/if}
							{#if option.note}
								<span class="block text-xs text-ink-faint mt-0.5">{option.note}</span>
							{/if}
						</span>
					</li>
				{/each}
			</ul>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			<div>
				<p class="text-sm font-semibold text-ink mb-2">Why</p>
				<p class="text-sm text-ink-muted leading-relaxed">{block.rationale}</p>
			</div>
			<div class="md:border-l md:border-rule md:pl-6">
				<p class="text-sm font-semibold text-ink mb-2">What it cost</p>
				<p class="text-sm text-ink-muted leading-relaxed">{block.tradeoff}</p>
			</div>
		</div>
	</div>
</article>
