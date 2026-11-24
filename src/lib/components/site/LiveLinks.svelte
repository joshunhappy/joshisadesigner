<script lang="ts">
	/** Outbound links to where the shipped work can be seen. Opens in a new tab. */
	let { links = [] }: { links?: { label: string; href: string }[] } = $props();
</script>

{#if links.length}
	<ul class="mt-8 flex flex-wrap gap-3">
		{#each links as link (link.href)}
			<li>
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="pill border border-ink px-4 py-2.5 text-base text-ink hover:bg-ink hover:text-canvas"
				>
					{link.label}
					<img src="/icons/move-right.svg" alt="" width="16" height="16" class="arrow -rotate-45" />
					<span class="sr-only">(opens in a new tab)</span>
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	/* The arrow icon is drawn in black; invert it on the filled hover state. */
	a:hover .arrow {
		filter: invert(1);
	}
</style>
