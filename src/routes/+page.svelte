<script lang="ts">
	import { work } from '$lib/data/work';
	import { site, copy } from '$lib/site';
	import WovenWord from '$lib/components/loom/WovenWord.svelte';
	import ProjectBand from '$lib/components/loom/ProjectBand.svelte';
	import Img from '$lib/components/loom/Img.svelte';

	const flagship = work.find((w) => w.caseStudy) ?? work[0];
	const rest = work.filter((w) => w !== flagship);
	const shown = rest;

	// JOSH in undyed cotton, DE LA CRUZ in marigold weft.
	const nameColors = [
		...Array(7).fill('var(--color-on-indigo)'),
		...Array(7).fill('var(--color-marigold)')
	];

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
		sameAs: [site.linkedin]
	})}</script>`}
</svelte:head>

<section class="hero warp relative overflow-hidden" aria-labelledby="hero-name">
	<div
		class="mx-auto grid max-w-[1440px] gap-8 px-5 pt-6 pb-0 md:grid-cols-12 md:gap-10 md:px-10 md:pt-10"
	>
		<!-- Portrait: woven into the cloth, warp threads crossing its edges. -->
		<div class="portrait relative md:order-2 md:col-span-5 md:col-start-8">
			<div class="relative aspect-[4/5] max-h-[46svh] w-full overflow-hidden md:aspect-auto md:h-[min(58svh,640px)] md:max-h-none">
				<Img
					src="/images/josh.jpg"
					alt="Portrait of Josh De La Cruz"
					priority
					sizes="(min-width: 768px) 40vw, 100vw"
					class="h-full w-full object-cover object-[50%_30%]"
				/>
			</div>
			<span class="warp-over top" aria-hidden="true"></span>
			<span class="warp-over bottom" aria-hidden="true"></span>
		</div>

		<div class="selvage relative flex flex-col justify-end pl-5 md:order-1 md:col-span-7 md:pb-12 md:pl-0">
			<h1 id="hero-name">
				<span class="sr-only">{site.name}, {copy.role}</span>
				<WovenWord lines={['Josh', 'De la Cruz']} colors={nameColors} class="max-w-[640px]" />
			</h1>

			<p class="type-lede mt-7 max-w-[30ch]">
				{copy.line}
			</p>
			<p class="mt-4 max-w-[44ch] text-lg text-on-indigo-muted">
				{copy.role[0].toUpperCase() + copy.role.slice(1)} · {copy.availability}
			</p>
		</div>
	</div>
</section>

<section class="work-col warp relative" aria-labelledby="work-heading">
	<h2 id="work-heading" class="sr-only">Selected work</h2>
	<div class="mx-auto max-w-[1440px] px-5 md:px-10">
		<div class="thread border-l-2 border-marigold pt-8 pb-16 md:pt-10 md:pb-24">
			<ProjectBand item={flagship} flagship />

			<div class="mt-6 space-y-2">
				{#each shown as item (item.slug)}
					<ProjectBand {item} />
				{/each}
			</div>

			<div class="pl-5 pt-4 md:pl-10">
				<a
					href="/work"
					class="inline-flex items-center gap-2 text-lg font-semibold text-on-indigo underline decoration-marigold decoration-2 hover:text-marigold"
				>
					All work
					<svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	/*
	 * Interlace: warp threads come down out of the field and meet the photo.
	 * Odd threads pass OVER its edge and run on into the picture; even threads
	 * stop at the edge, so the photo occludes them and they read as passing UNDER.
	 */
	.warp-over {
		position: absolute;
		left: 0;
		right: 0;
		pointer-events: none;
		--t: var(--color-indigo-700);
		background-image:
			repeating-linear-gradient(90deg, var(--t) 0 3px, transparent 3px 12px),
			repeating-linear-gradient(90deg, transparent 0 6px, var(--t) 6px 9px, transparent 9px 12px);
		background-repeat: repeat-x;
	}
	.warp-over.top {
		top: -20px;
		height: 44px;
		/* over: field + 24px into the photo; under: field only, ends at the edge */
		background-size:
			auto 44px,
			auto 20px;
		background-position:
			0 0,
			0 0;
	}
	.warp-over.bottom {
		bottom: -16px;
		height: 26px;
		background-size:
			auto 26px,
			auto 16px;
		background-position:
			0 100%,
			0 100%;
	}
	@media (min-width: 768px) {
		.warp-over.bottom {
			bottom: -20px;
			height: 44px;
			background-size:
				auto 44px,
				auto 20px;
		}
	}

	/*
	 * The running weft thread starts at the portrait. Mobile: it drops from the
	 * portrait's bottom-left edge down the selvage. Desktop: it leaves the
	 * portrait's bottom edge and runs left along the hero's foot to the gutter.
	 */
	.selvage::after {
		content: '';
		position: absolute;
		left: 0;
		top: -2rem;
		bottom: 0;
		width: 2px;
		background: var(--color-marigold);
	}
	.selvage {
		padding-bottom: 2.5rem;
	}
	.portrait::after {
		content: none;
	}
	@media (min-width: 768px) {
		.selvage::after {
			top: auto;
			height: 2px;
			width: calc(100% + 2.5rem + 2px);
		}
		.selvage {
			padding-bottom: 5.5rem;
		}
		.portrait {
			align-self: end;
		}
	}
</style>
