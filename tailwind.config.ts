import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				// NOTE: https://gist.github.com/brysonreece/189256800e984c56e21aaa0375c45039
				"sea-green": "#2e8b57",
				"slate-blue": "#6a5acd",
				salmon: "#fa8072",
			},
		},
	},
	plugins: [],
} satisfies Config;
