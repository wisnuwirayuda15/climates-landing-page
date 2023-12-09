/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			inter: ['Inter', 'sans-serif']
		}
	},
	plugins: [require('daisyui'), require('tailwind-scrollbar')({ nocompatible: true })],

	daisyui: {
		themes: [
			{
				climate: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#4D6C40',
					'primary-content': '#DBE2D9',
					secondary: '#BCD7EA',
					'secondary-content': '#F2F7FB',
					accent: '#F1832C',
					'accent-content': '#FCE6D5',
					'base-100': '#FFFFFF',
					'base-200': '#D0D0D0',
					'base-300': '#B1B1B1',
					'base-content': '#040404',

					'--rounded-box': '0.5rem',
					'--rounded-btn': '0.25rem',
					'--rounded-badge': '1rem',
					'--animation-btn': '0.25s',
					'--animation-input': '0.2s',
					'--btn-focus-scale': '0.95',
					'--border-btn': '1px',
					'--tab-border': '1px',
					'--tab-radius': '0.5rem'
				}
			},
			'forest'
		]
	}
};

// climate: {
//   primary: '#4D6C40',
//   'primary-surface': '#DBE2D9',
//   'primary-border': '#C4CEBF',
//   'primary-hover': '#405A35',
//   'primary-pressed': '#263620',
//   'primary-focus': '#4D6C40',
//   'base-100': '#FFFFFF',
//   'base-200': '#C4CEBF',
//   'base-300': '#A6B59F',
//   'base-content': '#1A2415',
// }
