import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter({
			fallback: 'index.html',
			precompress: false
		}),
		prerender: {
			entries: [],
		},
		alias: {
			$components: './src/components',
			$stores: './src/stores',
			$assets: './src/assets'
		}
	}
};

export default config;
