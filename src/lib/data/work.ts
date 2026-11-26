import type { CaseStudy, WorkItem } from '$lib/types';
import { americaVoiceCaseStudy } from './case-studies/america-voice';
import { tigoDesignSystemCaseStudy } from './case-studies/tigo-design-system';
import { imagePaths } from '$lib/images';

/** Projects listed here render the long-form case study template. */
const caseStudies: Record<string, CaseStudy> = {
	'america-voice': americaVoiceCaseStudy,
	'tigo-design-system': tigoDesignSystemCaseStudy
};

/** Every image in one project folder, sorted by file name. */
function folderImages(dir: string): string[] {
	// Paths come from the image pipeline's manifest (no glob, so no duplicate build assets).
	return imagePaths.filter((path) => path.startsWith(`/images/work/${dir}/`)).sort();
}

/**
 * Composite covers made for listings are the `00…png` files; `00…jpg` files are
 * real screens (often the landing page) and stay in the gallery.
 */
const isCover = (src: string) => /\/00[^/]*\.png$/i.test(src);

type WorkMeta = Omit<WorkItem, 'images' | 'cover' | 'screens' | 'listCover' | 'caseStudy'> & {
	/** Image folders under assets/images/work/ (originals). Defaults to [slug]. */
	dirs?: string[];
};

/*
 * DRAFT COPY: `problem` on the screens-only projects was drafted from what the
 * screenshots show (no outcomes, no numbers). Josh: check each one, then delete
 * `draft: true`.
 */
