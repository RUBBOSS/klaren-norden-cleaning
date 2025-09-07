/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			fontFamily: {
				'bodoni': ['Bodoni Moda', 'serif'],
				'sans': ['Bodoni Moda', 'serif'],
			},
		},
	},
	plugins: [],
};
