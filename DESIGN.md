---
name: Joshisadesigner
description: Josh De La Cruz's portfolio. Black Geist on an off-white canvas; the work supplies the only colour.
colors:
  canvas: "#f8f8f8"
  surface: "#ffffff"
  sunken: "rgb(0 0 0 / 0.05)"
  panel: "#e5e5e5"
  ink: "#000000"
  ink-muted: "rgb(0 0 0 / 0.6)"
  rule: "rgb(0 0 0 / 0.2)"
  open: "#03ae03"
  bezel: "#111111"
  chrome: "#e8e8e8"
  track-shared: "#000000"
  track-a: "#e2532c"
  track-b: "#4b5bd4"
typography:
  display:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 5vw, 6rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)"
    fontWeight: 300
    lineHeight: 1.4
  body:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-light:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.4
  meta:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.2
  button:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.25
rounded:
  sm: "2px"
  window: "8px"
  cover: "24px"
  phone: "2rem"
  pill: "999px"
spacing:
  gutter-sm: "16px"
  gutter: "32px"
  gutter-content: "40px"
  gutter-about: "48px"
  row-gap: "40px"
  section: "72px"
  shell: "1440px"
  reading: "1200px"
  rule-width: "640px"
  cover-width: "648px"
  portrait-height: "790px"
  about-lede: "560px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 16px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 16px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  brand-tile:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    width: "72px"
    height: "86px"
  work-cover:
    backgroundColor: "{colors.sunken}"
    rounded: "{rounded.cover}"
    width: "648px"
  fact-cell:
    textColor: "{colors.ink}"
    padding: "16px 20px"
  contact-band:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    padding: "128px 32px"
---

# Design System: Joshisadesigner

## Overview

**Creative North Star: "The Quiet Contact Sheet"**

A monochrome, type-led page where Josh's projects supply every bit of colour. Black Geist sits on an off-white canvas; the structure is set by type weight, hairline rules, and generous vertical space rather than by decoration, tinted surfaces, or ornament. The work list reads like a contact sheet: a ruled column of project names on the left, each with its full-colour cover on the right.

The weight ladder carries the hierarchy. Black (900) is for the one page title, Bold (700) for section and project headings, Light (300) for the opening line and long reading. Secondary text is the same black at 60%, and every divider is the same black at 20%. Surfaces are flat; the only lifted objects are device-framed screens, which rest on the canvas with one soft shadow.

The system is a user-pinned design (Figma portfolio.v2, landing frame) and replaces the earlier Backstrap Loom world entirely. Case-study pages keep their established layout (facts grid, section rail, reading column) and are restyled into this vocabulary.

**Key Characteristics:**
- Off-white canvas, pure black ink, no brand hue.
- Colour comes only from project imagery, the green open-for-work dot, and data tracks in case-study flows.
- Geist throughout, separated by weight (900 / 700 / 500 / 300) rather than by a second family.
- Hairline rules at 20% black; 640px-wide rules between work rows.
- Pill buttons in two states only: black fill, or 1px black outline.
- 24px-radius covers and portrait; everything else nearly square.

## Colors

A greyscale built from one black at three opacities, with colour reserved for the work and for meaning.

### Primary
- **Ink Black** (`ink`): all type, filled buttons, the brand tile, focus outlines, selection fill, active section marks, and the reading-progress bar. There is no other primary; the accent token aliases it.

### Tertiary
- **Open Green** (`open`): the single dot in the "Open for work" pill. It is a status signal, not a brand colour, and appears nowhere else.
- **Flow Tracks** (`track-shared`, `track-a` vermilion, `track-b` indigo): category colours for case-study flow steps and their legend only, as a 3px top border and an 8px dot.

### Neutral
- **Gallery Off-White** (`canvas`): page background everywhere, and the flatten colour for transparent images in the pipeline so screens sit on the page without a seam.
- **Paper White** (`surface`): decision cards, metric cells, flow steps, and browser-window interiors. Reads as a sheet laid on the canvas.
- **Wash** (`sunken`): 5% black. Cover fallback panels behind device frames, image-error placeholders, figure insets.
- **Closing Grey** (`panel`): the contact band at the foot of every page. The only full-bleed tonal field.
- **Muted Ink** (`ink-muted`): 60% black. Metadata (category, year, role), captions, secondary links, and body text inside case-study reading blocks.
- **Hairline** (`rule`): 20% black. Every divider, grid line, outline on figures, and the browser-window dots.
- **Bezel** (`bezel`) and **Window Chrome** (`chrome`): device frames around project screens only.

