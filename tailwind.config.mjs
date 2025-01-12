/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				breathe: {
					'0%': { transform: 'scale(1)' },
				   '50%': { transform: 'scale(1.25)' },
				   '100%': { transform: 'scale(1)' },

				}
			},
			animation: {
                breathe: 'breathe 4s ease-in-out infinite',
            },
		},
	},
	plugins: [],
}
