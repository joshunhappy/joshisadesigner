# joshisadesigner

UI/UX portfolio — SvelteKit, deployed to [joshisadesigner.com](https://joshisadesigner.com) via Cloudflare Pages.

## Stack

- [SvelteKit](https://kit.svelte.dev/) + Svelte 5
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) — page transitions, ScrollTrigger, SplitText, custom cursor
- [Bun](https://bun.sh/) — package manager & runtime
- [Cloudflare Pages](https://pages.cloudflare.com/) — via `@sveltejs/adapter-cloudflare`

## Development

```bash
bun install
bun run dev
```

## Deploy

Push to `main` — Cloudflare Pages builds automatically.

**Cloudflare Pages settings:**
- Build command: `bun run build`
- Build output directory: `.svelte-kit/cloudflare`
- Compatibility flags: `nodejs_compat`

## Figma

Replace placeholder tokens in `src/app.css` (`@theme` block) with exported colors and fonts after Figma handoff. Drop font files into `static/fonts/`, images into `static/images/`, and update `src/lib/data/work.ts` with real project data.
