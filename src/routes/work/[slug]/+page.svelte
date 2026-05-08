<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { item, prev, next } = $derived(data);

	let scrollEl: HTMLElement;
	let activeIndex = $state(0);

	function onScroll() {
		if (!scrollEl) return;
		const { scrollLeft, clientWidth } = scrollEl;
		activeIndex = Math.round(scrollLeft / clientWidth);
	}

	function scrollTo(index: number) {
		scrollEl?.scrollTo({ left: index * scrollEl.clientWidth, behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>{item.title} — Josh De La Cruz</title>
	<meta name="description" content={item.description} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://joshisadesigner.com/work/{item.slug}" />
	<meta property="og:title" content="{item.title} — Josh De La Cruz" />
	<meta property="og:description" content={item.description} />
	<meta property="og:image" content="https://joshisadesigner.com{item.cover}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{item.title} — Josh De La Cruz" />
	<meta name="twitter:description" content={item.description} />
	<meta name="twitter:image" content="https://joshisadesigner.com{item.cover}" />
	<link rel="canonical" href="https://joshisadesigner.com/work/{item.slug}" />
</svelte:head>

<div class="pt-24 pb-16">
	<!-- Header -->
	<div class="px-6 mb-6">
		<a href="/work" class="text-xs text-[#888] hover:text-[#111] transition-colors tracking-widest uppercase mb-6 inline-block">
			← All Work
		</a>
		<h1 class="text-3xl font-black text-[#111] uppercase leading-tight mb-3">{item.title}</h1>
		<p class="text-lg leading-relaxed text-[#555] max-w-sm mb-2">{item.description}</p>
		{#if item.role || item.timeline}
			<p class="text-xs text-[#888] mt-3">
				{#if item.role}{item.role}{/if}{#if item.role && item.timeline} · {/if}{#if item.timeline}{item.timeline}{/if}
			</p>
		{/if}
	</div>

	<!-- Horizontal scroll gallery -->
	<div
		bind:this={scrollEl}
		onscroll={onScroll}
		class="flex overflow-x-auto snap-x snap-mandatory gap-3 pl-6 pb-4"
		style="scroll-padding-left: 1.5rem; -webkit-overflow-scrolling: touch; scrollbar-width: none;"
	>
		{#each item.images.slice(1) as image, i (image)}
			<div class="snap-start shrink-0 overflow-hidden rounded-[16px] bg-[#e8e8e8]" style="height: 72vh; width: auto;">
				<img
					src={image}
					alt="{item.title} — screen {i + 1}"
					class="h-full w-auto object-contain"
					loading={i === 0 ? 'eager' : 'lazy'}
				/>
			</div>
		{/each}
		<!-- trailing space so last image isn't flush to edge -->
		<div class="shrink-0 w-6"></div>
	</div>

	<!-- Dot indicators -->
	<div class="flex items-center gap-2 px-6 mt-4">
		{#each item.images.slice(1) as _, i (i)}
			<button
				onclick={() => scrollTo(i)}
				class="h-1.5 rounded-full transition-all duration-300 {i === activeIndex ? 'w-4 bg-[#111]' : 'w-1.5 bg-[#ccc]'}"
				aria-label="Image {i + 1}"
			></button>
		{/each}
		<span class="ml-auto text-xs text-[#aaa]">{activeIndex + 1} / {item.images.length - 1}</span>
	</div>

	<!-- Summary + metadata -->
	{#if item.summary || item.role || item.responsibilities || item.tools}
		<div class="px-6 mt-10 md:grid md:grid-cols-2 md:gap-16">
			{#if item.summary}
				<p class="text-2xl font-light text-[#111] leading-snug mb-10 md:mb-0">{item.summary}</p>
			{/if}
			<div>
				{#if item.role}
					<div class="grid grid-cols-[1fr_2fr] gap-6 py-5">
						<span class="text-xs tracking-widest uppercase text-[#aaa] pt-0.5">Role</span>
						<span class="text-sm text-[#111]">{item.role}</span>
					</div>
				{/if}
				{#if item.responsibilities?.length}
					<div class="grid grid-cols-[1fr_2fr] gap-6 py-5 border-t border-[#e0e0e0]">
						<span class="text-xs tracking-widest uppercase text-[#aaa] pt-0.5">Responsibilities</span>
						<span class="text-sm text-[#111]">{item.responsibilities.join(', ')}</span>
					</div>
				{/if}
				{#if item.tools?.length}
					<div class="grid grid-cols-[1fr_2fr] gap-6 py-5 border-t border-[#e0e0e0]">
						<span class="text-xs tracking-widest uppercase text-[#aaa] pt-0.5">Tools</span>
						<span class="text-sm text-[#111]">{item.tools.join(', ')}</span>
					</div>
				{/if}
			</div>
		</div>
	{/if}

	<!-- Back + prev/next -->
	<div class="px-6 mt-10 pt-8 border-t border-[#e0e0e0] flex items-center justify-between">
		<a href="/work" class="text-xs text-[#888] hover:text-[#111] transition-colors tracking-widest uppercase">
			← All Work
		</a>
		<div class="flex items-center gap-2">
			<a
				href="/work/{prev.slug}"
				class="w-10 h-10 rounded-full bg-[#111] text-white flex items-center justify-center text-xl hover:opacity-80 transition-opacity"
				aria-label="Previous project: {prev.title}"
			>
				‹
			</a>
			<a
				href="/work/{next.slug}"
				class="w-10 h-10 rounded-full bg-[#111] text-white flex items-center justify-center text-xl hover:opacity-80 transition-opacity"
				aria-label="Next project: {next.title}"
			>
				›
			</a>
		</div>
	</div>
</div>
