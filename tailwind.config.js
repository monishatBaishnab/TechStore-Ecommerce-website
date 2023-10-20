/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'rubik': "'Rubik', sans-serif"
      },
      backgroundImage: {
        'hero': "url('/banner.jpg')"
      }
    },
  },
  plugins: [],
}