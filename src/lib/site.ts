/**
 * Site-wide facts and copy. Kept in one place so a Spanish (/es) version can
 * swap the strings later without touching components.
 */
export const site = {
	name: 'Josh De La Cruz',
	handle: 'Joshisadesigner',
	url: 'https://joshisadesigner.com',
	email: 'joshisadesigner@me.com',
	phone: { display: '+502 5052 8589', href: 'tel:+50250528589' },
	linkedin: 'https://linkedin.com/in/joshisadesigner',
	/** Set to the PDF path (e.g. '/josh-de-la-cruz-resume.pdf') once it exists in /static. */
	resumeUrl: null as string | null
};

export const copy = {
	role: 'UI/UX designer',
	line: 'I design interfaces and build the front end that ships them.',
	availability: 'Open to full-time roles and select freelance work.',
	contactHeading: 'Hiring a designer who builds? Let’s talk.',
	contactBody: 'Email is the fastest way to reach me.',
	emailCta: 'Email me',
	resumeCta: 'Download résumé'
};
