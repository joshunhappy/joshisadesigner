<script lang="ts">
	import { work } from '$lib/data/work';

	let currentIndex = $state(0);
	const current = $derived(work[currentIndex]);

	function nextProject() {
		currentIndex = (currentIndex + 1) % work.length;
	}

	function prevProject() {
		currentIndex = (currentIndex - 1 + work.length) % work.length;
	}
</script>

<svelte:head>
	<title>Work — Josh De La Cruz</title>
	<meta name="description" content="Selected UI/UX design projects by Josh De La Cruz — mobile apps, web platforms, and design systems across fintech, telecom, and consumer services." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://joshisadesigner.com/work" />
	<meta property="og:title" content="Work — Josh De La Cruz" />
	<meta property="og:description" content="Selected UI/UX design projects by Josh De La Cruz — mobile apps, web platforms, and design systems across fintech, telecom, and consumer services." />
	<meta property="og:image" content="https://joshisadesigner.com/images/josh.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Work — Josh De La Cruz" />
	<meta name="twitter:description" content="Selected UI/UX design projects by Josh De La Cruz — mobile apps, web platforms, and design systems across fintech, telecom, and consumer services." />
	<meta name="twitter:image" content="https://joshisadesigner.com/images/josh.jpg" />
	<link rel="canonical" href="https://joshisadesigner.com/work" />
</svelte:head>

<section class="relative flex flex-col h-[100dvh] pb-12 overflow-x-hidden md:flex-row md:pt-32">
	<!-- Content: bottom on mobile, left column on desktop -->
	<div class="order-2 shrink-0 px-6 pt-6 pb-4 md:order-1 md:flex md:flex-col md:justify-center md:w-[40%] md:pt-0 md:pb-0">
		<h2 class="text-2xl font-semibold text-[#111] mb-3">{current.title}</h2>
		<p class="text-lg leading-relaxed text-[#555] mb-3 max-w-sm">{current.description}</p>
		<p class="text-xs text-[#888] mb-5">{current.tags.join(', ')}</p>

		<a
			href="/work/{current.slug}"
			class="inline-flex items-center gap-2 border border-[#111] rounded-full px-5 py-2 text-sm text-[#111] hover:bg-[#111] hover:text-white transition-colors self-start mb-6"
		>
			View <span>›</span>
		</a>

		<!-- Prev / Next — mobile only, in content flow -->
		<div class="flex items-center gap-2 md:hidden">
			<button
				onclick={prevProject}
				class="w-14 h-14 rounded-full bg-[#111] text-white flex items-center justify-center text-2xl hover:opacity-80 transition-opacity"
				aria-label="Previous project"
			>
				‹
			</button>
			<button
				onclick={nextProject}
				class="w-14 h-14 rounded-full bg-[#111] text-white flex items-center justify-center text-2xl hover:opacity-80 transition-opacity"
				aria-label="Next project"
			>
				›
			</button>
		</div>
	</div>

	<!-- Preview image: top on mobile, right column on desktop -->
	<!-- clip-path clips top/bottom at element edge, extends right infinitely — allows image to bleed right -->
	<div
		class="order-1 relative min-h-0 flex-1 md:order-2 md:ml-4 [clip-path:inset(0_-100vw_0_0)] md:[clip-path:inset(0_-100vw_0_0_round_28px_0_0_28px)]"
		style:background-color={current.bgColor}
	>
		<div class="absolute inset-0 pt-24 px-6 md:pt-12 md:pl-12 md:pr-0">
			<img
				src={current.images[0]}
				alt={current.title}
				class="w-[125%] h-full object-cover object-left-top rounded-tl-[24px]"
			/>
		</div>
	</div>

	<!-- Prev / Next — desktop only, floating at image container bottom-right -->
	<div class="hidden md:flex absolute bottom-12 right-6 translate-y-1/2 items-center gap-2 z-10">
		<button
			onclick={prevProject}
			class="w-14 h-14 rounded-full bg-[#111] text-white flex items-center justify-center text-2xl hover:opacity-80 transition-opacity"
			aria-label="Previous project"
		>
			‹
		</button>
		<button
			onclick={nextProject}
			class="w-14 h-14 rounded-full bg-[#111] text-white flex items-center justify-center text-2xl hover:opacity-80 transition-opacity"
			aria-label="Next project"
		>
			›
		</button>
	</div>

	<!-- Dots — bottom center of page -->
	<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
		{#each work as _, i (i)}
			<button
				onclick={() => { currentIndex = i; }}
				class="w-1.5 h-1.5 rounded-full transition-colors {i === currentIndex ? 'bg-[#111]' : 'bg-[#ccc]'}"
				aria-label="Project {i + 1}"
			></button>
		{/each}
	</div>
</section>
