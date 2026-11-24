---
name: Joshisadesigner
description: Josh De La Cruz's portfolio, woven as a backstrap loom cloth: indigo warp ground, bright weft for the work.
colors:
  indigo-950: "#141c52"
  indigo-900: "#1e2a78"
  indigo-700: "#2e3a8c"
  indigo-500: "#4656b4"
  on-indigo: "#ede6d6"
  on-indigo-muted: "#a9b3e6"
  marigold: "#f2a007"
  cochineal: "#b3122e"
  cotton: "#ede6d6"
  cotton-deep: "#e2d9c4"
  cotton-light: "#f6f1e6"
  ink: "#15183a"
  ink-muted: "#4a4e6e"
  ink-faint: "#5a5e7e"
  rule: "#cfc5ae"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 9vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body-reading:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  thread: "2px"
  frame: "4px"
  pill: "9999px"
spacing:
  pick-0: "4px"
  pick-1: "6px"
  pick-2: "9px"
  pick-3: "22px"
  gutter-sm: "20px"
  gutter-md: "40px"
  container-wide: "1440px"
  container-reading: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.on-indigo}"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.on-indigo}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-outline-hover:
    backgroundColor: "{colors.on-indigo}"
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.on-indigo-muted}"
    padding: "8px 12px"
  nav-link-active:
    textColor: "{colors.on-indigo}"
  fact-cell:
    backgroundColor: "{colors.indigo-950}"
    textColor: "{colors.on-indigo}"
    padding: "16px 20px"
  decision-card:
    backgroundColor: "{colors.cotton-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.thread}"
    padding: "28px"
  pager-cell-indigo:
    backgroundColor: "{colors.indigo-900}"
    textColor: "{colors.on-indigo}"
    padding: "24px 20px"
  pager-cell-cotton:
    backgroundColor: "{colors.cotton}"
    textColor: "{colors.ink}"
    padding: "24px 20px"
---

# Design System: Joshisadesigner

## Overview

**Creative North Star: "The Backstrap Loom"**

Warp is the design, weft is the build, and the cloth exists only where both cross. Every page is set on an indigo warp field: a deep blue ground striped with fine vertical threads at a fixed 6px pitch. The work arrives as weft. Each project is a horizontal brocade band whose woven strip carries the client's own colour, and how tightly that strip is beaten says how much weight the project carries. Long-form reading moves onto undyed cotton, a warm off-white with a faint 4px cross weave, so the case study reads as cloth rather than paper.

The system is dense and saturated on indigo, quiet and generous on cotton. One display family (Bricolage Grotesque) does all the talking, heavy and tightly tracked for headings and plain for reading. The name on the home page is not set in a font at all: it is woven as 5x7 brocade lettering, with the warp passing over every float. A single 2px marigold thread runs the length of the home page, from the portrait through every band to a knot in the contact close.

Absence is drawn on purpose. A project with screens and no write-up shows bare warp, loose threads with one started pick, and says "Screens only". An empty grid cell shows warp instead of a hole. Motion is vertical packing: picks slide down and pack tight as a band enters view, and hover or focus beats a band tighter. The one exception is continuity between pages, where a project's title travels from its band into the project header. With reduced motion, everything renders already beaten and pages simply cross-fade.

**Key Characteristics:**
- Indigo warp field owns the ground; undyed cotton appears only under long-form reading.
- Projects are brocade bands; pick density encodes rank.
- One integer density scale (pick-0 to pick-3) drives rank, the active state, and the beat-in.
- One continuous marigold weft thread ties the home page together.
- Missing content is drawn as bare warp, never left blank and never faked.
- Motion packs vertically and nothing else moves, except the title's travel between pages.

## Colors

A cold indigo ground with three hot accents. Marigold is the action colour on indigo, cochineal the action colour on cotton, and each client's own colour is the weft of its band.

### Primary
- **Indigo Warp** (indigo-900): the default field behind every page (`warp` surface), the fill of indigo pager cells, and the warp thread drawn over brocade lettering.
- **Deep Indigo** (indigo-950): the page background, header, contact close (`warp-deep` surface), fact cells, image frames, and the lightbox scrim at 90%.
- **Warp Thread** (indigo-700): the 1px vertical thread line in the warp pattern, the 3px interlace threads crossing the portrait's edges, and the 1px dividers of fact grids and indigo pagers.
- **Loose Indigo** (indigo-500): scrollbar thumb only.

