/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf4f3',
          100: '#fce8e6',
          200: '#f9d5d2',
          300: '#f4b5af',
          400: '#ec8a81',
          500: '#e0665a',
          600: '#cc483c',
          700: '#ac392f',
          800: '#8e332b',
          900: '#762f29',
        },
        accent: {
          gold: '#c9a962',
          rose: '#e8b4b8',
        },
      },
    },
  },
  plugins: [],
};
