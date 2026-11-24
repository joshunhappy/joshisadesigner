<script lang="ts">
	import { responsive } from '$lib/images';
	/**
	 * Single place every project raster renders through, so the image pipeline
	 * (srcset, modern formats, intrinsic size) can change in one file.
	 * A failed load renders as bare warp carrying the alt text.
	 */
	let {
		src,
		alt,
		eager = false,
		priority = false,
		sizes = '100vw',
		class: className = ''
	}: {
		src: string;
		alt: string;
		eager?: boolean;
		priority?: boolean;
		sizes?: string;
		class?: string;
	} = $props();

	let failed = $state(false);
	const r = $derived(responsive(src));
</script>

{#if failed}
	<span
		role="img"
		aria-label={alt}
		class="bare-warp flex items-end p-3 text-sm text-on-indigo-muted {className}"
	>
		<span aria-hidden="true">Image unavailable</span>
	</span>
{:else}
	<img
		src={r.src}
		srcset={r.srcset}
		width={r.width}
		height={r.height}
		{alt}
		{sizes}
		loading={eager || priority ? 'eager' : 'lazy'}
		fetchpriority={priority ? 'high' : undefined}
		decoding="async"
		class={className}
		onerror={() => (failed = true)}
	/>
{/if}
