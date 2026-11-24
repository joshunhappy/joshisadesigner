<script lang="ts">
	/**
	 * Presents a screenshot in the frame of the device it was designed for, at a
	 * fixed viewport, so mobile and desktop read apart at a glance and every
	 * project's screens sit at the same scale. Long screens show from the top;
	 * the full image is one click away in the lightbox.
	 */
	import type { DeviceKind } from '$lib/images';
	import Img from './Img.svelte';

	let {
		src,
		alt,
		kind,
		eager = false,
		sizes
	}: { src: string; alt: string; kind: DeviceKind; eager?: boolean; sizes?: string } = $props();
</script>

{#if kind === 'mobile'}
	<div class="phone">
		<div class="screen aspect-[375/812]">
			<Img {src} {alt} {eager} sizes={sizes ?? '280px'} class="h-full w-full object-cover object-top" />
		</div>
	</div>
{:else}
	<div class="window">
		<div class="bar" aria-hidden="true">
			<span class="dots"><i></i><i></i><i></i></span>
			<span class="url"></span>
		</div>
		<div class="screen aspect-[16/10]">
			<Img
				{src}
				{alt}
				{eager}
				sizes={sizes ?? '(min-width: 1200px) 560px, 100vw'}
				class="h-full w-full object-cover object-top"
			/>
		</div>
	</div>
{/if}

<style>
	.phone {
		padding: 6px;
		border-radius: 2rem;
		background: var(--color-bezel);
		box-shadow: var(--shadow-screen);
	}
	.phone .screen {
		overflow: hidden;
		border-radius: 1.6rem;
		background: #fff;
	}

	.window {
		overflow: hidden;
		border-radius: 8px;
		background: var(--color-surface);
		box-shadow: var(--shadow-screen);
	}
	.bar {
		display: flex;
		align-items: center;
		gap: 12px;
		height: 26px;
		padding: 0 10px;
		background: var(--color-chrome);
	}
	.dots {
		display: flex;
		gap: 5px;
	}
	.dots i {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--color-rule);
	}
	.url {
		flex: 1;
		max-width: 40%;
		height: 12px;
		margin: 0 auto;
		border-radius: 6px;
		background: var(--color-surface);
	}
	.window .screen {
		overflow: hidden;
		background: #fff;
	}
</style>
