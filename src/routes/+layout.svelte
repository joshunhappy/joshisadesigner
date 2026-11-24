<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';
	import { onNavigate } from '$app/navigation';
	import SiteHeader from '$lib/components/loom/SiteHeader.svelte';
	import ContactClose from '$lib/components/loom/ContactClose.svelte';

	let { children } = $props();

	// Continuity: a project's title carries from its band into the project header.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	onMount(() => {
		const id = env.PUBLIC_CLARITY_ID;
		if (!id || !import.meta.env.PROD) return;
		import('@microsoft/clarity').then(({ default: Clarity }) => Clarity.init(id));
	});
</script>

<svelte:head>
	<link rel="preload" href="/fonts/bricolage-grotesque-latin.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>

<SiteHeader />

<main id="main" tabindex="-1" class="min-h-[60vh] focus:outline-none">
	{@render children()}
</main>

<ContactClose />
