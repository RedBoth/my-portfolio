/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFD700",   // Amarillo más dorado/intenso (Gold)
          purple: "#9333ea",   // Morado vibrante
          dark: "#050505",     // Fondo casi negro (para que resalte el grid)
          secondary: "#111111", // Fondo secundario (tarjetas)
          text: "#f3f4f6",     // Texto principal
          muted: "#9ca3af",    // Texto secundario
        },
      },
      animation: {
        'border-spin': 'border-spin 3s linear infinite',
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};