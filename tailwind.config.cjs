/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundImage: {
        'tienglong-web': "url('/tienglong-web.jpg')",
      }
    },
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
