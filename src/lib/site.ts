/**
 * Site-wide facts and copy. Kept in one place so a Spanish (/es) version can
 * swap the strings later without touching components.
 */
export const site = {
	name: 'Josh De La Cruz',
	legalName: 'Josue De La Cruz',
	handle: 'Joshisadesigner',
	url: 'https://joshisadesigner.com',
	email: 'joshisadesigner@me.com',
	phone: { display: '+502 5052-8589', href: 'tel:+50250528589' },
	linkedin: { display: '@joshisadesigner', href: 'https://linkedin.com/in/joshisadesigner' },
	/** Set to the PDF path (e.g. '/josh-de-la-cruz-resume.pdf') once it exists in /static. */
	resumeUrl: null as string | null
};

export const copy = {
	role: 'UI/UX Designer',
	line: 'I design interfaces and build the front-end that ships them.',
	availability: 'Open for work',
	contactHeading: ['Hiring a designer', 'who builds? Let’s talk.'],
	contactCta: 'Contact Me',
	resumeCta: 'Download résumé',
	aboutLede: 'I design digital products that feel clear, useful, and ready for real people.'
};
