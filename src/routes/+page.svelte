<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from '$lib/animations/gsap';

	let heroEl: HTMLElement;
	let headingEl: HTMLElement;
	let bodyEl: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline();
		tl.from(heroEl, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' })
		  .from(headingEl, { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.4')
		  .from(bodyEl, { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.2');
	});
</script>

<svelte:head>
	<title>Josh De La Cruz — UI/UX Designer</title>
	<meta name="description" content="Josh De La Cruz is a UI/UX designer crafting clear, scalable digital products — websites, mobile apps, and design systems." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://joshisadesigner.com/" />
	<meta property="og:title" content="Josh De La Cruz — UI/UX Designer" />
	<meta property="og:description" content="Josh De La Cruz is a UI/UX designer crafting clear, scalable digital products — websites, mobile apps, and design systems." />
	<meta property="og:image" content="https://joshisadesigner.com/images/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Josh De La Cruz — UI/UX Designer" />
	<meta name="twitter:description" content="Josh De La Cruz is a UI/UX designer crafting clear, scalable digital products — websites, mobile apps, and design systems." />
	<meta name="twitter:image" content="https://joshisadesigner.com/images/og-image.jpg" />
	<link rel="canonical" href="https://joshisadesigner.com/" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Josh De La Cruz",
		"jobTitle": "UI/UX Designer",
		"url": "https://joshisadesigner.com",
		"email": "joshisadesigner@me.com",
		"telephone": "+502-5052-8589",
		"image": "https://joshisadesigner.com/images/og-image.jpg",
		"sameAs": ["https://linkedin.com/in/joshisadesigner"]
	})}</script>`}
</svelte:head>

<section class="flex flex-col h-[100dvh] pt-20 md:flex-row md:pt-32 md:pb-12">
	<!-- Image: top on mobile, right column on desktop -->
	<div
		bind:this={heroEl}
		class="ml-6 min-h-0 flex-1 overflow-hidden rounded-tl-[24px] rounded-bl-[24px] md:order-2 md:ml-4"
	>
		<img
			src="/images/josh.jpg"
			alt="Josh De La Cruz"
			class="w-full h-full object-cover object-top md:object-center"
		/>
	</div>

	<!-- Content: below image on mobile, left column on desktop -->
	<div class="shrink-0 md:order-1 md:flex md:flex-col md:justify-center md:w-[40%]">
		<div bind:this={headingEl} class="px-6 mt-3 md:mt-0">
			<h1 class="font-black leading-none text-[#111] uppercase" style="font-size: clamp(2.4rem, 11vw, 6rem);">
				UI/UX<br />DESIGNER
			</h1>
		</div>
		<div bind:this={bodyEl} class="px-6 mt-3 pb-6 md:pb-0">
			<p class="text-lg leading-snug text-[#111] max-w-xs mb-5">
				Designing interfaces that ship, scale, and make sense.
			</p>
			<span class="inline-flex items-center gap-2 border border-[#111]/30 rounded-full px-4 py-2 text-xs tracking-widest uppercase text-[#111]">
				<span class="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
				Open for work
			</span>
		</div>
	</div>
</section>