### Named Rules
**The Work Is the Colour Rule.** No interface element carries hue except the open-for-work dot and the data tracks inside case-study flows. A new surface that needs emphasis gets it from weight, size, or a black fill, never from a new colour.

**The One Black Rule.** Secondary and tertiary greys are the same black at reduced opacity (60% text, 20% rules, 5% wash), so they stay in key on both canvas and paper white. Do not introduce opaque mid-greys for text or lines.

## Typography

**Display Font:** Geist (variable, self-hosted, with a metric-matched Arial fallback)
**Body Font:** Geist
**Label/Mono Font:** none; numbers use tabular figures where they align.

**Character:** One grotesque family pushed to its extremes. Black display set tight against Light reading text gives the page its contrast without a second typeface.

### Hierarchy
- **Display** (900, 48px to 96px fluid, line-height 1, -0.02em): the one page title per route: the hero "UI/UX DESIGNER", project names on project pages, error titles. Uppercase only in the hero, as set in the frame.
- **Headline** (700, 40px to 64px fluid, 1.25): section headings: Work, About, gallery groups when used as page sections.
- **Title** (700, 32px to 48px fluid, 1.2): project names in the work list, case-study section headings (with a hairline beneath), gallery group headings.
- **Lede** (300, 20px to 24px fluid, 1.4): the opening line under a display title; max 30 to 40ch.
- **Body** (400, 17px, 1.6): case-study reading paragraphs in muted ink, max 35rem.
- **Body Light** (300, 16px, 1.6): About copy and the contact list.
- **Label** (600, 17px, 1.4): heading over a block of reading inside a case study.
- **Meta** (400, 14px, 1.2, muted): category, year, role lines; captions; fact labels.

### Named Rules
**The Weight Ladder Rule.** Hierarchy is carried by Geist at 900, 700, 600, 500, and 300. Black is for the single title of a page and the closing contact heading; nothing else uses it.

**The Sentence-Case Rule.** Headings are sentence or title case. The hero title is the sole uppercase setting; no tracked-out uppercase labels sit above headings.

## Layout

A 1440px shell with 16px side gutters on phones. From 640px up, the header and contact band sit at 32px, while the hero and work sections sit at 40px, so content columns run from 40px to 1400px at 1440; About widens to 48px from 768px. Sections are separated by a 72px rhythm on desktop (64px on phones); work rows step at 72px desktop and 40px mobile.

- **Hero:** on large screens, a 640px text column and a 648px portrait column pushed to opposite edges, so the portrait shares its column (752 to 1400 at 1440) with the work covers below. 64px top padding from 1024px. On smaller screens the portrait follows the text at full width, keeping the 648:790 frame.
- **Work list:** each row is a free info column and a 648px cover, 72px apart, stacking below 1024px. A 640px hairline sits above every row and after the last, left-aligned, never full width.
- **About:** a large Light statement (28 to 32px, max 560px) beside a 660px reading column.
- **Project and case-study pages:** a 1200px reading frame with 20px gutters (40px from 768px). Case studies add a 180px sticky section rail beside the body from 768px; below that the rail becomes a sticky horizontal bar with edge fades.
- **Galleries:** desktop screens in two columns, phone screens in four, all at fixed device viewports so every project's screens share one scale.
- **Contact band:** full bleed, 96px to 128px vertical padding, content left-aligned in the shell.

## Elevation & Depth

Flat by default. Depth is tonal: canvas, then paper-white sheets bounded by hairlines, then the grey contact band. The one shadow belongs to device-framed screens, which rest on the canvas like prints on a table.

### Shadow Vocabulary
- **Screen rest** (`box-shadow: 0 18px 40px -20px rgb(0 0 0 / 0.35)`): phone bezels and browser windows around project screens. Nothing else casts a shadow.

### Named Rules
**The Only Prints Cast Shadows Rule.** Shadows belong to device frames holding the work. Cards, buttons, headers, and panels stay flat and use hairlines or tone instead.

## Shapes

Two corner families. The work's imagery (covers, the portrait, and the gallery cover) takes a soft 24px radius; interface containers are square or nearly square (2px on cards, figures, and metric grids). Buttons are full pills. Device frames follow their hardware: 2rem phone bezel with a 1.6rem screen, 8px browser window with a 26px chrome bar, three dots, and an address field. Small round dots (4px separators, 8px markers, the 12px green dot) are the only circles.

## Components

