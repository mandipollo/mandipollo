/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				bgMove: {
					"0%": { backgroundPosition: "100% 0%" },
					"100%": { backgroundPosition: "0% 0%" },
				},
			},
			animation: {
				"bg-move": "bgMove 2s ease-in-out forwards",
			},
			backgroundImage: {
				"gradient-to-right": "linear-gradient(to right, gray, yellow)",
			},
		},
	},
	variants: {
		extend: {
			animation: ["hover"],
		},
	},
	plugins: [],
};
