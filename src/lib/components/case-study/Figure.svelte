<script lang="ts">
	import type { ImageRef } from '$lib/types';

	let {
		src,
		alt,
		caption,
		annotation,
		device = 'desktop',
		frame,
		eager = false,
		compact = false,
		plain = false
	}: ImageRef & { eager?: boolean; compact?: boolean; plain?: boolean } = $props();

	let dialogEl: HTMLDialogElement | undefined = $state();
</script>

<figure class="mb-10 last:mb-0">
	<button
		type="button"
		onclick={() => dialogEl?.showModal()}
		class="block w-full text-left {device === 'mobile' ? 'max-w-[300px]' : ''}"
		aria-label="Enlarge image: {alt}"
	>
		<div
			class="overflow-hidden rounded-[16px] transition-opacity hover:opacity-90 {plain
				? ''
				: 'bg-[#e8e8e8] border border-[#e0e0e0]'}"
		>
			<img
				{src}
				{alt}
				loading={eager ? 'eager' : 'lazy'}
				decoding="async"
				class="w-full h-auto block"
			/>
		</div>
	</button>

	{#if caption || annotation || frame}
		<figcaption class="mt-3 {device === 'mobile' ? 'max-w-[300px]' : ''}">
			{#if frame}
				<span
					class="inline-block text-[10px] tracking-widest uppercase text-[#aaa] border border-[#e0e0e0] rounded px-1.5 py-0.5 mb-2 font-mono"
				>
					{frame}
				</span>
			{/if}
			{#if caption}
				<p class="text-sm text-[#555] leading-relaxed">{caption}</p>
			{/if}
			{#if annotation && !compact}
				<p class="mt-3 pl-4 border-l-2 border-[#111]/15 text-sm text-[#777] leading-relaxed">
					{annotation}
				</p>
			{/if}
		</figcaption>
	{/if}
</figure>

<dialog
	bind:this={dialogEl}
	class="backdrop:bg-[#111]/85 bg-transparent p-0 m-0 max-w-none max-h-none w-full h-full open:flex items-center justify-center"
>
	<button
		type="button"
		onclick={() => dialogEl?.close()}
		class="w-full h-full flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
		aria-label="Close enlarged image"
	>
		<img {src} {alt} class="max-w-full max-h-full object-contain rounded-[8px]" />
	</button>
	<span
		class="hint pointer-events-none fixed bottom-5 left-1/2 -translate-x-1/2 max-w-[calc(100vw-2rem)] rounded-full bg-[#111]/70 px-4 py-2 text-center text-[11px] tracking-widest uppercase text-white/80"
	>
		<span class="pointer">Click anywhere or press Esc to close</span>
		<span class="touch">Tap anywhere to close</span>
	</span>
</dialog>

<style>
	/* Touch devices have no Esc key, so the hint names the gesture they do have. */
	.hint .touch {
		display: none;
	}

	@media (pointer: coarse) {
		.hint .pointer {
			display: none;
		}
		.hint .touch {
			display: inline;
		}
	}
</style>
