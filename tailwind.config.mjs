/** @type {import('tailwindcss').Config} */
import {resolve} from 'path';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'home': resolve('src/assets/home2.jpg'),
				'policy': resolve('src/assets/policy.jpg')
			}
		},
	},
	plugins: [],
}
