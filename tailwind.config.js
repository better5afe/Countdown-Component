/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
		extend: {
			colors: {
				grayishBlue: 'hsl(237, 18%, 59%)',
				softRed: 'hsl(345, 95%, 68%)',
				darkDesBlue: 'hsl(236, 21%, 26%)',
				darkBlue: 'hsl(235, 16%, 14%)',
				varyDarkBlue: 'hsl(234, 17%, 12%)',
			},
		},
	},
	plugins: [],
};
