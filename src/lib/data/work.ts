import type { WorkItem } from '$lib/types';

const imageFiles = import.meta.glob('/static/images/work/**/*.{jpg,jpeg,png}');

function getImages(slug: string): string[] {
	return Object.keys(imageFiles)
		.filter(path => path.startsWith(`/static/images/work/${slug}/`))
		.sort()
		.map(path => path.replace('/static/images', '/images'));
}

type WorkMeta = Omit<WorkItem, 'images' | 'cover'>;

const workMeta: WorkMeta[] = [
	{
		slug: 'america-voice',
		title: 'America Voice',
		category: 'UX/UI Design',
		year: 2024,
		bgColor: '#F97316',
		description:
			'I was a key contributor to the redesign and improvement of America Voice\'s digital experience by shaping UX flows, creating UI concepts, and translating business needs into clear design and development tasks.',
		tags: ['Lead UX/UI Designer', 'Prototyping', 'CSS', 'Bootstrap', 'React Components'],
		client: 'America Voice',
		role: 'Lead UX/UI Designer',
		timeline: '2023–2024',
		summary: 'UX/UI redesign for a fintech/top-up platform serving Latino users in the U.S. and Latin America.',
		responsibilities: ['End-to-End UX & UI Design Process', 'Design System', 'HTML', 'Bootstrap'],
		tools: ['Figma', 'Photoshop', 'WebStorm']
	},
	{
		slug: 'america-voice-app',
		title: 'America Voice App',
		category: 'Mobile App Design',
		year: 2024,
		bgColor: '#EA580C',
		description:
			'I designed the mobile experience for the America Voice app, leading the UX and UI for the gift card purchasing flow, onboarding, and checkout — focusing on speed and clarity for everyday users.',
		tags: ['Mobile Design', 'UX Flows', 'Prototyping'],
		client: 'America Voice',
		role: 'UX/UI Designer',
		timeline: '2024',
		summary: 'Mobile app design for a top-up and gift card platform targeting the Latino diaspora.',
		responsibilities: ['UX Flows', 'UI Design', 'Prototyping', 'Handoff'],
		tools: ['Figma', 'Photoshop']
	},
	{
		slug: 'america-voice-reseller-portal',
		title: 'AV Reseller Portal',
		category: 'Web App Design',
		year: 2024,
		bgColor: '#C2410C',
		description:
			'I designed the B2B onboarding experience for America Voice resellers, creating the account setup flow, KYC verification process, and store management dashboard from the ground up.',
		tags: ['B2B Design', 'UX Flows', 'Dashboard', 'Onboarding'],
		client: 'America Voice',
		role: 'UX/UI Designer',
		timeline: '2024',
		summary: 'B2B onboarding and verification portal for America Voice resellers across the U.S.',
		responsibilities: ['UX Flows', 'Dashboard Design', 'Onboarding', 'KYC Flow'],
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
		tags: ['Web Design', 'Branding', 'UI Design'],
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
			'I led the UX and UI design for Metis, a fintech app built for the Mexican market — designing the onboarding flow, SAT integration screens, and account setup with a strong focus on clarity and trust.',
		tags: ['Mobile Design', 'Fintech', 'UX Flows', 'Onboarding'],
		role: 'Lead UX/UI Designer',
		timeline: '2024',
		summary: 'Fintech mobile app for the Mexican market — onboarding and SAT integration designed for clarity and trust.',
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
		tags: ['Web Design', 'CMS', 'Editorial Design'],
		client: 'Ministerios Ebenezer México',
		role: 'UI/UX Designer',
		timeline: '2023',
		summary: 'Website redesign for a large congregation — events, directory, and editorial content structured for scale.',
		responsibilities: ['Web Design', 'Editorial Layout', 'CMS Structure', 'Navigation UX'],
		tools: ['Figma', 'WordPress', 'Illustrator']
	},
	{
		slug: 'pronto-topup',
		title: 'Pronto Top-up',
		category: 'Web App Design',
		year: 2023,
		bgColor: '#0F766E',
		description:
			'I designed the web app experience for Pronto Top-up, streamlining the carrier selection, product browsing, and checkout flows for fast and intuitive mobile recharges.',
		tags: ['Web App', 'UX Design', 'Fintech', 'Top-up'],
		role: 'UX/UI Designer',
		timeline: '2023',
		summary: 'Web app for fast mobile recharges — streamlined carrier selection, product browsing, and checkout.',
		responsibilities: ['UX Flows', 'UI Design', 'Prototyping', 'Dev Handoff'],
		tools: ['Figma', 'Photoshop']
	},
	{
		slug: 'pronto-topup-app',
		title: 'Pronto Top-up App',
		category: 'Mobile App Design',
		year: 2023,
		bgColor: '#115E59',
		description:
			'I designed the mobile app for Pronto Top-up, focusing on a clean home dashboard and a product catalog built for quick, frictionless top-up transactions.',
		tags: ['Mobile Design', 'UX Design', 'Fintech'],
		role: 'UX/UI Designer',
		timeline: '2023',
		summary: 'Mobile app design for quick top-up transactions — home dashboard and product catalog optimized for speed.',
		responsibilities: ['UX Flows', 'UI Design', 'Prototyping'],
		tools: ['Figma', 'Photoshop']
	}
];

export const work: WorkItem[] = workMeta.map(item => {
	const images = getImages(item.slug);
	return { ...item, images, cover: images[0] };
});
