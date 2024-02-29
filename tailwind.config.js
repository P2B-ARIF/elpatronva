/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				soilColor: "var(--soil)",
				lightYellow: "var(--lightYellow)",
				blackColor: "var(--blackColor)",
				whiteColor: "var(--whiteColor)",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				oswald: ["Oswald", "sans-serif"],
				
			},
		},
	},
	plugins: [],
};