### Secondary
- **Marigold Weft** (marigold): the one action colour on indigo. Primary buttons, the header Email pill, the running weft thread and its knot, the active nav tab's picks, the "Case study" kind label, band call-to-action text, the reading-progress pick, focus rings, the skip link, and text selection.

### Tertiary
- **Cochineal** (cochineal): the action and active colour on cotton. The woven-tab picks of the active case-study section, the "Chosen" mark in decisions, link underlines and hovers in cotton text.
- **Client weft** (per project, from work data): each band's strip is woven in the client's own colour, lifted on indigo to at least OKLCH lightness 0.72 and chroma 0.08 so it reads.

### Neutral
- **Undyed Cotton** (cotton): the long-form reading surface, with a 4px cross weave at 2 to 2.5% ink. Also the primary text colour on indigo (`on-indigo` shares the value).
- **Cotton Light** (cotton-light): raised panels on cotton (decision cards, callouts, flow steps, metric cells).
- **Cotton Deep** (cotton-deep): figure wells and annotation panels on cotton.
- **Pale Indigo** (on-indigo-muted): secondary text on indigo (meta rows, nav links at rest, captions, footer). 6.2:1 on indigo-900.
- **Ink** (ink): headings and emphasis on cotton; text on marigold.
- **Ink Muted** (ink-muted): reading body on cotton (6.5:1).
- **Ink Faint** (ink-faint): numerals, notes, and unchosen options on cotton (5.1:1 minimum).
- **Selvage Rule** (rule): 1px dividers and borders on cotton.

### Named Rules
**The Warp Owns the Ground Rule.** Indigo is the page. Cotton is laid down only where someone reads long text (case-study body, the About background panel). Short pages, galleries, and the 404 stay on indigo.

**The Two Hands Rule.** Marigold acts on indigo; cochineal acts on cotton. They do not swap surfaces.

**The Client Weft Rule.** A band's strip colour is the client's colour, lifted to OKLCH L ≥ 0.72 and C ≥ 0.08 on indigo. It never becomes a large fill.

## Typography

**Display Font:** Bricolage Grotesque (self-hosted variable, 200–800, with ui-sans-serif, system-ui)
**Body Font:** Bricolage Grotesque
**Signature lettering:** 5x7 brocade grid (WovenWord) of square-ended packed floats (0.9 of the row tall, near-square corners), used for the name on the home hero only

**Character:** One grotesque with ink-trap quirks, used at ExtraBold with tight negative tracking for headings and at Regular for reading. The woven name is drawn, not set, so it carries the loom; the font carries everything else.

### Hierarchy
- **Display** (800, 3.75rem to 6rem, line-height 0.9, -0.035em): page titles (Work, About, case-study and gallery titles).
- **Headline** (800, 2.25rem to 4.5rem, 0.95, -0.03em): the contact close heading, the flagship band title (3rem to 4.5rem), the 404 title.
- **Title** (800, 1.875rem to 2.25rem, 0.95, -0.025em): band titles, the "Screens" section head, case-study section heads (with a 1px rule beneath), pager titles (1.75rem, -0.02em).
- **Lede** (500 to 600, 1.25rem to 1.875rem, leading tight): the positioning line, case-study ledes, lead paragraphs.
- **Body** (400, 1.125rem, leading relaxed): text on indigo; max 44 to 52ch.
- **Body Reading** (400, 17px, 1.625): case-study prose on cotton; max 35rem.
- **Label** (600, 0.875rem, sentence case): block headings in case studies, decision sub-heads, the band meta row, fact labels.

### Named Rules
**The Sentence Case Rule.** Labels and meta are sentence case at normal tracking. No all-caps tracked-out labels anywhere.

**The Woven Name Rule.** Brocade lettering is reserved for the name. Decorative only: the real text sits beside it for assistive tech.

## Layout

