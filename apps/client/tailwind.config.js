import plugin from "tailwindcss/plugin";
const themeSwapper = require("tailwindcss-theme-swapper");

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./index.html"],
	theme: {
		extend: {},
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(({ addVariant }) => {
			addVariant("hocus", ["&:hover", "&:focus-visible", "&:active"]);
		}),
		themeSwapper({
			themes: [
				{
					name: "base",
					selectors: [":root"],
					theme: {
						borderRadius: {
							lg: "0.5rem",
							md: "calc(0.5rem - 2px)",
							sm: "calc(0.5rem - 4px)",
						},
						colors: {
							attention: "hsl(11 91% 35%)",
							background: "hsl(239 11% 95%)",
							foreground: "hsl(239 5% 10%)",
							card: {
								DEFAULT: "hsl(239 11% 90%)",
								foreground: "hsl(239 5% 15%)",
							},
							popover: {
								DEFAULT: "hsl(239 11% 95%)",
								foreground: "hsl(239 95% 10%)",
							},
							primary: {
								DEFAULT: "hsl(239 82% 56%)",
								foreground: "hsl(0 0% 100%)",
							},
							secondary: {
								DEFAULT: "hsl(239 11% 85%)",
								foreground: "hsl(0 0% 0%)",
							},
							muted: {
								DEFAULT: "hsl(201 11% 85%)",
								foreground: "hsl(239 5% 40%)",
							},
							accent: {
								DEFAULT: "hsl(211 12% 48%)",
								foreground: "hsl(239 5% 15%)",
							},
							destructive: {
								DEFAULT: "hsl(0 50% 50%)",
								foreground: "hsl(239 5% 90%)",
							},
							border: "hsl(239 20% 50%)",
							input: "hsl(239 20% 50%)",
							ring: "hsl(239 82% 56%)",
							chart: {
								1: "hsl(12 76% 61%)",
								2: "hsl(173 58% 39%)",
								3: "hsl(197 37% 24%)",
								4: "hsl(43 74% 66%)",
								5: "hsl(27 87% 67%)",
							},
						},
					},
				},
				{
					name: "dark",
					selectors: [".dark"],
					theme: {
						colors: {
							attention: "hsl(50 98% 64%)",
							background: "hsl(239 11% 10%)",
							foreground: "hsl(239 5% 90%)",
							card: {
								DEFAULT: "hsl(239 11% 85%)",
								foreground: "hsl(239 5% 90%)",
							},
							popover: {
								DEFAULT: "hsl(239 11% 5%)",
								foreground: "hsl(239 5% 90%)",
							},
							primary: {
								DEFAULT: "hsl(239 82% 56%)",
								foreground: "hsl(0 0% 100%)",
							},
							secondary: {
								DEFAULT: "hsl(239 11% 20%)",
								foreground: "hsl(0 0% 100%)",
							},
							muted: {
								DEFAULT: "hsl(201 11% 25%)",
								foreground: "hsl(239 5% 65%)",
							},
							accent: {
								DEFAULT: "hsl(240, 3%, 94%)",
								foreground: "hsl(239 5% 90%)",
							},
							destructive: {
								DEFAULT: "hsl(0 50% 50%)",
								foreground: "hsl(239 5% 90%)",
							},
							border: "hsl(239 20% 50%)",
							input: "hsl(239 20% 50%)",
							ring: "hsl(239 82% 56%)",
							chart: {
								1: "hsl(220 70% 50%)",
								2: "hsl(160 60% 45%)",
								3: "hsl(30 80% 55%)",
								4: "hsl(280 65% 60%)",
								5: "hsl(340 75% 55%)",
							},
						},
					},
				},
			],
		}),
	],
};
