/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					yellow: "#fef08a",   // Amarillo principal
          purple: "#6b21a8",   // Morado medio
          dark: "#0a0a1f",     // Fondo oscuro
          darker: "#1a0b2e",   // Segundo tono para gradiente
          text: "#ffffff",     // Texto principal
          muted: "#cbd5e1",    // Texto secundario
				},
			},
		},
	},
	plugins: [],
};