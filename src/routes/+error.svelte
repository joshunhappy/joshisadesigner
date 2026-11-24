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

<div class="warp">
	<div class="mx-auto max-w-[1200px] px-5 pt-16 pb-24 md:px-10 md:pt-24">
		<div class="bare-warp mb-10 h-10 w-full max-w-md" aria-hidden="true"></div>
		<h1 class="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] md:text-7xl">
			{notFound ? 'Page not found' : 'Something went wrong'}
		</h1>
		<p class="mt-6 max-w-[48ch] text-lg text-on-indigo-muted">
			{#if notFound}
				This thread ends here. The link may be old or mistyped; everything else is still on the loom.
			{:else}
				The page couldn’t load. Try again in a moment, or head back to the work.
			{/if}
		</p>
		<ul class="mt-10 flex flex-wrap gap-4">
			<li>
				<a
					href="/work/{flagship.slug}"
					class="inline-flex rounded-full bg-marigold px-6 py-3 text-lg font-bold text-ink no-underline hover:bg-on-indigo"
				>
					Read the case study
				</a>
			</li>
			<li>
				<a
					href="/work"
					class="inline-flex rounded-full border-2 border-on-indigo px-6 py-[10px] text-lg font-bold no-underline hover:bg-on-indigo hover:text-ink"
				>
					All work
				</a>
			</li>
		</ul>
	</div>
</div>
