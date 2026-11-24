# joshisadesigner

UI/UX portfolio built with SvelteKit, deployed to [joshisadesigner.com](https://joshisadesigner.com) via Cloudflare Pages.

## Stack

- [SvelteKit](https://kit.svelte.dev/) + Svelte 5
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/): page transitions, ScrollTrigger, SplitText, custom cursor
- [Bun](https://bun.sh/): package manager & runtime
- [Cloudflare Pages](https://pages.cloudflare.com/): via `@sveltejs/adapter-cloudflare`

## Development

```bash
bun install
bun run dev
```

## Deploy

Push to `main`. Cloudflare Pages builds automatically.

Every page is pre-rendered to static HTML (`src/routes/+layout.ts`). Static folders (`/images`, `/fonts`, `/icons`) are excluded from the Pages Function by folder in `svelte.config.js`, which keeps `_routes.json` under Cloudflare's 100-rule limit. Old slugs listed as `aliases` in `src/lib/data/work.ts` become real 301s in the generated `_redirects`.

**Cloudflare Pages settings:**
- Build command: `bun run build`
- Build output directory: `.svelte-kit/cloudflare`
- Compatibility flags: `nodejs_compat`

## Figma

Replace placeholder tokens in `src/app.css` (`@theme` block) with exported colors and fonts after Figma handoff. Drop font files into `static/fonts/`, images into `static/images/`, and update `src/lib/data/work.ts` with real project data.

## Images

Originals live in `assets/images/` (committed, not deployed). After adding or changing one, run:

```bash
bun run images
```

This writes resized, provenance-stamped JPEGs to `static/images/` and updates `src/lib/data/image-manifest.json`. Commit both. Content data keeps referring to images by their original path (`/images/work/<project>/<file>`).
