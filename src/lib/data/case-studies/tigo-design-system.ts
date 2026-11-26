import type { CaseStudy } from '$lib/types';

/*
 * Sources: the Tigo design system Figma file (read 2026-11-25) and Josh's own
 * account of the method, given in conversation. Every contrast ratio below is a
 * computed value recorded on the file's WCAG Compliance page, not a user outcome.
 * Never link the Figma file. It was delivered as a file, never as a library.
 */
const dir = '/images/case-studies/tigo-design-system';

export const tigoDesignSystemCaseStudy: CaseStudy = {
	lede: 'One brand, ten Latin American markets, and a production stylesheet that disagreed with the brand board and failed contrast. In one month I turned what was already live into a token-driven Figma system, documented in English and Spanish.',

	hero: {
		src: `${dir}/01.plan-grid.png`,
		alt: 'Three Tigo plan cards side by side, each with offer badges, a price in quetzales, a data amount, an “El plan incluye” feature list, a full-width “Solicitar aquí” button and a “Detalle” link',
		frame: 'Example - Plan grid'
	},

	facts: [
		{ label: 'Role', value: 'Design System Designer' },
		{ label: 'Timeline', value: 'Jul 2026, one month' },
		{ label: 'Client', value: 'Agency partner for Tigo' },
		{ label: 'Scope', value: 'Tokens, components, WCAG audit, bilingual docs' },
		{ label: 'Markets', value: '10, Latin America' },
		{ label: 'Tools', value: 'Figma, Figma Variables, Claude Code, Figma MCP' }
	],

	sections: [
		/* ------------------------------------------------------------------ */
		{
			id: 'overview',
			label: 'Overview',
			title: 'One brand, ten markets',
			blocks: [
				{
					type: 'prose',
					lead: true,
					body: [
						'Tigo runs regional websites and apps across Bolivia, Colombia, Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua, Panama, Paraguay and Uruguay. The brief was a single design system those sites and apps could share.'
					]
				},
				{
					type: 'prose',
					body: [
						'This was commissioned work, subcontracted through a designer at an agency that works with Tigo. My client was that agency designer, not Tigo’s in-house team. I built it alone over July 2026 and delivered it to the client as a design system in a shared Figma file.',
						'I built it with Claude Code and the Figma MCP, which generated and iterated the component layer under my direction. How that split worked is covered in its own section below.'
					]
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'audit',
			label: 'Audit',
			title: 'Start with what is already live',
			blocks: [
				{
					type: 'prose',
					body: [
						'The work started from the existing product, not a blank file. There were three sources: a legacy brand board, the production stylesheet (styles.css), and the live pages on tigo.com.gt and the checkout at compras.tigo.com.gt.',
						'They didn’t agree with each other. Colours had drifted between the brand board and the CSS, radii differed between buttons and cards, and several live colour pairs failed contrast. Each conflict needed a decision before it could become a token.'
					]
				},
				{
					type: 'list',
					heading: 'Conflicts resolved, as recorded in the file',
					items: [
						'Yellow: the brand value #FFC200 wins over the CSS value #FFBE00.',
						'Main Blue: the CSS #001DB3 and the brand #001EB4 are the same colour after HSL rounding, so the brand value is kept.',
						'Radius: the 40px pill stays the button target; the legacy 20px web radius stays available as radius/md.',
						'Grays: steps 200 and 600–900 were aligned to the production CSS values.'
					]
				},
				{
					type: 'callout',
					tone: 'constraint',
					body: 'The system had to match a product already in production. Where the live site and the brand board disagreed, the file says which one won and why, so developers moving to the system aren’t surprised by a value they didn’t expect.'
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'tokens',
			label: 'Tokens',
			title: 'Primitive, semantic, component, code',
			blocks: [
				{
					type: 'prose',
					body: [
						'The variables sit in four collections: Primitives, then Semantic Color, Semantic Size & Space, and Semantic Typography & Motion. Primitives hold raw values (13 colour families, most on a 50–900 ramp, plus translucent overlays and a numeric scale) and are hidden from publishing. Components never touch them directly.',
						'Semantic tokens are named component/element/state, for example button/secondary/border/hover or input/text/label-filled, and each one aliases a primitive.'
					]
				},
				{
					type: 'flow',
					heading: 'One value, from primitive to code',
					steps: [
						{ label: 'Primitive', detail: 'color/main-blue/500 = #001EB4' },
						{ label: 'Semantic token', detail: 'button/primary/bg/default' },
						{ label: 'Component', detail: 'Button · Type=Primary · State=Default' },
						{ label: 'Code', detail: 'var(--button-primary-bg-default)' }
					],
					caption: 'Every semantic token carries its WEB code syntax, so Dev Mode shows developers the CSS variable name, not a hex value.'
				},
				{
					type: 'decision',
					title: 'Two tiers of aliases instead of raw values',
					problem: 'Ten markets share one brand. If components hold raw hex values, one brand change means finding every place that colour was used.',
					options: [
						{ label: 'Raw values bound directly on components', note: 'Fast to build, and every change becomes a search.' },
						{
							label: 'Primitives aliased by semantic tokens',
							chosen: true,
							note: 'Components only consume semantic tokens; semantic tokens point at primitives.'
						}
					],
					rationale: 'As the Getting Started page puts it, a brand value changes once in the primitive and every component follows. The semantic layer also gives each value a name that says where it is used.',
					tradeoff: 'More tokens to name and maintain, and a missing token has to be added to the system rather than typed in locally.'
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'accessibility',
			label: 'Accessibility',
			title: 'Fixing contrast without losing the brand',
			blocks: [
				{
					type: 'prose',
					body: [
						'The audit found legacy and production colour pairs below WCAG 2.1 AA. Each fix tries to keep the feel of the original: the light-blue hover is still light blue, the error colour stays in Tigo’s magenta family, and the WhatsApp button still reads as green.'
					]
				},
				{
					type: 'metrics',
					heading: 'Before and after',
					items: [
						{ value: '1.94 → 10.42:1', label: 'Secondary button hover', note: 'Main Blue 500 on a Bright Blue 50 tint' },
						{ value: '1.98 → 5.22:1', label: 'WhatsApp button', note: 'Teal ramp, up to 7.67:1 when pressed' },
						{ value: '1.94 → 8.72:1', label: 'Link hover', note: 'Main Blue 400 plus underline' },
						{ value: '2.66 → 3.69:1', label: 'Input border', note: 'gray/600, above the 3:1 UI minimum' },
						{ value: '3.74 → 5.48:1', label: 'Input error', note: 'magenta/600' },
						{ value: '2.21 → 5.46:1', label: 'Input success', note: 'green/800' }
					],
					note: 'Computed contrast ratios recorded on the file’s WCAG Compliance page, against white unless noted. They describe colour pairs, not measured user outcomes.'
				},
				{
					type: 'decision',
					title: 'The WhatsApp button',
					problem: 'White text on WhatsApp’s brand green #25D366 measures 1.98:1, far below the 4.5:1 a 14–16px button label needs.',
					options: [
						{ label: 'Keep the brand green behind white text', note: 'Recognisable, and it fails AA.' },
						{
							label: 'A darker teal ramp for the button, brand green kept for icons',
							chosen: true,
							note: '#117A6C → #0D6E62 → #075E54 for default, hover and pressed.'
						}
					],
					rationale: 'The teal ramp passes AA in every enabled state (5.22–7.67:1) and still reads as WhatsApp. The brand green survives as the accent/whatsapp-brand token for icons, where it isn’t carrying text.',
					tradeoff: 'The button is no longer the exact brand green, so it looks slightly different from WhatsApp’s own buttons.'
				},
				{
					type: 'list',
					heading: 'Other rules the file sets',
					items: [
						'Input focus: production only recoloured the 1px border (#2896FC, 3.06:1); the system uses a 2px Main Blue 400 ring (WCAG 2.4.7).',
						'Content-card emphasis: production yellow #FEBE02 on white (1.67:1) became Main Blue 500 (11.38:1).',
						'Every button and link has a Focus variant: a 2px ring with a 2px offset.',
						'feedback/success and feedback/warning were rebound from the 700 to the 800 step, since the 700 values measured 3.5:1 and 3.75:1.',
						'White text on photos always sits on a scrim. Raw photo contrast is never assumed.',
						'New colour pairs must be checked, added to the contrast matrix and given a semantic token before use.'
					]
				},
				{
					type: 'figure',
					src: `${dir}/03.wcag-compliance.png`,
					alt: 'The WCAG Compliance page: a contrast matrix of every enabled button state, the legacy failures that were replaced, and contrast tables for links, inputs, badges, content cards and the add-on card',
					caption: 'The WCAG Compliance page, English version.',
					frame: 'WCAG Compliance'
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'components',
			label: 'Components',
			title: 'Built from the live site',
			blocks: [
				{
					type: 'prose',
					body: [
						'Each component was traced from a production class on tigo.com.gt or the checkout, then rebuilt on the tokens: buttons, the at-link, form inputs, plan and content cards, the entertainment add-on card, a carousel, alerts, toasts, a modal and dropdown menus.'
					]
				},
				{
					type: 'figure',
					src: `${dir}/02.plan-card.png`,
					alt: 'Plan card anatomy: two stacked badges, a price, a large data amount, an optional banner, a gray section with “El plan incluye” and feature rows, app-icon slots, then a white footer with the CTA button, a Detalle link and the validity line',
					caption: 'The plan card, the core molecule of the homepage and the store.',
					annotation: 'It’s built entirely from other system parts: Badge, Feature Row, App Icon, Button and At-Link are all live instances. Its three sections (white header, gray main, white footer) follow the production card. The app-icon slots are empty in the file; real app logos are swapped in per use.',
					frame: 'Plan Card',
					padded: true,
					device: 'mobile'
				},
				{
					type: 'figure',
					src: `${dir}/04.buttons.png`,
					alt: 'Button component set: Primary and Secondary in Small, Medium and Large, across Default, Hover, Pressed, Disabled and Focus states',
					caption: 'Button: Type × Size × State, with Focus.',
					frame: 'Button'
				},
				{
					type: 'figure',
					src: `${dir}/05.button-whatsapp.png`,
					alt: 'WhatsApp button set in the teal ramp, Small, Medium and Large, across Default, Hover, Pressed, Disabled and Focus',
					caption: 'WhatsApp button on the teal ramp.',
					frame: 'Button WhatsApp'
				},
				{
					type: 'gallery',
					layout: 'grid',
					columns: 2,
					items: [
						{
							src: `${dir}/06.text-field-grid.png`,
							alt: 'Text field in six states: default, filled, focus with a 2px ring, error in magenta with an icon, success in green with an icon, and disabled',
							caption: 'Text field: six states, each with its own icon or stroke, not colour alone.',
							frame: 'Text Field'
						},
						{
							src: `${dir}/13.content-cards.png`,
							alt: 'Content cards: one media card with a cover image and three list cards with round tinted icons',
							caption: 'Content card, Media and List types from one production class.',
							frame: 'Example - content cards',
							padded: true
						},
						{
							src: `${dir}/09.alerts.png`,
							alt: 'Inline alerts in four tones, info, success, warning and error, each with its own icon shape and left accent stripe',
							caption: 'Inline alert: four tones, four icon shapes.',
							frame: 'Alert'
						},
						{
							src: `${dir}/10.modal.png`,
							alt: 'Modal dialog on a dark scrim with a title, close button, body text and secondary and primary actions',
							caption: 'Modal: one primary action, paired with a secondary.',
							frame: 'Modal / Dialog'
						}
					]
				},
				{
					type: 'figure',
					src: `${dir}/07.carousel-addon.png`,
					alt: 'Carousel of entertainment add-on cards for Disney+, ViX, Paramount+ and Max, each with a white logo, a short description and an “Actívalo ahora” outline button, with arrows at the edges and pagination dots below',
					caption: 'The carousel pattern with add-on cards.',
					annotation: 'Figma can’t swipe, so the carousel is documented as a pattern: a clipped row of slides plus reusable Nav Arrow and Pagination components, with slide widths and gaps taken from production.',
					frame: 'Carousel (add-on cards)',
					padded: true
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'documentation',
			label: 'Documentation',
			title: 'Every page in English and Spanish',
			blocks: [
				{
					type: 'prose',
					body: [
						'Every documentation page exists in English and Spanish, side by side: the English frame on the left, the Spanish one beside it. The pages cover anatomy, usage, accessibility and the reasoning behind each production change.'
					]
				},
				{
					type: 'gallery',
					layout: 'grid',
					columns: 2,
					items: [
						{
							src: `${dir}/11.getting-started-en.png`,
							alt: 'Getting Started page in English with five numbered rules for using the system',
							caption: 'Getting Started, English.',
							frame: 'Getting Started'
						},
						{
							src: `${dir}/12.getting-started-es.png`,
							alt: 'The same Getting Started page in Spanish, “Primeros pasos”',
							caption: 'Primeros pasos, Spanish.',
							frame: 'Getting Started (ES)'
						}
					]
				},
				{
					type: 'list',
					heading: 'The five Getting Started rules',
					style: 'number',
					items: [
						'Use components, never rebuild them, and don’t detach instances.',
						'Tokens are the only source of truth: no raw hex values or pixel numbers.',
						'Respect the states: Hover, Pressed and Disabled exist for a reason, and disabled controls never take interactions.',
						'Accessibility isn’t optional: check the WCAG page before proposing a new colour pair, and use Medium or Large buttons on mobile.',
						'Extend the system through tokens: bind every fill, stroke, radius, padding and gap, and follow component/element/state naming.'
					]
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'method',
			label: 'How it was built',
			title: 'Directing an AI, and checking its work',
			blocks: [
				{
					type: 'prose',
					body: [
						'Claude Code with the Figma MCP generated and iterated the component layer. I set what it worked from: the foundation of the token architecture, the naming scheme, the component list and the documentation.',
						'Before components were built, I inspected the production Tigo site in detail so each component matched what was already live. The goal was to make the move from design to code easier for the developers: the components they’d see in Figma would behave like the ones they already ship.',
						'I checked the output by reviewing the component variants.'
					]
				},
				{
					type: 'figure',
					src: `${dir}/08.addon-logos-dark.png`,
					alt: 'Six white streaming logos, Disney+, Max, Paramount+, Prime Video, Universal+ and ViX, normalised to the same height on a dark blue background',
					caption: 'Add-on logos, all at 30px height with their natural widths.',
					annotation: 'I fixed the add-on card’s logo layout by hand so wordmarks of different sizes and shapes sit consistently on the card.',
					frame: 'Add-on Logo'
				},
				{
					type: 'callout',
					tone: 'note',
					title: 'Where the tool fell short',
					body: 'It struggled with frames that hold objects of different sizes. Those need a visual review and a manual fix to stay uniform across the system, which is exactly what the add-on logos needed.'
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'limits',
			label: 'Limits',
			title: 'What this file doesn’t cover',
			blocks: [
				{
					type: 'callout',
					tone: 'risk',
					body: 'The system was delivered to the client. I have no data on whether or how it has been adopted, so this page makes no claims about results.'
				},
				{
					type: 'list',
					items: [
						'One colour mode. All ten markets share one token set; there’s no per-market theme or dark mode in this file.',
						'A shared file, not a published Figma library.',
						'The carousel is a static pattern, because Figma can’t swipe; prototyping it means wiring the arrows by hand.',
						'The country selector example lists nine markets; Paraguay is missing.',
						'Small buttons (32px) are below the 44px touch-target guideline and are meant for dense desktop UI only.'
					]
				}
			]
		}
	]
};
