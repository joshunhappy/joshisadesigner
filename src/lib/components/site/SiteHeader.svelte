<script lang="ts">
	import { page } from '$app/state';
	import { site, copy } from '$lib/site';

	const links = [
		{ href: '/', label: 'Home', hideOnPhone: true },
		{ href: '/work', label: 'Work' },
		{ href: '/about', label: 'About' }
	];

	const isCurrent = (href: string) =>
		href === '/'
			? page.url.pathname === '/'
			: page.url.pathname === href || page.url.pathname.startsWith(href + '/');
</script>

<header class="relative z-50">
	<div class="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-4 sm:px-8">
		<!-- Brand block: white name set in a black tile. -->
		<a href="/" class="brand no-underline" aria-label="{site.name}, home">
			<span aria-hidden="true">JOSH</span>
			<span aria-hidden="true">DE LA CRUZ</span>
		</a>

		<nav aria-label="Main">
			<ul class="flex items-center">
				{#each links as link (link.href)}
					<li class={link.hideOnPhone ? 'hidden sm:block' : ''}>
						<a
							href={link.href}
							class="nav-link block px-2.5 py-3 text-base font-medium no-underline sm:px-4 sm:text-lg"
							aria-current={isCurrent(link.href) ? 'page' : undefined}
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="ml-1">
					<a href="mailto:{site.email}" class="pill bg-ink px-3.5 text-base text-canvas hover:bg-ink/80 sm:px-4 sm:text-lg">
						{copy.contactCta}
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	.brand {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 72px;
		height: 86px;
		margin: -16px 0 -16px;
		padding: 0 8px;
		background: var(--color-ink);
		color: var(--color-canvas);
		font-weight: 900;
		font-size: 18px;
		line-height: 18px;
	}
	.brand span {
		display: block;
		width: 56px;
	}
	.nav-link {
		color: var(--color-ink);
	}
	.nav-link:hover {
		text-decoration: underline;
	}
</style>
