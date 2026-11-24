---
version: 1
slug: "src-routes-page-svelte"
primary_target: "src/routes/+page.svelte"
related_targets: ["src/routes/work/+page.svelte","src/routes/work/[slug]/+page.svelte","src/routes/about/+page.svelte","src/routes/+layout.svelte"]
---

# Surface: joshisadesigner.com (home, work, case study, project pages, about, 404, shell)

Mode: Experience. Audience: hiring leads and recruiters (full-time first; freelance second) skimming for about 60s. Action: reach the work in one scroll, open a project, then Contact Me (mailto) from the header or the closing band. Proof: the America Voice case study plus project galleries; no invented claims. Copy is centralised in src/lib/site.ts for a later /es.

## Direction contract

THESIS: A quiet, type-led monochrome page where the work's own colour is the only colour. It refuses the decorated, themed portfolio; the Backstrap Loom world is retired.

OWN-WORLD: Off-white canvas #f8f8f8 and black Geist. Weights: Black for display, Bold for headings, Light for reading. Secondary text is 60% black; rules are 20% black, 640px wide between work rows; the closing band is a 10% black panel. A black brand tile holds JOSH / DE LA CRUZ in white. Pill buttons: black fill, or a 1px black outline. Covers and the portrait have 24px radius. The only accent is the green "open for work" dot.

STORY: The visitor sees who Josh is and that he is open for work, scrolls a ruled list of projects each with its cover, opens one, reads About, and contacts him.

FIRST VIEWPORT: Desktop 1440: brand tile top-left; Home, Work and About, then a black Contact Me pill, top-right. A 640px left column holds "UI/UX DESIGNER" (96px Geist Black, two lines), the 24px light line, and the Open for work pill. The portrait sits right, 790px tall, 24px radius. Mobile: header, title, line, pill, then the portrait.

FORM: pinned by the user: "use the look and feel of the following frame the project", Figma portfolio.v2.260504 node 168:215 (landing). seed: none (pinned) "Replace Backstrap loom, follow the design in figma. Keep the layout for the case study."

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
