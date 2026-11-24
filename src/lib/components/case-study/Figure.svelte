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
	/** The full-size copy only exists while the lightbox is open, so closed dialogs fetch nothing. */
	let open = $state(false);
</script>

<figure class="mb-10 last:mb-0">
	<!-- A real link to the full image, so it still works without JavaScript; with JS it opens the lightbox. -->
	<a
		href={src}
		onclick={(e) => {
			if (!dialogEl?.showModal) return;
			e.preventDefault();
			open = true;
			dialogEl.showModal();
		}}
		class="block w-full text-left {device === 'mobile' ? 'max-w-[300px]' : ''}"
		aria-label="Enlarge image: {alt}"
	>
		<div
			class="overflow-hidden rounded-sm transition-opacity hover:opacity-90 {plain
				? ''
				: 'bg-cotton-deep border border-rule'}"
		>
			<img
				{src}
				{alt}
				loading={eager ? 'eager' : 'lazy'}
				decoding="async"
				class="w-full h-auto block"
			/>
		</div>
	</a>

	{#if caption || annotation || frame}
		<figcaption class="mt-3 {device === 'mobile' ? 'max-w-[300px]' : ''}">
			{#if frame}
				<span
					class="inline-block text-xs text-ink-faint border border-rule rounded-sm px-1.5 py-0.5 mb-2"
				>
					{frame}
				</span>
			{/if}
			{#if caption}
				<p class="max-w-[30rem] text-sm text-ink-muted leading-relaxed">{caption}</p>
			{/if}
			{#if annotation && !compact}
				<p class="mt-3 max-w-[30rem] bg-cotton-deep px-4 py-3 text-sm text-ink-muted leading-relaxed">
					{annotation}
				</p>
			{/if}
		</figcaption>
	{/if}
</figure>

<dialog
	bind:this={dialogEl}
	onclose={() => (open = false)}
	class="backdrop:bg-indigo-950/90 bg-transparent p-0 m-0 max-w-none max-h-none w-full h-full open:flex items-center justify-center"
>
	<button
		type="button"
		onclick={() => dialogEl?.close()}
		class="w-full h-full flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
		aria-label="Close enlarged image"
	>
		{#if open}
			<img {src} {alt} class="max-w-full max-h-full object-contain rounded-sm" />
		{/if}
	</button>
	<span
		class="hint pointer-events-none fixed bottom-5 left-1/2 -translate-x-1/2 max-w-[calc(100vw-2rem)] rounded-full bg-indigo-950/85 px-4 py-2 text-center text-sm text-on-indigo"
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