Two containers: 1440px for home and the Work index, 1200px for case studies, galleries and the 404. Side gutters are 20px on phones and 40px from 768px. The home hero is a 12-column grid: selvage text on the left seven columns, the portrait on the right five, aligned to the hero's foot. Bands run full container width with a 20px (40px desktop) indent where the running thread enters; band bodies split 4:8 (flagship 5:7) on desktop and stack on phones. Non-flagship band media is a three-up row of 4:5 crops.

Warp backgrounds are repeating patterns at fixed pitch (6px for the field, 10px for bare warp), so threads re-count with the viewport and never stretch. Case studies pair a 180px sticky contents rail with the reading column on desktop; on phones the rail becomes a sticky horizontal bar. Fact grids go one, two, then three columns.

Vertical rhythm is generous: sections close with 64px to 96px of bottom padding on indigo and 80px to 112px between case-study sections on cotton.

### Named Rules
**The One Running Thread Rule.** On home, a single 2px marigold thread starts at the portrait. On phones it drops from the portrait's bottom-left corner down the selvage; on desktop it leaves the portrait's bottom edge and runs along the hero's foot to the gutter. From there it runs down the left edge of the work column, enters each band at its strip, and ties into the close with a 10px marigold knot above the contact heading. The Work index carries the same left thread. Add no second thread.

**The Re-count, Never Stretch Rule.** Woven patterns are tiled at fixed pixel pitch. Responsive change adds or removes threads; it never scales them.

## Elevation & Depth

Depth is woven, not lifted. Surfaces are flat colour plus thread patterns; layering reads through tone (indigo-950 under indigo-900, cotton-light on cotton) and through warp drawn over things: over the brocade floats, and over and under the portrait's top and bottom edges. The one shadow sits under project screenshots in bands so the screens sit on the cloth.

### Shadow Vocabulary
- **Screen drop** (`box-shadow: 0 18px 40px -18px rgb(5 8 30 / 0.7)`): under band screenshot frames only.

### Named Rules
**The Warp-Over Rule.** When an image or float needs to sit in the cloth, interlace warp across its edge rather than adding a border or shadow. At the portrait the interlace is its own layer outside the clipped photo frame, in the field's own thread colour (indigo-700): 3px threads come down out of the field to the photo edge, odd threads pass over and run about 24px into the photo, even threads stop at the edge so they read as passing under. The bottom edge mirrors the top, kept short on phones (16px of field, 10px over the photo).

## Shapes

Mostly square. Pills (fully round) are the shape of actions: primary and outline buttons and the Email tab. Flagship screenshot frames take a 4px radius; cotton panels and figures take 2px, as does the focus ring. Everything else (bands, strips, fact grids, pager cells, hero portrait) is square-cornered. Dividers are 1px; the running thread and the outline button border are 2px; active tabs are 8px-tall stacks of 2px picks with 2px gaps.

## Components

### Buttons
Woven pills: saturated, round, unmistakable on the indigo field.
- **Shape:** fully round pill. Below 640px the Email button stacks its label (never wrapping) over the address and relaxes to a 2rem radius.
- **Primary:** marigold fill, ink text, 700 weight, 16px by 28px. Hover swaps the fill to undyed cotton.
- **Outline:** 2px undyed-cotton border, transparent fill, 14px by 28px. Hover fills with cotton and flips text to ink.
- **Focus:** 3px marigold outline at 3px offset, 2px radius.

### Navigation
- **Header:** handle on the left in ExtraBold, links on the right in pale indigo, a marigold Email pill at the end, then an 8px fringe of loose warp tying the header to the page.
- **Active tab:** the current link turns cotton, 600 weight, with a woven tab beneath: an 8px band of 2px marigold picks on 4px pitch, inset half a rem each side of the label.
- **Case-study contents:** a sticky rail on a 1px rule; the active section gets a 6px column of 2px cochineal picks at its left edge. On phones it becomes a sticky scrolling bar with the cochineal picks as an 8px band under the active label and fades only on sides with hidden items.

