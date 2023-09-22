/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/images/DSC01919.jpeg')",
				hero2: "url('/images/DSC01819.jpeg')",
				hero3: "url('/images/IMG_5802.jpeg')",
				hero4: "url('/images/DSC01750.jpeg')"
			},
			colors: {
				'primary': {
					DEFAULT: '#7465e0',
					50: '#f7fafb',
					100: '#e8f0fc',
					200: '#cfd7fa',
					300: '#abb2f1',
					400: '#8d8ae7',
					500: '#7465e0',
					600: '#6049d1',
					700: '#4836b0',
					800: '#322581',
					900: '#1c1850',
				  },
			},
			gridTemplateColumns: {
				sidebar: "300px auto",
			}, 
			gridTemplateRows: {
				header: "64px auto",
			},
			backgroundColor: ['even'],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
