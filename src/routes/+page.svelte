<script lang="ts">
	import { work } from '$lib/data/work';
	import { site, copy } from '$lib/site';
	import Img from '$lib/components/site/Img.svelte';
	import WorkRow from '$lib/components/site/WorkRow.svelte';
	import AboutSection from '$lib/components/site/AboutSection.svelte';

	const description =
		'Josh De La Cruz is a UI/UX designer who designs interfaces and builds the front end that ships them: websites, mobile apps, and design systems.';
</script>

<svelte:head>
	<title>Josh De La Cruz · UI/UX Designer</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{site.url}/" />
	<meta property="og:title" content="Josh De La Cruz · UI/UX Designer" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{site.url}/images/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Josh De La Cruz · UI/UX Designer" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{site.url}/images/og-image.jpg" />
	<link rel="canonical" href="{site.url}/" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: site.name,
		jobTitle: 'UI/UX Designer',
		url: site.url,
		email: site.email,
		telephone: site.phone.display,
		image: `${site.url}/images/og-image.jpg`,
		sameAs: [site.linkedin.href]
	})}</script>`}
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-[1440px] px-4 pt-8 pb-16 sm:px-8 md:pt-12 md:pb-[72px]" aria-labelledby="hero-title">
	<div class="grid items-center gap-10 lg:grid-cols-[640px_minmax(0,1fr)] lg:gap-[72px]">
		<div class="flex flex-col items-start gap-6">
			<h1 id="hero-title" class="type-display">
				<span class="sr-only">{site.name}, </span>UI/UX<br />DESIGNER
			</h1>
			<p class="type-lede max-w-[30ch]">{copy.line}</p>
			<a
				href="mailto:{site.email}"
				class="pill border border-ink px-3 py-2.5 text-base leading-4 text-ink hover:bg-ink hover:text-canvas"
			>
				<img src="/icons/dot-green.svg" alt="" width="12" height="12" />
				{copy.availability}
			</a>
		</div>

		<div class="aspect-[4/5] overflow-hidden rounded-[24px] lg:aspect-auto lg:h-[790px]">
			<Img
				src="/images/josh.jpg"
				alt="Portrait of Josh De La Cruz"
				priority
				sizes="(min-width: 1024px) 45vw, 100vw"
				class="h-full w-full object-cover object-[0%_77%]"
			/>
		</div>
	</div>
</section>

<!-- Work -->
<section id="work" class="mx-auto max-w-[1440px] scroll-mt-8 px-4 py-16 sm:px-8 md:py-[72px]" aria-labelledby="work-heading">
	<h2 id="work-heading" class="type-section">Work</h2>
	<ul class="mt-10 flex flex-col gap-10 md:mt-[72px] md:gap-[72px]">
		{#each work as item, i (item.slug)}
			<li class="flex flex-col gap-10 md:gap-[72px]">
				<div class="h-px w-full max-w-[640px] bg-rule" aria-hidden="true"></div>
				<WorkRow {item} eager={i === 0} />
			</li>
		{/each}
		<li aria-hidden="true"><div class="h-px w-full max-w-[640px] bg-rule"></div></li>
	</ul>
</section>

<AboutSection />
