import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// Keep static files out of the Pages Function. Excluding by folder stays
			// under Cloudflare's 100-rule limit no matter how many images ship.
			routes: {
				include: ['/*'],
				exclude: [
					'<build>',
					'<prerendered>',
					'<redirects>',
					'/images/*',
					'/fonts/*',
					'/icons/*',
					'/favicon.ico',
					'/robots.txt',
					'/sitemap.xml',
					'/josh-de-la-cruz-resume.pdf'
				]
			}
		})
	}
};

export default config;
