<script lang="ts">
	import { work } from '$lib/data/work';
	import { site } from '$lib/site';
	import Img from '$lib/components/loom/Img.svelte';

	const flagship = work.find((w) => w.caseStudy) ?? work[0];

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

<div class="warp">
	<div class="mx-auto grid max-w-[1440px] gap-10 px-5 pt-12 pb-16 md:grid-cols-12 md:px-10 md:pt-20 md:pb-24">
		<header class="md:col-span-7">
			<h1 class="font-display text-6xl font-extrabold leading-[0.9] tracking-[-0.035em] md:text-8xl">
				About
			</h1>
			<p class="mt-8 max-w-[24ch] font-display text-2xl font-semibold leading-tight md:text-4xl">
				I design digital products that feel clear, useful, and ready for real people.
			</p>
		</header>

		<div class="md:col-span-4 md:col-start-9 md:row-span-2">
			<div class="aspect-[4/5] overflow-hidden">
				<Img
					src="/images/josh.jpg"
					alt="Portrait of Josh De La Cruz"
					sizes="(min-width: 768px) 30vw, 100vw"
					class="h-full w-full object-cover object-[50%_30%]"
				/>
			</div>
		</div>

		<!-- Undyed cotton: the reading surface. -->
		<section class="cotton bg-cotton text-ink md:col-span-7 px-6 py-8 md:px-12 md:py-12" aria-label="Background">
			<div class="max-w-[64ch] space-y-5 text-lg leading-relaxed text-ink-muted">
				<p>
					My work sits between UX/UI design and front-end development, which means I care about more than how an interface looks. I care about how it works, how it scales, and how easily a team can keep improving it after launch.
				</p>
				<p>
					Over the years, I’ve worked on websites, customer portals, mobile experiences, design systems, and production interfaces for telecom, SaaS, and consumer services. That experience has taught me that good design is not decoration. It is structure, clarity, consistency, and attention to the small details that help people move forward with confidence.
				</p>
				<p>
					I enjoy turning complex flows into simple experiences, creating visual systems that teams can actually use, and building interfaces that connect business goals with user needs.
				</p>
				<p class="font-semibold text-ink">
					My goal is simple: design products that are easy to understand, pleasant to use, and strong enough to grow.
				</p>
			</div>

			<p class="mt-10 border-t border-rule pt-6 text-base text-ink">
				See how that plays out in practice:
				<a href="/work/{flagship.slug}" class="font-semibold underline decoration-cochineal decoration-2 hover:text-cochineal">
					the {flagship.title} case study
				</a>.
			</p>
		</section>
	</div>
</div>

