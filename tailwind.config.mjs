/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'home': "url('src/assets/home2.jpg')",
				'policy': "url('src/assets/policy.jpg')"
			}
		},
	},
	plugins: [],
}
