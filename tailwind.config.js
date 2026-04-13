/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        barlow: ['"Barlow"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        'dm-serif': ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
