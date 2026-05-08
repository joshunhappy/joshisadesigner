<script lang="ts">
	import { onMount } from 'svelte';
	import { initCursor } from '$lib/animations/cursor';

	let ring: HTMLDivElement;
	let dot: HTMLDivElement;

	onMount(() => {
		const cleanup = initCursor(ring, dot);
		return cleanup;
	});
</script>

<div class="pointer-coarse:hidden">
	<div
		bind:this={ring}
		class="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
	></div>
	<div
		bind:this={dot}
		class="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
	></div>
</div>
