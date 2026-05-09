<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from '$lib/animations/gsap';

	let contentEl: HTMLElement;

	onMount(() => {
		gsap.from(contentEl.children, {
			y: 30,
			opacity: 0,
			stagger: 0.1,
			duration: 0.6,
			ease: 'power3.out'
		});
	});
</script>

<svelte:head>
	<title>About — Josh De La Cruz</title>
	<meta name="description" content="UI/UX designer with experience across websites, mobile apps, design systems, and production interfaces for telecom, SaaS, and consumer services." />
	<meta property="og:type" content="profile" />
	<meta property="og:url" content="https://joshisadesigner.com/about" />
	<meta property="og:title" content="About Josh De La Cruz — UI/UX Designer" />
	<meta property="og:description" content="UI/UX designer with experience across websites, mobile apps, design systems, and production interfaces for telecom, SaaS, and consumer services." />
	<meta property="og:image" content="https://joshisadesigner.com/images/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About Josh De La Cruz — UI/UX Designer" />
	<meta name="twitter:description" content="UI/UX designer with experience across websites, mobile apps, design systems, and production interfaces for telecom, SaaS, and consumer services." />
	<meta name="twitter:image" content="https://joshisadesigner.com/images/og-image.jpg" />
	<link rel="canonical" href="https://joshisadesigner.com/about" />
</svelte:head>

<section class="pt-28 px-6 pb-16" bind:this={contentEl}>
	<h1 class="font-black leading-none text-[#111] uppercase mb-8" style="font-size: clamp(2.5rem, 12vw, 6rem);">
		Josh<br />De La Cruz
	</h1>

	<p class="text-xl leading-relaxed text-[#111] mb-6 max-w-sm">
		I design digital products that feel clear, useful, and ready for real people.
	</p>

	<div class="space-y-5 text-sm leading-relaxed text-[#555] max-w-sm mb-8">
		<p>
			My work sits between UX/UI design and front-end development, which means I care about more than how an interface looks. I care about how it works, how it scales, and how easily a team can keep improving it after launch.
		</p>
		<p>
			Over the years, I've worked on websites, customer portals, mobile experiences, design systems, and production interfaces for telecom, SaaS, and consumer services. That experience has taught me that good design is not decoration. It is structure, clarity, consistency, and attention to the small details that help people move forward with confidence.
		</p>
		<p>
			I enjoy turning complex flows into simple experiences, creating visual systems that teams can actually use, and building interfaces that connect business goals with user needs.
		</p>
		<p class="font-semibold text-[#111]">
			My goal is simple: design products that are easy to understand, pleasant to use, and strong enough to grow.
		</p>
	</div>

	<span class="inline-flex items-center gap-2 border border-[#111]/30 rounded-full px-4 py-2 text-xs tracking-widest uppercase text-[#111]">
		<span class="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
		Open for work
	</span>
</section>
