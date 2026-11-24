<script lang="ts">
	import { site, copy } from '$lib/site';

	const year = new Date().getFullYear();
</script>

<footer class="bg-panel" aria-labelledby="contact-heading">
	<div class="mx-auto flex max-w-[1440px] flex-col items-start gap-8 px-4 py-24 sm:px-8 md:py-32">
		<h2 id="contact-heading" class="text-[2.5rem] leading-[1.2] font-black tracking-[-0.02em] md:text-[3.5rem]">
			{copy.contactHeading[0]}<br class="hidden sm:inline" />
			{copy.contactHeading[1]}
		</h2>

		<div class="flex flex-wrap items-center gap-3">
			<a href="mailto:{site.email}" class="pill bg-ink text-canvas hover:bg-ink/80">{copy.contactCta}</a>
			{#if site.resumeUrl}
				<a href={site.resumeUrl} download class="pill border border-ink text-ink hover:bg-ink hover:text-canvas">
					{copy.resumeCta}
				</a>
			{/if}
		</div>

		<ul class="text-base leading-[1.6] font-light">
			<li>Email: <a href="mailto:{site.email}" class="inline-block py-1 underline-offset-4 hover:underline">{site.email}</a></li>
			<li>Mobile: <a href={site.phone.href} class="inline-block py-1 underline-offset-4 hover:underline">{site.phone.display}</a></li>
			<li>
				LinkedIn:
				<a href={site.linkedin.href} target="_blank" rel="noopener noreferrer" class="inline-block py-1 underline-offset-4 hover:underline">
					{site.linkedin.display}<span class="sr-only"> (opens in a new tab)</span>
				</a>
			</li>
		</ul>

		<p class="text-base leading-[1.4] font-light text-ink-muted">©{year} {site.handle} • {site.legalName}</p>
	</div>
</footer>
