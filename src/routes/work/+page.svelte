<script lang="ts">
	import { work } from '$lib/data/work';
	import { site } from '$lib/site';
	import ProjectBand from '$lib/components/loom/ProjectBand.svelte';

	const studies = work.filter((w) => w.caseStudy);
	const galleries = work.filter((w) => !w.caseStudy);

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

<div class="warp">
	<div class="mx-auto max-w-[1440px] px-5 md:px-10">
		<header class="pt-12 pb-10 md:pt-20 md:pb-14">
			<h1 class="font-display text-6xl font-extrabold leading-[0.9] tracking-[-0.035em] md:text-8xl">
				Work
			</h1>
			<p class="mt-5 max-w-[52ch] text-lg text-on-indigo-muted">
				{work.length} projects from 2023 to 2026.
				{#if studies.length === 0}
					None is written up as a full case study yet; these are screens for now.
				{:else if studies.length === 1}
					{studies[0].title} is written up as a full case study; the others are screens for now.
				{:else}
					{studies.length} are written up as full case studies; the others are screens for now.
				{/if}
			</p>
		</header>

		<div class="border-l-2 border-marigold pb-16 md:pb-24">
			<section aria-labelledby="studies-heading">
				<h2 id="studies-heading" class="sr-only">Case studies</h2>
				<div class="space-y-6">
					{#each studies as item, i (item.slug)}
						<ProjectBand {item} flagship={i === 0} />
					{/each}
				</div>
			</section>

			<section aria-labelledby="screens-heading" class="mt-14 md:mt-20">
				<h2
					id="screens-heading"
					class="pl-5 font-display text-3xl font-extrabold tracking-[-0.02em] md:pl-10 md:text-4xl"
				>
					Screens
				</h2>
				<p class="mt-2 mb-8 max-w-[52ch] pl-5 text-base text-on-indigo-muted md:pl-10">
					Projects without a write-up yet. The warp is up; the story isn’t woven in.
				</p>
				<div class="space-y-2">
					{#each galleries as item (item.slug)}
						<ProjectBand {item} />
					{/each}
				</div>
			</section>
		</div>
	</div>
</div>
