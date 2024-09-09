/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Remove unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'title': ["Oswald", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
