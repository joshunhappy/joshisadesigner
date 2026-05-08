<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from '$lib/animations/gsap';

	let { open = $bindable(false) }: { open?: boolean } = $props();

	let overlay: HTMLElement;
	let linkEls: HTMLElement[] = [];
	let contentEl: HTMLElement;
	let tl: gsap.core.Timeline | null = null;

	onMount(() => {
		tl = gsap
			.timeline({ paused: true })
			.to(overlay, {
				clipPath: 'inset(0% 0% 0% 0%)',
				duration: 0.5,
				ease: 'power4.inOut'
			})
			.from(
				linkEls,
				{
					y: 40,
					opacity: 0,
					stagger: 0.08,
					duration: 0.4,
					ease: 'power3.out',
					immediateRender: false
				},
				'-=0.2'
			);
	});

	$effect(() => {
		if (open) {
			tl?.play();
		} else {
			tl?.reverse();
		}
	});
</script>

<div
	bind:this={overlay}
	class="fixed inset-0 z-[100] bg-[#f5f5f5] flex flex-col px-6 py-6"
	style="clip-path: inset(0% 0% 100% 0%)"
>
	<div bind:this={contentEl} class="flex flex-col flex-1 pt-24">
		<nav class="flex flex-col gap-2 mb-10">
			<a
				bind:this={linkEls[0]}
				href="/about"
				class="text-5xl font-light text-[#111] hover:opacity-50 transition-opacity leading-tight"
				onclick={() => (open = false)}
			>
				About
			</a>
			<a
				bind:this={linkEls[1]}
				href="/work"
				class="text-5xl font-light text-[#111] hover:opacity-50 transition-opacity leading-tight"
				onclick={() => (open = false)}
			>
				Work
			</a>
		</nav>

		<div bind:this={linkEls[2]} class="mb-10">
			<span class="inline-flex items-center gap-2 border border-[#111]/30 rounded-full px-4 py-2 text-xs tracking-widest uppercase text-[#111]">
				<span class="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
				Open for work
			</span>
		</div>

		<div bind:this={linkEls[3]} class="mt-auto">
			<p class="text-2xl font-light text-[#111] mb-6">Let's get in touch</p>
			<ul class="space-y-1 text-sm text-[#666]">
				<li><a href="mailto:joshisadesigner@me.com" class="hover:text-[#111] transition-colors">joshisadesigner@me.com</a></li>
				<li>(+502) 5052 8589</li>
				<li><a href="https://linkedin.com/in/joshisadesigner" target="_blank" rel="noopener" class="hover:text-[#111] transition-colors">My LinkedIn</a></li>
			</ul>
			<p class="mt-8 text-xs text-[#aaa]">©2025 Joshisadesigner</p>
		</div>
	</div>
</div>
