const config = {
	mode: 'jit',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	// @ts-ignore
	plugins: [require('flowbite/plugin'), require('flowbite-typography')],

	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				},
				'c-cyan': '#9bfaff',
				'c-blue': '#1e90ff'
			}
		}
	}
};

module.exports = config;