### Project Band (signature)
One project as a brocade band. A full-width strip sits on top: weft picks in the client colour (14px tall, pick-1 density; the flagship is 30px at pick-0, the tightest beat). A 2px marigold weft line enters from the running thread. Below, the title links the whole band, then a meta row ("Case study" in marigold or "Screens only" in pale indigo, category, year), summary, role, and a marigold call to action with an arrow that nudges 4px on hover. Hover underlines the title 3px in the band's weft colour; keyboard focus outlines the whole band in marigold at 6px offset.

### Bare Warp
Projects with screens and no write-up draw their strip as loose vertical threads (10px pitch, cotton at 38%) with one started pick in the client colour across the first fifth. The same bare warp backs the fact grid (so any cell the grid leaves empty is drawn, not a hole) and the 404's head. Behind gallery screens it is its own absolutely positioned layer at 60% opacity under the multi-column container; never put it on the columns element itself, which hides the screenshots.

### Beat-in (motion)
Bands below the fold start loose at pick-3, then pack to their resting density over 0.9s on `cubic-bezier(0.16, 1, 0.3, 1)` as they enter view; a bare-warp band's one started pick sits high and is beaten down into place on the same timing. Hover and focus beat a band to pick-0 (3px on the flagship) in 180ms and release in 120ms. Page navigation uses a View Transition: the root cross-fades (160ms out, 240ms in) and the project title, sharing a `view-transition-name`, travels from band to header over 420ms; under reduced motion only the cross-fade remains. The woven name packs row by row on load (1.1s, 18ms stagger per row). Bands already in view, and every visitor with reduced motion, render packed. One orchestration per band; vertical only.

### Fact Grid
Indigo-950 cells divided by 1px indigo-700 lines; sentence-case pale-indigo label over a cotton value. Empty trailing cells show bare warp.

### Case-study Panels (on cotton)
- **Decision card:** cotton-light, 1px rule border, 2px radius. Sub-heads "The tension", "Options", "Why", "What it cost" in label type; options are dots (ink for chosen, rule for others) with a cochineal "Chosen".
- **Callout / flow step / metric cell:** cotton-light panels; flow steps carry a 3px top border in their track colour.
- **Figure:** cotton-deep well with a 1px rule border; opens a full-screen lightbox over a 90% deep-indigo scrim.
- **Pull quote:** 2px ink left rule, lede type.

### Work Pager
Two cells divided by a 1px line: direction label with arrow over a 1.75rem ExtraBold title. On indigo, hover turns the title marigold; on cotton, cochineal.

### Contact Close
Every route ends on deep-indigo warp. The running thread comes down into the close and is tied off in a 10px marigold knot above the headline. Then the headline, availability line, the marigold Email pill (with the address), an outline résumé pill only when the PDF exists, then phone and LinkedIn as underlined links, and a fading warp fringe at the foot.

## Do's and Don'ts

### Do:
- **Do** set every page on the indigo warp field and lay cotton only under long-form reading.
- **Do** encode rank and active state with the pick scale (4, 6, 9, 22px): flagship at pick-0, other bands at pick-1, loose state at pick-3, active tabs as 2px picks on a 4px pitch.
- **Do** draw absence: bare warp with a single started pick, labelled "Screens only", instead of an empty slot or a placeholder.
- **Do** use marigold for actions and focus on indigo and cochineal for actions and active states on cotton.
- **Do** weave each band in the client's own colour, lifted to OKLCH L ≥ 0.72, C ≥ 0.08.
- **Do** tile woven patterns at fixed pixel pitch so threads re-count across viewports.
- **Do** render everything already beaten under `prefers-reduced-motion: reduce`.

### Don't:
- **Don't** use the monochrome name-plus-photo-plus-card-grid portfolio layout; projects are bands, not cards.
- **Don't** move anything on any axis but vertical packing, other than the title's page-to-page travel; no slides, fades-in from the side, parallax, scale-ins or hover nudges.
- **Don't** add a second running thread or break the one that exists.
- **Don't** use brocade lettering for anything but the name.
- **Don't** copy community textile motifs; the world borrows loom structure only.
- **Don't** invent metrics, logos, or endorsements to fill a panel; leave the warp bare.
- **Don't** use all-caps tracked labels; meta and labels stay sentence case.
