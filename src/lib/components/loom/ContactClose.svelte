<script lang="ts">
	import { site, copy } from '$lib/site';

	const year = new Date().getFullYear();
</script>

<footer class="close warp-deep relative text-on-indigo" aria-labelledby="contact-heading">
	<div class="mx-auto max-w-[1440px] px-5 pt-20 pb-10 md:px-10 md:pt-28">
		<div class="thread-end relative pl-5 md:pl-10">
			<h2
				id="contact-heading"
				class="max-w-[16ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] md:text-7xl"
			>
				{copy.contactHeading}
			</h2>
			<p class="mt-5 max-w-[48ch] text-lg text-on-indigo-muted">
				{copy.availability}
				{copy.contactBody}
			</p>

			<div class="mt-10 flex flex-wrap items-center gap-4">
				<a
					href="mailto:{site.email}"
					class="inline-flex flex-col items-start gap-0.5 rounded-[2rem] bg-marigold px-7 py-4 text-lg font-bold text-ink no-underline hover:bg-on-indigo sm:flex-row sm:items-center sm:gap-3 sm:rounded-full"
				>
					<span class="whitespace-nowrap">{copy.emailCta}</span>
					<span class="text-base font-normal break-all sm:text-lg">{site.email}</span>
				</a>
				{#if site.resumeUrl}
					<a
						href={site.resumeUrl}
						download
						class="inline-flex items-center rounded-full border-2 border-on-indigo px-7 py-[14px] text-lg font-bold no-underline hover:bg-on-indigo hover:text-ink"
					>
						{copy.resumeCta}
					</a>
				{/if}
			</div>

			<ul class="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base">
				<li>
					<a href={site.phone.href} class="underline decoration-on-indigo-muted hover:text-marigold">
						{site.phone.display}
					</a>
				</li>
				<li>
					<a
						href={site.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="underline decoration-on-indigo-muted hover:text-marigold"
					>
						LinkedIn<span class="sr-only"> (opens in a new tab)</span>
					</a>
				</li>
			</ul>
		</div>

		<p class="mt-20 text-sm text-on-indigo-muted">© {year} {site.name} · {site.handle}</p>
	</div>
	<div class="fringe h-6" aria-hidden="true"></div>
</footer>

<style>
	/* The running weft thread comes down the page and ties off here. */
	.thread-end::after {
		/* The knot: where the running thread is tied into the close. */
		content: '';
		position: absolute;
		left: -4px;
		top: -5rem;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--color-marigold);
	}
	@media (min-width: 768px) {
		.thread-end::after {
			top: -7rem;
		}
	}
	.thread-end::before {
		content: '';
		position: absolute;
		left: 0;
		top: -5rem;
		height: calc(5rem + 2.4em);
		width: 2px;
		background: var(--color-marigold);
	}
	@media (min-width: 768px) {
		.thread-end::before {
			top: -7rem;
			height: calc(7rem + 3.2rem);
		}
	}
	.fringe {
		background-image: repeating-linear-gradient(
			90deg,
			transparent 0 5px,
			var(--color-thread-fringe) 5px 6px
		);
		mask-image: linear-gradient(to bottom, black, transparent);
	}
</style>
