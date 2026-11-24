# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** design leads, hiring managers, and recruiters filling a full-time (remote) UI/UX or product designer role. They arrive from a job application, LinkedIn, or a referral link and skim fast, usually in under a minute, looking for evidence of thinking and evidence that the work shipped.
- **Secondary:** founders and agencies considering Josh for freelance or project work. They look for outcomes and for confidence that he can carry a project from design through to build.

## Product Purpose

joshisadesigner.com is Josh De La Cruz's portfolio. It exists to get him hired, full-time first, with freelance left open. Success means a qualified visitor reaches a strong case study quickly, understands how Josh works, and contacts him or downloads his résumé.

## Positioning

- **Design + front-end hybrid.** Josh designs interfaces that ship. He works inside real constraints (Bootstrap grids, existing React component libraries), writes CSS and builds components, and turns designs into development tasks and handoff. A designer-only portfolio can't truthfully claim this.
- **Bilingual, English and Spanish.** He works across English- and Spanish-speaking markets: Guatemala-based, with clients in the US, Mexico, and the Latino diaspora.

## Operating Context

- **Discovery:** visitors arrive via job applications, LinkedIn (linkedin.com/in/joshisadesigner), and direct links to the domain.
- **Devices:** evaluated on desktop during hiring reviews and on mobile when a link is shared.
- **Hosting:** deployed on Cloudflare Pages; analytics via Microsoft Clarity.

## Capabilities and Constraints

- **Stack:** SvelteKit with Svelte 5, Tailwind CSS v4, and GSAP; Bun is the package manager. The existing codebase decides the stack.
- **Content model:** project data lives in `src/lib/data/work.ts`. Long-form case studies use the `case-study/*` component system (Decision, Compare, Figure, Flow, Metrics, SectionNav). Other projects render as screenshot galleries.
- **Open decisions:**
  - Spanish version of the site: English ships first, and copy is structured so a `/es` route can be added later;
  - Phone (+502) 5052 8589 stays public as a `tel:` link in the contact close.

## Brand Commitments

- **Name:** "Josh De La Cruz", with the handle and domain **Joshisadesigner** as part of the brand voice.
- **Portrait:** the portrait photo (`static/images/josh.jpg`) stays part of the identity.
- **Voice:** first person, plain and direct, with no inflated claims. Case studies state tradeoffs and limits openly ("What it cost", "What I did not measure").

## Evidence on Hand

- **Full case study:** America Voice, Version 2 (Jan–Apr 2026, Lead UX/UI Designer). Source: `src/lib/data/case-studies/america-voice.ts`; assets in `static/images/case-studies/america-voice/` and `static/images/work/america-voice/`. No quantitative metrics exist for this project, so none may be invented.
- **Galleries:** screenshots only, with no case-study write-up, in `static/images/work/<slug>/`:
  - America Voice App (2024);
  - AV Reseller Portal (2024);
  - Mercury (2024);
  - Metis (2024);
  - Ministerios Ebenezer (2023);
  - Pronto Top-up (2023);
  - Pronto Top-up App (2023).
- **Résumé/CV:** Josh will supply a PDF to link. Until it exists, don't link to a placeholder.
- **Contact:** email joshisadesigner@me.com and LinkedIn.
- **Absent:** no testimonials, client logos, awards, press, or metrics. Don't fabricate any.

## Product Principles

1. **The work leads.** Every route should be one step from the strongest case study.
2. **Show how it shipped, not only how it looks.** Design decisions, constraints, and build or handoff detail are the proof.
3. **Honest over impressive.** State limits and tradeoffs; never invent numbers or endorsements.
4. **Respect a skimmer's minute, reward a reader's hour.** Fast to scan, deep when opened.

## Accessibility & Inclusion

Target WCAG 2.2 AA. Keyboard and screen-reader access to navigation, honoring reduced motion, and readable contrast are required, especially because the site argues for Josh's craft.
