import adapter from '@sveltejs/adapter-vercel';
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
		alias: {
			$components: './src/components',
			$stores: './src/stores',
			$assets: './src/assets',
			$graphql: './src/graphql'
		}
	}
};

export default config;