const workMeta: WorkMeta[] = [
	{
		slug: 'america-voice',
		title: 'America Voice',
		category: 'UX/UI Design',
		year: 2026,
		bgColor: '#F97316',
		description:
			'I was a key contributor to the redesign and improvement of America Voice’s digital experience by shaping UX flows, creating UI concepts, and translating business needs into clear design and development tasks.',
		client: 'America Voice',
		role: 'Lead UX/UI Designer',
		timeline: 'Jan – Apr 2026',
		summary: 'UX/UI redesign for a fintech/top-up platform serving Latino users in the U.S. and Latin America.',
		responsibilities: ['End-to-End UX & UI Design Process', 'Design System', 'HTML', 'Bootstrap'],
		tools: ['Figma', 'Photoshop', 'WebStorm']
	},
	{
		// DRAFT: case study copy awaits Josh's approval. Client is an agency partner, not Tigo's in-house team.
		slug: 'tigo-design-system',
		title: 'Tigo Design System',
		category: 'Design System',
		year: 2026,
		bgColor: '#001EB4',
		description:
			'I built a token-driven Figma design system for Tigo’s regional websites and apps across ten Latin American markets, starting from an audit of the live site and fixing its contrast failures, with every page documented in English and Spanish.',
		draft: true,
		client: 'Agency partner for Tigo',
		role: 'Design System Designer',
		timeline: 'Jul 2026',
		summary: 'Design system for Tigo’s regional web and apps: tokens, components, a WCAG audit and bilingual documentation.',
		responsibilities: ['Token Architecture', 'Component Library', 'WCAG Audit', 'Bilingual Documentation'],
		tools: ['Figma', 'Figma Variables', 'Claude Code', 'Figma MCP']
	},
	{
		slug: 'metis',
		title: 'Metis',
		category: 'Mobile App Design',
		year: 2024,
		bgColor: '#6D28D9',
		description:
			'I led the UX and UI design for Metis, a fintech app built for more than one Latin American market, including Mexico and Guatemala, designing the onboarding flow, SAT integration screens, and account setup with a strong focus on clarity and trust.',
		problem: [
			'Invoices have to be valid for the tax authority (the SAT), so the app collects tax details before it does anything else.',
			'The screens follow that path: tax information first, then the home dashboard, choosing who to bill, picking goods or services, adding an item, a new client, and the invoice review.'
		],
		draft: true,
		role: 'Lead UX/UI Designer',
		timeline: '2024',
		summary: 'Invoicing app for Latin American markets such as Mexico and Guatemala: onboarding and SAT integration designed for clarity and trust.',
		responsibilities: ['End-to-End UX & UI', 'Onboarding Flow', 'SAT Integration UX', 'Design System'],
		tools: ['Figma', 'Photoshop']
	},
	{
		slug: 'america-voice-reseller-portal',
		live: [{ label: 'Visit portal.americavoice.com', href: 'https://portal.americavoice.com/' }],
		title: 'AV Reseller Portal',
		category: 'Web App Design',
		year: 2024,
		bgColor: '#C2410C',
		description:
			'I designed the B2B onboarding experience for America Voice resellers, creating the account setup flow, KYC verification process, and store management dashboard from the ground up.',
		problem: [
			'Before a reseller can sell, they have to set up an account, pass verification, and upload store documents.',
			'The screens follow that path, from account setup and verification to pending review and document upload.'
		],
		draft: true,
		client: 'America Voice',
		role: 'UX/UI Designer',
		timeline: '2024',
		summary: 'B2B onboarding and verification portal for America Voice resellers across the U.S.',
		responsibilities: ['UX Flows', 'Dashboard Design', 'Onboarding', 'KYC Flow'],
		tools: ['Figma', 'Photoshop']
	},
	{
		slug: 'pronto-topup',
		live: [{ label: 'Get the app on Google Play', href: 'https://play.google.com/store/apps/details?id=com.prontotopup&hl=en' }],
		aliases: ['pronto-topup-app'],
		dirs: ['pronto-topup', 'pronto-topup-app'],
		title: 'Pronto Topup',
		category: 'Web App & Mobile App Design',
		year: 2023,
		bgColor: '#0F766E',
		description:
			'I designed Pronto Topup on the web and in its mobile app, streamlining carrier selection, product browsing, and checkout for fast mobile recharges.',
		problem: [
			'A recharge is a small purchase people want over in seconds, on whichever device is at hand.',
			'The screens cover the whole run on web and app: phone number, carrier, top-ups, packages or internet, card review, and the receipt, plus the dashboard, history and settings around it.'
		],
		draft: true,
		role: 'UX/UI Designer',
		timeline: '2023',
		summary: 'Web and mobile app for fast mobile recharges: carrier selection, product browsing, and checkout.',
		responsibilities: ['UX Flows', 'UI Design', 'Prototyping', 'Dev Handoff'],
		tools: ['Figma', 'Photoshop']
	},
	{
		slug: 'swiftly-push',
		live: [{ label: 'Visit swiftlypush.secureip.io', href: 'https://swiftlypush.secureip.io/' }],
		title: 'Swiftly Push',
		category: 'Web App Design',
		year: 2025,
		bgColor: '#0f3b36',
		description:
			'I led the UX/UI design for Swiftly Push, a web console where companies send push notifications to the people who use their apps, from the public site and sign-up to app setup and audience management.',
		problem: [
			'Companies with a mobile app need to reach their users with timely notifications without asking developers for every message.',
			'The screens follow a company from the public site and pricing to sign-up, then through creating an app in four steps (details, Firebase configuration, target, done) and managing its users, topics and customers.'
		],
		draft: true,
		role: 'Lead UX/UI Designer',
		timeline: '2025',
		summary: 'Web console for push notifications: public site, onboarding, app setup and audience management.',
		responsibilities: ['UX Flows', 'UI Design', 'Design System', 'Dev Handoff'],
		tools: ['Figma']
	},
	{
		slug: 'america-voice-app',
		live: [{ label: 'View on the App Store', href: 'https://apps.apple.com/us/app/america-voice/id1440824615' }],
		title: 'America Voice App',
		category: 'Mobile App Design',
		year: 2024,
		bgColor: '#EA580C',
		description:
			'I designed the mobile experience for the America Voice app, leading the UX and UI for the gift card purchasing flow, onboarding, and checkout, focusing on speed and clarity for everyday users.',
		problem: [
			'App users are often sending credit to family abroad, usually from a phone and often in a hurry.',
			'The purchase has to finish in a few taps. The screens follow both purchases, a top-up and a gift card, from the home screen to the confirmation, plus the cart and activity history.'
		],
		draft: true,
		client: 'America Voice',
		role: 'UX/UI Designer',
		timeline: '2024',
		summary: 'Mobile app design for a top-up and gift card platform targeting the Latino diaspora.',
		responsibilities: ['UX Flows', 'UI Design', 'Prototyping', 'Handoff'],
		tools: ['Figma', 'Photoshop']
	},
	{
		slug: 'mercury',
		live: [{ label: 'Visit mercuryintl.com', href: 'https://mercuryintl.com/' }],
		title: 'Mercury',
		category: 'Web Design',
		year: 2024,
		bgColor: '#1E3A5F',
		description:
			'I led the brand and web design for Mercury, crafting a clean single-page experience that puts product clarity and service communication at the center.',
		problem: [
			'An IT infrastructure provider with a dense catalogue: hosting, backup, recovery, data-center services and server hardware.',
			'The site has to make that technical range readable to a buyer on one page, with a product page for the hardware.'
		],
		draft: true,
		role: 'UI/UX Designer',
		timeline: '2024',
		summary: 'Brand and web design for a single-page product experience focused on clarity and conversion.',
		responsibilities: ['Brand Identity', 'UI Design', 'Responsive Layout'],
		tools: ['Figma', 'Illustrator']
	},
	{
		slug: 'ministerios-ebenezer-mexico',
		live: [{ label: 'Visit ministeriosebenezer.mx', href: 'https://ministeriosebenezer.mx/' }],
		title: 'Ministerios Ebenezer',
		category: 'Web Design',
		year: 2023,
		bgColor: '#B45309',
		description:
			'I redesigned the digital experience for Ministerios Ebenezer México, structuring event listings, a church directory, and editorial content to serve a large and active congregation.',
		problem: [
			'A large congregation publishes three different kinds of content: events, a directory of churches, and editorial posts.',
			'The site has to give each its own place without burying the others; the screens show the landing page, events, a post, the directory, and the menu that ties them together.'
		],
		draft: true,
		client: 'Ministerios Ebenezer México',
		role: 'UI/UX Designer',
		timeline: '2023',
		summary: 'Website redesign for a large congregation: events, directory, and editorial content structured for scale.',
		responsibilities: ['Web Design', 'Editorial Layout', 'CMS Structure', 'Navigation UX'],
		tools: ['Figma', 'WordPress', 'Illustrator']
	}
];

/** The composed listing cover, when one exists in assets/images/covers/. */
const listCoverOf = (slug: string) =>
	imagePaths.includes(`/images/covers/${slug}.jpg`) ? `/images/covers/${slug}.jpg` : undefined;

export const work: WorkItem[] = workMeta.map(({ dirs, ...item }) => {
	const images = (dirs ?? [item.slug]).flatMap(folderImages);
	const covers = images.filter(isCover);
	const screens = images.filter((src) => !isCover(src));
	return {
		...item,
		images,
		cover: covers[0] ?? images[0] ?? listCoverOf(item.slug) ?? '',
		listCover: listCoverOf(item.slug),
		screens,
		caseStudy: caseStudies[item.slug]
	};
});

/** Old slugs of merged projects, mapped to where they live now. */
export const workAliases: Record<string, string> = Object.fromEntries(
	work.flatMap((w) => (w.aliases ?? []).map((alias) => [alias, w.slug]))
);
