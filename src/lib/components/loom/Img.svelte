<script lang="ts">
	/**
	 * Single place every project raster renders through, so the image pipeline
	 * (srcset, modern formats, intrinsic size) can change in one file.
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
</script>

<img
	{src}
	{alt}
	{sizes}
	loading={eager || priority ? 'eager' : 'lazy'}
	fetchpriority={priority ? 'high' : undefined}
	decoding="async"
	class={className}
/>
