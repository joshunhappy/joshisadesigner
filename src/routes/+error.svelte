<script lang="ts">
	import { page } from '$app/state';
	import { work } from '$lib/data/work';

	const flagship = work.find((w) => w.caseStudy) ?? work[0];
	const notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{notFound ? 'Page not found' : 'Something went wrong'} · Josh De La Cruz</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="mx-auto max-w-[1440px] px-4 pt-16 pb-24 sm:px-8 md:pt-24">
	<h1 class="type-display">{notFound ? 'Page not found' : 'Something went wrong'}</h1>
	<p class="type-lede mt-6 max-w-[40ch]">
		{#if notFound}
			The link may be old or mistyped. The work is still here.
		{:else}
			The page couldn’t load. Try again in a moment, or head back to the work.
		{/if}
	</p>
	<div class="mt-10 flex flex-wrap gap-3">
		<a href="/work/{flagship.slug}" class="pill bg-ink text-canvas hover:bg-ink/80">Read the case study</a>
		<a href="/work" class="pill border border-ink text-ink hover:bg-ink hover:text-canvas">All work</a>
	</div>
</section>
