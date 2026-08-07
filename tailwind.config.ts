import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        primary: '#7C3AED',
        secondary: '#06B6D4',
        accent: '#EC4899',
        highlight: '#22D3EE',
      },
      boxShadow: {
        glow: '0 0 80px rgba(7, 89, 133, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
