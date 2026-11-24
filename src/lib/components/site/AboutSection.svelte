<script lang="ts">
	import { work } from '$lib/data/work';
	import { copy } from '$lib/site';

	let { headingLevel = 2 }: { headingLevel?: 1 | 2 } = $props();

	const flagship = work.find((w) => w.caseStudy) ?? work[0];
</script>

<section id="about" class="mx-auto max-w-[1440px] scroll-mt-8 px-4 py-16 sm:px-8 md:px-12 md:py-[72px]" aria-labelledby="about-heading">
	<svelte:element this={headingLevel === 1 ? 'h1' : 'h2'} id="about-heading" class="type-section">About</svelte:element>

	<div class="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_660px] lg:gap-6">
		<p class="max-w-[560px] text-[1.75rem] leading-[1.4] font-light md:text-[2rem]">{copy.aboutLede}</p>

		<div class="flex flex-col gap-2">
			<div class="flex flex-col gap-6">
				<div class="flex max-w-[40rem] flex-col gap-[1.6em] text-base leading-[1.6] font-light">
					<p>
						My work sits between UX/UI design and front-end development, which means I care about more than how an interface looks. I care about how it works, how it behaves, how it scales, and how easily a team can keep improving it after launch.
					</p>
					<p>
						Over the years, I’ve worked on websites, customer portals, mobile experiences, design systems, and production interfaces for telecom, SaaS, and consumer services. That experience has taught me that good design is not decoration. It is structure, clarity, consistency, and attention to the small details that help people move forward with confidence.
					</p>
				</div>
				<p class="text-2xl leading-[1.6] font-medium">
					My goal is simple: design products that are easy to understand, pleasant to use, and strong enough to grow.
				</p>
			</div>
			<p class="text-base leading-[1.6]">
				See how that plays out in practice:
				<a href="/work/{flagship.slug}" class="font-bold underline">{flagship.title} case study</a>.
			</p>
		</div>
	</div>
</section>
