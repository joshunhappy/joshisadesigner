<script lang="ts">
	import { site } from '$lib/site';
	import AboutSection from '$lib/components/site/AboutSection.svelte';

	const description =
		'UI/UX designer with experience across websites, mobile apps, design systems, and production interfaces for telecom, SaaS, and consumer services.';
</script>

<svelte:head>
	<title>About · Josh De La Cruz</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="profile" />
	<meta property="og:url" content="{site.url}/about" />
	<meta property="og:title" content="About Josh De La Cruz · UI/UX Designer" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{site.url}/images/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About Josh De La Cruz · UI/UX Designer" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{site.url}/images/og-image.jpg" />
	<link rel="canonical" href="{site.url}/about" />
</svelte:head>

<div class="pt-4 md:pt-8">
	<AboutSection headingLevel={1} />
</div>
