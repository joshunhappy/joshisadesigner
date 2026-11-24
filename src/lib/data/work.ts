import type { CaseStudy, WorkItem } from '$lib/types';
import { americaVoiceCaseStudy } from './case-studies/america-voice';
import { imagePaths } from '$lib/images';

/** Projects listed here render the long-form case study template. */
const caseStudies: Record<string, CaseStudy> = {
	'america-voice': americaVoiceCaseStudy
};

/** Every image in one project folder, sorted by file name. */
function folderImages(dir: string): string[] {
	// Paths come from the image pipeline's manifest (no glob, so no duplicate build assets).
	return imagePaths.filter((path) => path.startsWith(`/images/work/${dir}/`)).sort();
}

/** Files named `00…` are covers made for listings, not screens of the product. */
const isCover = (src: string) => /\/00[^/]*$/.test(src);

type WorkMeta = Omit<WorkItem, 'images' | 'cover' | 'screens' | 'preview' | 'caseStudy'> & {
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
		slug: 'america-voice-app-and-portal',
		aliases: ['america-voice-app', 'america-voice-reseller-portal'],
		dirs: ['america-voice-app', 'america-voice-reseller-portal'],
		title: 'America Voice App & Reseller Portal',
		category: 'Mobile App & Web App Design',
		year: 2024,
		bgColor: '#EA580C',
		description:
			'I designed both sides of America Voice beyond the website: the mobile app people use to buy top-ups and gift cards, and the portal resellers use to open and run a store.',
		problem: [
			'Two audiences, one marketplace. App users are often sending credit to family abroad and need to finish a purchase in a few taps.',
			'Resellers have the opposite job: set up an account, pass verification, and upload store documents before they can sell. The screens cover both paths.'
		],
		draft: true,
		client: 'America Voice',
		role: 'UX/UI Designer',
		timeline: '2024',
		summary: 'The consumer app and the B2B reseller portal for a top-up and gift card platform.',
		responsibilities: ['UX Flows', 'UI Design', 'Onboarding', 'KYC Flow', 'Dashboard Design', 'Prototyping', 'Handoff'],
		tools: ['Figma', 'Photoshop']
	},
	{
		slug: 'mercury',
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
		slug: 'metis',
		title: 'Metis',
		category: 'Mobile App Design',
		year: 2024,
		bgColor: '#6D28D9',
		description:
			'I led the UX and UI design for Metis, a fintech app built for the Mexican market, designing the onboarding flow, SAT integration screens, and account setup with a strong focus on clarity and trust.',
		problem: [
			'Invoicing in Mexico runs through the SAT, so an invoicing app has to collect tax details before it can do anything useful.',
			'The screens follow that path: sign-up and SAT information first, then clients, products and services, line items, taxes, and a final review.'
		],
		draft: true,
		role: 'Lead UX/UI Designer',
		timeline: '2024',
		summary: 'Fintech mobile app for the Mexican market: onboarding and SAT integration designed for clarity and trust.',
		responsibilities: ['End-to-End UX & UI', 'Onboarding Flow', 'SAT Integration UX', 'Design System'],
		tools: ['Figma', 'Photoshop']
	},
	{
		slug: 'ministerios-ebenezer-mexico',
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
	},
	{
		slug: 'pronto-topup',
		aliases: ['pronto-topup-app'],
		dirs: ['pronto-topup', 'pronto-topup-app'],
		title: 'Pronto Top-up',
		category: 'Web App & Mobile App Design',
		year: 2023,
		bgColor: '#0F766E',
		description:
			'I designed Pronto Top-up on the web and in its mobile app, streamlining carrier selection, product browsing, and checkout for fast mobile recharges.',
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
	}
];

export const work: WorkItem[] = workMeta.map(({ dirs, ...item }) => {
	const perDir = (dirs ?? [item.slug]).map((dir) => folderImages(dir).filter((src) => !isCover(src)));
	const images = (dirs ?? [item.slug]).flatMap(folderImages);
	const covers = images.filter(isCover);
	const screens = perDir.flat();
	// Listing preview: take screens round-robin across folders so a merged project shows both sides.
	const preview: string[] = [];
	for (let i = 0; preview.length < 3 && perDir.some((d) => d[i]); i++) {
		for (const d of perDir) if (d[i] && preview.length < 3) preview.push(d[i]);
	}
	return {
		...item,
		images,
		cover: covers[0] ?? images[0],
		screens,
		preview,
		caseStudy: caseStudies[item.slug]
	};
});

/** Old slugs of merged projects, mapped to where they live now. */
export const workAliases: Record<string, string> = Object.fromEntries(
	work.flatMap((w) => (w.aliases ?? []).map((alias) => [alias, w.slug]))
);