### Buttons
Two pills, nothing else.
- **Shape:** full pill (999px), 12px by 16px padding, 18px Geist Medium, 8px gap for a leading icon.
- **Primary:** black fill, canvas text. Contact Me in the header and band, the primary error action. Hover lowers the fill to 80% black.
- **Outline:** 1px black border, black text; hover inverts to black fill and canvas text. Used for the open-for-work pill (16px, tighter padding, green dot leading) and secondary actions.
- **Transition:** background and colour, 150ms ease-out.

### Navigation
- **Header:** brand tile left, links and the Contact Me pill right, inside the 1440px shell. The tile is a 72 by 86px black block holding JOSH / DE LA CRUZ in white 18px Bold on 18px leading; it overhangs the header's vertical padding to sit flush at the top.
- **Links:** 16px (18px from 640px) Medium, black, underlined on hover only. The current page carries no visible mark; it is announced with `aria-current` alone, as in the frame. Home is hidden on phones.
- **Case-study rail:** "Contents" label, then links in muted 15px over a hairline left border; the active link turns black Semibold with a 2px inset black mark on the left. The mobile bar uses the same mark beneath the label.
- **Pager:** two cells divided by hairlines; muted direction line with an arrow, 28px Bold project name that underlines on hover.

### Work Row (signature)
Project name as a Title link whose hit area stretches over the whole row; meta line (category, 4px dot, year) in muted 14px; a 20px summary; the role line; a Light "View" with an arrow. The cover is 648 by 383 at 24px radius. A project without a composed cover shows its first screen in its device frame on a wash panel, so every row keeps the same rhythm. Hover and keyboard focus underline the name at 3px; focus draws a 2px black outline 8px around the row.

### Device Frame (signature)
Screens appear in the frame of the device they were designed for: phone bezel at 375:812 or browser window at 16:10, cropped from the top, with the full image one click away in a lightbox (85% black backdrop, a pill hint naming Esc or tap). Width under 1200px decides phone versus desktop.

### Facts Grid
Facts sit straight on the canvas with no fill and no outer box: hairline rules appear only between facts (each cell draws its top and left edge; the outer edges are clipped). One, two, then three columns; the cell that starts a row has no left padding, so its text aligns with the page text above. Each fact is a muted 14px label over a 16px value. Shared by case studies and project galleries.

### Case-Study Blocks
Decision cards, metrics, and the callout are paper-white sheets with a hairline border and 2px corners. A decision's options use 8px dots, black when chosen and hairline grey otherwise. Pull quotes use a 2px black left rule. Flow steps carry their track colour as a 3px top border.

### Contact Band
Closing grey band on every page: a Black 40px to 56px question heading set in two fixed lines ("Hiring a designer" / "who builds? Let's talk."), held as a two-part array in the site copy and joined into one wrapping line on phones; then the pill pair, then the contact list in Light 16px with underline on hover, and the copyright line in muted ink.

### Portrait
The portrait sits in a 648:790 frame with 24px radius and a fixed crop taken from the frame: the photo at 128.5% of the frame width, left-aligned, raised 34.2%. Keep the geometry when the frame resizes rather than switching to object-fit.

### Reading Progress
A 3px black bar fixed to the top of case studies, scaled from the left as the article is read.

### Images
Every project raster renders through one component with a responsive srcset. Originals live outside the static folder; the pipeline flattens transparency onto the canvas colour and writes JPEG variants that carry their provenance in a comment segment. A failed load becomes a wash panel with the alt text.

## Do's and Don'ts

### Do:
- **Do** keep the canvas at Gallery Off-White and every rule at 20% black; dividers between work rows stop at 640px.
- **Do** carry hierarchy with Geist weight: 900 for the page title, 700 for headings, 300 for ledes and long reading.
- **Do** use the two pills (black fill, 1px outline) for every button.
- **Do** give project imagery the 24px radius and present screens in their device frame with the single screen-rest shadow.
- **Do** keep focus visible as a 2px black outline offset 3px (8px around whole-row links).
- **Do** honour reduced motion: page cross-fades remain, the shared-title travel between list and page is dropped.

### Don't:
- **Don't** add a brand hue; colour is the work's, the open-for-work dot's, and the flow tracks' alone.
- **Don't** add shadows to cards, buttons, or the header.
- **Don't** set small uppercase tracked labels above headings, or use a second display family.
- **Don't** bring back anything from the retired Backstrap Loom world (indigo ground, woven thread textures, Bricolage Grotesque).
- **Don't** draw rules full-bleed across the work list.
