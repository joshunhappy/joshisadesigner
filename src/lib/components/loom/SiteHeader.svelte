<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/site';

	const links = [
		{ href: '/work', label: 'Work' },
		{ href: '/about', label: 'About' }
	];

	const isCurrent = (href: string) =>
		page.url.pathname === href || page.url.pathname.startsWith(href + '/');
</script>

<header class="header relative z-50 bg-indigo-950 text-on-indigo">
	<div class="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 px-4 py-4 sm:px-5 md:px-10 md:py-5">
		<a
			href="/"
			class="font-display text-base font-extrabold sm:text-lg tracking-[-0.02em] no-underline hover:text-marigold"
			aria-current={page.url.pathname === '/' ? 'page' : undefined}
		>
			{site.handle}
		</a>

		<nav aria-label="Main">
			<ul class="flex items-center gap-0 text-ui whitespace-nowrap sm:gap-2 sm:text-base">
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							class="nav-link block px-2 py-2 no-underline sm:px-3"
							aria-current={isCurrent(link.href) ? 'page' : undefined}
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li>
					<a
						href="mailto:{site.email}"
						class="ml-1 block rounded-full bg-marigold px-3.5 py-2 sm:px-4 font-semibold text-ink no-underline hover:bg-on-indigo"
					>
						Email
					</a>
				</li>
			</ul>
		</nav>
	</div>
	<!-- Warp ends where the cloth is tied to the loom bar. -->
	<div class="fringe h-2" aria-hidden="true"></div>
</header>

<style>
	.fringe {
		background-image: repeating-linear-gradient(
			90deg,
			transparent 0 5px,
			var(--color-thread-fringe) 5px 6px
		);
	}
	.nav-link {
		color: var(--color-on-indigo-muted);
		text-decoration-thickness: 2px;
	}
	.nav-link:hover {
		color: var(--color-on-indigo);
	}
	.nav-link[aria-current='page'] {
		color: var(--color-on-indigo);
		font-weight: 600;
		/* Woven tab: a short band of beaten marigold picks under the label. */
		background-image: repeating-linear-gradient(
			180deg,
			var(--color-marigold) 0 2px,
			transparent 2px 4px
		);
		background-repeat: no-repeat;
		background-size: calc(100% - 1rem) 8px;
		background-position: 50% 100%;
	}
</style>
