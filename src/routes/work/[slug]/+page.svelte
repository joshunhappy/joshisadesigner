<script lang="ts">
	import type { PageData } from './$types';
	import CaseStudy from '$lib/components/case-study/CaseStudy.svelte';
	import ProjectGallery from '$lib/components/ProjectGallery.svelte';

	let { data }: { data: PageData } = $props();
	const { item, prev, next } = $derived(data);
</script>

<svelte:head>
	<title>{item.title} · Josh De La Cruz</title>
	<meta name="description" content={item.description} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://joshisadesigner.com/work/{item.slug}" />
	<meta property="og:title" content="{item.title} · Josh De La Cruz" />
	<meta property="og:description" content={item.description} />
	<meta property="og:image" content="https://joshisadesigner.com{item.cover}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{item.title} · Josh De La Cruz" />
	<meta name="twitter:description" content={item.description} />
	<meta name="twitter:image" content="https://joshisadesigner.com{item.cover}" />
	<link rel="canonical" href="https://joshisadesigner.com/work/{item.slug}" />
</svelte:head>

{#if item.caseStudy}
	<CaseStudy {item} study={item.caseStudy} {prev} {next} />
{:else}
	<ProjectGallery {item} {prev} {next} />
{/if}
