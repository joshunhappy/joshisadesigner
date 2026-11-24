<script lang="ts">
	import { work } from '$lib/data/work';
	import { site } from '$lib/site';
	import WorkRow from '$lib/components/site/WorkRow.svelte';

	const description =
		'Selected UI/UX design projects by Josh De La Cruz: mobile apps, web platforms, and design systems across fintech, telecom, and consumer services.';
</script>

<svelte:head>
	<title>Work · Josh De La Cruz</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{site.url}/work" />
	<meta property="og:title" content="Work · Josh De La Cruz" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{site.url}/images/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Work · Josh De La Cruz" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{site.url}/images/og-image.jpg" />
	<link rel="canonical" href="{site.url}/work" />
</svelte:head>

<section class="mx-auto max-w-[1440px] px-4 pt-8 pb-16 sm:px-10 md:pt-12 md:pb-[72px]" aria-labelledby="work-heading">
	<h1 id="work-heading" class="type-section">Work</h1>
	<ul class="mt-10 flex flex-col gap-10 md:mt-[72px] md:gap-[72px]">
		{#each work as item, i (item.slug)}
			<li class="flex flex-col gap-10 md:gap-[72px]">
				<div class="h-px w-full max-w-[640px] bg-rule" aria-hidden="true"></div>
				<WorkRow {item} headingLevel={2} eager={i === 0} />
			</li>
		{/each}
		<li aria-hidden="true"><div class="h-px w-full max-w-[640px] bg-rule"></div></li>
	</ul>
</section>
