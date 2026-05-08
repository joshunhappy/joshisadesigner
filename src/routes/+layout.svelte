<script lang="ts">
	import '../app.css';
	import { onMount, tick } from 'svelte';
	import { onNavigate, afterNavigate } from '$app/navigation';
	import Cursor from '$lib/components/Cursor.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { leave, enter } from '$lib/animations/transitions';

	let { children } = $props();

	let navOpen = $state(false);
	let pageEl: HTMLElement;
</script>


<Cursor />
<Nav bind:open={navOpen} />

<!-- Logo -->
<a
	href="/"
	class="fixed left-6 top-6 z-[200] block"
	onclick={() => (navOpen = false)}
>
	<div class="bg-[#111] text-white px-3 py-2 leading-tight font-black text-xs tracking-tight">
		<div>JOSH</div>
		<div>DE LA</div>
		<div>CRUZ</div>
	</div>
</a>

<!-- Hamburger / Close -->
<button
	onclick={() => (navOpen = !navOpen)}
	class="fixed right-6 top-6 z-[200] p-2 focus:outline-none"
	aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
>
	<div class="flex flex-col gap-[5px] w-6 py-1">
		<span
			class="block h-px w-6 bg-[#111] origin-center transition-transform duration-300 ease-in-out"
			style:transform={navOpen ? 'translateY(6px) rotate(45deg)' : 'none'}
		></span>
		<span
			class="block h-px w-6 bg-[#111] transition-opacity duration-200 ease-in-out"
			style:opacity={navOpen ? '0' : '1'}
		></span>
		<span
			class="block h-px w-6 bg-[#111] origin-center transition-transform duration-300 ease-in-out"
			style:transform={navOpen ? 'translateY(-6px) rotate(-45deg)' : 'none'}
		></span>
	</div>
</button>

<main bind:this={pageEl} id="page-content" class="min-h-screen">
	{@render children()}
</main>

<Footer />
