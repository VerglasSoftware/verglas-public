/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"ic-blue": "#00E8FF",
				"ic-pink": "#FF00F7",
				"ic-purple": "#9255ff",
			},
			backgroundColor: ['even'],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
