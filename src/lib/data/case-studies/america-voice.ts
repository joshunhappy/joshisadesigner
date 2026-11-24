import type { CaseStudy } from '$lib/types';

const img = (file: string) => `/images/work/america-voice/${file}`;

/** Composites made for the case study, kept out of the work/ gallery glob. */
const caseImg = (file: string) => `/images/case-studies/america-voice/${file}`;

/**
 * America Voice, Version 2 web platform.
 *
 * Screens and flow names below map to the `america-voice.v2` Figma file
 * (desktop page). Frame tags are kept on each figure so the file and the
 * case study stay in sync.
 *
 * TODO(josh): two things only you can supply. Everything else is drawn
 * from the artifacts themselves:
 *   1. `problem` section: check the description of Version 1 matches what you
 *      remember. It is written from structure, not from analytics, because
 *      there are no numbers for this project. Keep it qualitative; do not
 *      add figures you cannot source.
 *   2. Version 1 screenshots for the compare block in `problem`, plus exports
 *      of the payment-method state variants (`methods-topup / *`) for the
 *      `states` section. The `components` page is now in `system`.
 */
export const americaVoiceCaseStudy: CaseStudy = {
	lede: 'A remittance-adjacent top-up platform where a failed transaction is someone’s family not getting minutes. Version 2 rebuilt the buying flow around two things: knowing what you are about to pay, and never losing your place.',

	hero: {
		src: '/images/case-studies/america-voice/hero.png',
		alt: 'The America Voice landing page shown at desktop width in a browser window and at mobile width on a phone'
	},

	facts: [
		{ label: 'Role', value: 'Lead UX/UI Designer' },
		{ label: 'Timeline', value: 'Jan – Apr 2026' },
		{ label: 'Client', value: 'America Voice' },
		{ label: 'Scope', value: 'End-to-end UX, UI, design system, front-end handoff' },
		{ label: 'Constraints', value: 'Bootstrap grid, existing React component library' },
		{ label: 'Tools', value: 'Figma, Photoshop, WebStorm' }
	],

	sections: [
		/* ------------------------------------------------------------------ */
		{
			id: 'overview',
			label: 'Overview',
			title: 'Sending minutes home',
			blocks: [
				{
					type: 'prose',
					lead: true,
					body: [
						'America Voice sells mobile top-ups and gift cards to people in the United States sending value to family in Latin America. The buyer and the beneficiary are almost never the same person. You are topping up someone else’s phone, in another country, on a carrier you may not use yourself.'
					]
				},
				{
					type: 'prose',
					body: [
						'That single fact shapes every screen. The product has to carry four pieces of state (country, phone number, carrier, product) across a multi-step purchase, and prove at every step that the money is going to the right place. Get one digit wrong and the credit lands on a stranger’s phone, with no undo.',
						'Version 2 was a full redesign of the web platform: the marketing landing page, the top-up purchase flow, a parallel gift-card flow, payment, and receipts, plus the component library the front-end team built against.'
					]
				},
				{
					type: 'figure',
					src: img('01.jpg'),
					alt: 'America Voice landing page with a country selector in the hero',
					frame: '00-landing',
					device: 'desktop',
					caption: 'The landing page opens with the first question of the flow, not a marketing CTA.',
					annotation:
						'The hero input is the actual first step of the purchase, not a link to it. Selecting a country here is the same interaction the user would hit on the next page, so the flow starts before the user has committed to entering it.'
				},
				{
					type: 'figure',
					src: img('00.jpg'),
					alt: 'Full America Voice landing page, long scroll',
					frame: '00-landing (full)',
					device: 'desktop',
					caption:
						'Full landing page: carrier logos as trust proof, plain-language explainer, a phone-support callout, then app download.',
					annotation:
						'Carrier logos sit directly under the hero because they answer the first objection, "do you even support my mother’s carrier?", before any brand copy gets a chance to.'
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'problem',
			label: 'Problem',
			title: 'What Version 1 was costing',
			blocks: [
				{
					type: 'prose',
					body: [
						// TODO(josh): sanity-check this against what you remember of Version 1.
						// It is deliberately structural: what the old flow did wrong,
						// observable from the interface itself, because there are no
						// analytics behind this project. Do not add numbers here.
						'Version 1 asked for the same information more than once, hid the total until the payment step, and treated the gift-card purchase as a separate product with its own navigation. Users who started a top-up and wanted to check a price had to restart.',
						'The redesign brief was commercial (increase completed purchases), but the failures were structural: state that did not persist between steps, a total that appeared too late to be trusted, and two product lines that shared a customer but not a flow.'
					]
				},
				{
					type: 'list',
					heading: 'What I set out to fix',
					style: 'number',
					items: [
						'Carry country, number, carrier and product forward visibly, and let any of them be corrected without losing the rest.',
						'Show the fee before the payment step, not inside it.',
						'Make top-ups and gift cards one flow with one checkout, not two products.',
						'Design every payment state, not just the happy path, so the front-end team had nothing to invent.'
					]
				},
				{
					type: 'callout',
					tone: 'constraint',
					title: 'Working inside the build',
					body:
						'The front end was Bootstrap with an existing React component library and no appetite for a rewrite. Anything I designed had to land on a 12-column grid and reuse components that already existed, so the redesign had to buy its improvements through structure and hierarchy rather than new UI primitives.'
				}
				// TODO(josh): add a `compare` block here once Version 1 screenshots are found:
				// {
				// 	type: 'compare',
				// 	heading: 'Order review, before and after',
				// 	before: { src: img('v1-review.jpg'), alt: '...', caption: 'Version 1, total revealed only after card entry' },
				// 	after: { src: img('09.jpg'), alt: '...', caption: 'Version 2, subtotal, fee and total before payment' }
				// }
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'flow',
			label: 'Flow',
			title: 'One flow, two tracks',
			blocks: [
				{
					type: 'prose',
					body: [
						'Top-ups and gift cards need different middles and identical ends. Both start with a country and a recipient number; both finish with payment and a receipt. Only the product-selection step genuinely differs: a carrier and a denomination versus a brand catalogue.',
						'So the flow forks late and rejoins early, and the two tracks share the payment and receipt screens rather than duplicating them.'
					]
				},
				{
					type: 'flow',
					heading: 'Purchase flow',
					steps: [
						{ label: 'Landing', detail: 'Select country', track: 'Shared' },
						{ label: 'Recipient', detail: 'Phone number + country persisted', track: 'Shared', branch: true },
						{ label: 'Carrier', detail: 'Claro / Tigo, filtered by country', track: 'Top-up' },
						{ label: 'Product', detail: 'Top-ups / Packages tabs, local currency shown', track: 'Top-up' },
						{ label: 'Catalogue', detail: 'Gift-card brands by country', track: 'Gift card' },
						{ label: 'Denomination', detail: 'Face value + phone input', track: 'Gift card' },
						{ label: 'Review', detail: 'Subtotal, fee, total, each editable', track: 'Shared', branch: true },
						{ label: 'Payment', detail: 'Saved + new methods, one component', track: 'Shared' },
						{ label: 'Receipt', detail: 'Order ID, cross-sell to the other track', track: 'Shared' }
					],
					caption:
						'The fork lasts two steps. Everything before and after is one set of screens serving both products.'
				},
				{
					type: 'figure',
					src: img('05.jpg'),
					alt: 'Provider selection screen showing Claro and Tigo, with the country and number summarised above',
					frame: '01-carrier-options',
					device: 'desktop',
					caption: 'Carrier selection, with the recipient summary pinned above the choice.',
					annotation:
						'Country and number appear as a summary card with inline Edit on each row. This is the component that solves the Version 1 restart problem. It rides along for the rest of the flow and every field stays correctable in place.'
				},
				{
					type: 'figure',
					src: img('07.jpg'),
					alt: 'Product list with Top-ups and Packages tabs, promotional banners, and denominations in USD with local currency approximations',
					frame: '02-products.top-ups',
					device: 'desktop',
					caption: 'Product selection: tabs for Top-ups and Packages, denominations priced in both currencies.',
					annotation:
						'Each amount shows USD with an approximate local value (≈ GTQ 234). The buyer pays in dollars but thinks in the recipient’s currency, so showing both is what makes a $30 top-up legible as a useful amount rather than an arbitrary one.'
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'decisions',
			label: 'Decisions',
			title: 'Four decisions worth defending',
			blocks: [
				{
					type: 'decision',
					title: 'Carrier gets its own step',
					problem:
						'Carrier could have been a dropdown on the landing page, collapsing the flow by one screen. Fewer steps is usually the right instinct.',
					options: [
						{ label: 'Carrier dropdown in the hero', note: 'One step shorter, but the list is country-dependent' },
						{ label: 'Auto-detect carrier from the number prefix', note: 'Unreliable across LATAM portability' },
						{ label: 'Dedicated carrier step', chosen: true }
					],
					rationale:
						'Carrier availability depends on the country, and picking the wrong carrier is an unrecoverable error: the credit is gone. A dedicated step lets the carriers render as large, logo-led targets with the recipient summary directly above them, so the choice is made with the number in view.',
					tradeoff:
						'One more screen in the funnel. I accepted it because the failure it prevents is uncorrectable, and because the step is a single click with no typing.'
				},
				{
					type: 'decision',
					title: 'Fee shown before payment, not inside it',
					problem:
						'Exposing a transaction fee one step earlier gives the user a clean place to abandon. The commercial instinct is to defer it.',
					options: [
						{ label: 'Total only at payment', note: 'Higher step-completion, higher abandonment at card entry' },
						{ label: 'Fee in the footer as fine print' },
						{ label: 'Itemised subtotal / fee / total on review', chosen: true }
					],
					rationale:
						'This audience is sending money to family and comparing against services that hide margins in the exchange rate. Trust compounds across repeat purchases more than any single conversion does. The review screen breaks out subtotal, transaction fee and total, with a note that fees can vary by carrier and country.',
					tradeoff:
						'Some users leave at review who would otherwise have left at payment. That is a real cost, and the honest version of this case study is that it should have been A/B tested rather than argued.'
				},
				{
					type: 'decision',
					title: 'Saved and new payment methods in one list',
					problem:
						'Returning users have saved cards; new users do not. The usual pattern is a saved-methods block with an "add new" affordance below it, which buries new-card entry for first-timers.',
					options: [
						{ label: 'Saved methods first, "add new" below' },
						{ label: 'Separate tabs for saved and new' },
						{ label: 'One radio list, new card first, more methods disclosed', chosen: true }
					],
					rationale:
						'A single radio group treats every method the same: New Credit Card, PayPal, saved Visa, saved PayPal account. New card sits first because first purchases matter most, and the less common methods hide behind "Show more payment methods" so the default list stays at four rows on one screen.',
					tradeoff:
						'Returning users scroll past a new-card row they will never use. Cheap, and it keeps one component serving both audiences instead of two.'
				},
				{
					type: 'decision',
					title: 'The gift-card flow asks for the phone number later',
					problem:
						'The top-up flow needs the recipient’s number early, because it determines carrier availability. The gift-card flow does not need it at all until delivery.',
					options: [
						{ label: 'Identical field order for both tracks', note: 'Consistent, but asks for data with no purpose yet' },
						{ label: 'Number after brand and denomination', chosen: true }
					],
					rationale:
						'Asking for a phone number before showing anything of value is a cost with no return. In the gift-card track the catalogue is the hook, so brand and denomination come first and the number is collected at the point where it is obviously the delivery address.',
					tradeoff:
						'The two tracks diverge in field order, which makes the shared components slightly harder to reason about. Documented in the handoff so the front end did not try to unify them.'
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'states',
			label: 'States',
			title: 'The screens nobody asks to see',
			blocks: [
				{
					type: 'prose',
					body: [
						'The payment step is where a flow either survives or falls apart, and it is the step most often delivered as a single happy-path mockup. I designed it as a state machine instead: default, expanded, saved card selected, PayPal selected, new card selected, new card filled. Every one of those exists for both tracks, so the front end never had to guess what a selection looked like.',
						'The pay button stays disabled and unmistakably inert until a method is selected. Its label carries the amount, "Pay 31.99 USD", so the last thing you read before committing is the number you agreed to.'
					]
				},
				{
					type: 'figure',
					src: caseImg('payment-responsive.png'),
					alt: 'Payment method selection at desktop and mobile width: new credit card, PayPal, saved Visa and saved PayPal account, with a disabled pay button',
					frame: '04-methods-topup.default',
					device: 'desktop',
					plain: true,
					caption:
						'Payment, default state at both widths: order summary above, four methods, disabled Pay.',
					annotation:
						'The order summary is three rows (country, number, product) each with its own Edit. By this screen the user has made four decisions and can still revise any of them without re-entering the others. The narrow layout keeps all three rows and swaps the Edit labels for pencil icons rather than dropping the affordance.'
				},
				{
					type: 'figure',
					src: img('15.jpg'),
					alt: 'Gift card payment method screen using the same component as the top-up flow',
					frame: 'methods-gift-card / default',
					device: 'desktop',
					caption: 'The same payment component serving the gift-card track.',
					annotation:
						'Identical structure, different summary contents. Building this as one component with a variable summary is what let the gift-card track ship without a second checkout.'
				}
				// TODO(josh): export the five state variants from Figma
				// (`methods-topup / more-shown`, `saved-card-selected`, `paypal-selected`,
				// `new-card-selected`, `new-card-filled`) and replace the two figures
				// above with a gallery. This is the block hiring managers read hardest:
				// {
				// 	type: 'gallery',
				// 	heading: 'Payment states',
				// 	layout: 'grid',
				// 	columns: 3,
				// 	items: [ ... ],
				// 	caption: 'Every state the payment step can be in, designed rather than inferred.'
				// }
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'trust',
			label: 'Trust',
			title: 'Making the money legible',
			blocks: [
				{
					type: 'prose',
					body: [
						'Everything in the purchase that touches money is written out in full. The review screen itemises subtotal, transaction fee and total, and states in plain language that fees can change based on the carrier or country. Promotions render as distinct banners tied to the product they apply to, so a bonus-credit offer cannot be mistaken for a discount on the price.'
					]
				},
				{
					type: 'figure',
					src: img('09.jpg'),
					alt: 'Order review screen with itemised subtotal, transaction fee and total, and a continue to payment button',
					frame: '03-products.top-ups (review)',
					device: 'desktop',
					caption: 'Review: the full cost, one step before any payment details are requested.',
					annotation:
						'The product row repeats the local-currency approximation from the selection step. Same number, same phrasing, both places, so the review screen confirms rather than re-states.'
				},
				{
					type: 'figure',
					src: img('13.jpg'),
					alt: 'Top-up receipt showing order ID, timestamp, carrier, promotions, itemised totals and a send another top-up button',
					frame: '05-receipt-topup',
					device: 'desktop',
					caption: 'Receipt: order ID and timestamp first, then the same summary the user approved.',
					annotation:
						'Order ID and date lead because the receipt’s real job is support. When someone calls to say the credit did not arrive, the first question is the order number, so it is the first thing on the screen and the first thing in the email.'
				},
				{
					type: 'figure',
					src: img('17.jpg'),
					alt: 'Gift card receipt with two follow-up actions: send another top-up, or send a gift card',
					frame: '06-receipt-gift-card',
					device: 'desktop',
					caption: 'The gift-card receipt offers both tracks as follow-up actions.',
					annotation:
						'The receipt is the only place the two product lines are deliberately cross-sold. A user who just discovered gift cards is the best possible audience for top-ups, and vice versa, so the completed state is where the other track gets introduced.'
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'responsive',
			label: 'Responsive',
			title: 'Mobile is the same flow, not a smaller one',
			blocks: [
				{
					type: 'prose',
					body: [
						'Every screen in the flow was designed at 1440 and 402 before handoff. The structure does not change between them: the summary card, the edit affordances, the itemised total and the payment states all survive the narrow layout. What changes is that the vertical rhythm tightens and the carrier and brand targets go full width.'
					]
				},
				{
					type: 'figure',
					src: caseImg('landing-responsive.png'),
					alt: 'The landing page with a country selected at desktop and mobile width, showing the phone input and the gift card catalogue for that country',
					frame: 'landing/selected.country.vc',
					device: 'desktop',
					plain: true,
					caption:
						'Landing with a country selected, at both widths. The hero input becomes a phone field and the gift-card catalogue for that country appears in the same scroll.',
					annotation:
						'The catalogue is the clearest test of the narrow layout: six brand tiles per row at 1440, two at 402, with the country selector lifted out of the sentence onto its own line so the tap target is full width.'
				},
				{
					type: 'figure',
					src: caseImg('payment-responsive.png'),
					alt: 'Payment method selection at desktop and mobile width, with the same four methods and a disabled pay button',
					frame: '04-methods-topup.default',
					device: 'desktop',
					plain: true,
					caption: 'Four methods, one summary, one disabled Pay button, at both widths.'
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'system',
			label: 'System',
			title: 'What the front end actually received',
			blocks: [
				{
					type: 'prose',
					body: [
						'The Figma file carries a second page of components, built to match what the React library could already render: colour ramps, form controls, inputs, logos, icons, store badges, the full button matrix, and the UI components the purchase flow is assembled from.',
						'Because the build was Bootstrap on a 12-column grid, the components were drawn to that grid rather than to a bespoke spacing scale. That constraint made handoff close to mechanical: a developer could name the column span for any element on any screen without asking me.'
					]
				},
				{
					type: 'figure',
					src: caseImg('design-system.png'),
					alt: 'The America Voice component page in Figma: colour ramps, form controls, inputs, logos, icons, store badges, a large matrix of button variants, and the UI components used across the purchase flow',
					frame: 'components',
					device: 'desktop',
					plain: true,
					caption:
						'The component page: colour ramps, controls, inputs, logos, icons, store badges, the button matrix, and the UI components the flow is built from.',
					annotation:
						'The button matrix is the part that carried the most weight in handoff. Every colour in the palette is drawn at every state a developer could hit, which is why the payment step could ship with a disabled Pay button that looks deliberately inert rather than broken. The colour ramps are numbered rather than named after their use, so the same orange can serve a promo banner and a primary action without either one owning it.'
				},
				{
					type: 'list',
					heading: 'Handoff artefacts',
					style: 'bullet',
					items: [
						'Component page with variants for every interactive state.',
						'Named frames per flow step, numbered 00–06, matching the ticket breakdown.',
						'State variants for the payment step, so "what does it look like when PayPal is selected" was never a question.',
						'Desktop and mobile frames for every step, shipped together rather than as a follow-up.'
					]
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'measurement',
			label: 'Measurement',
			title: 'What I did not measure',
			blocks: [
				{
					type: 'prose',
					body: [
						'I have no post-launch numbers for this project. There was no funnel instrumentation I could report from, so rather than dress up a proxy figure as a result, here is what the redesign was actually betting on, and what would have proved or killed each bet.'
					]
				},
				{
					type: 'list',
					heading: 'The bets, and the metric that settles each one',
					style: 'bullet',
					items: [
						'Fee transparency wins more than it costs. Settled by: review → payment completion, against the Version 1 rate at the equivalent step. If completion drops and repeat purchase does not rise within a quarter, the decision was wrong.',
						'The persistent recipient summary prevents restarts. Settled by: edit-affordance usage. Heavy use justifies the component; zero use means the earlier steps are already right and the summary can shrink to a single line.',
						'New card belongs above saved methods. Settled by: share of purchases on a saved method. If most buyers are returning, the order should flip.',
						'Four default payment methods are the right four. Settled by: "Show more payment methods" open rate. A high rate means the defaults are wrong for this audience.',
						'The receipt is the right place to introduce the other product line. Settled by: cross-sell click-through between the top-up and gift-card tracks.'
					]
				},
				{
					type: 'callout',
					tone: 'note',
					title: 'Why this section exists',
					body:
						'A case study without numbers is worth more than a case study with invented ones. What I can show is the reasoning, the artefacts, and the tests I would run, and that reasoning is what carries over to the next product.'
				}
			]
		},

		/* ------------------------------------------------------------------ */
		{
			id: 'reflection',
			label: 'Reflection',
			title: 'What I would do differently',
			blocks: [
				{
					type: 'list',
					style: 'number',
					items: [
						'Test the fee-transparency decision rather than argue it. It was the most consequential call in the project and the only one I defended entirely on principle.',
						'Design the error states with the same rigour as the payment states. Declined cards, an unavailable carrier, an invalid number for the selected country. The state machine stops at success.',
						'Pin the recipient summary on mobile. It scrolls away at the exact moment the user is deciding whether the number is right.',
						'Localise the flow properly. The interface ships English and Spanish, but the review and receipt screens were laid out for English string lengths first.'
					]
				}
			]
		}
	]
};
