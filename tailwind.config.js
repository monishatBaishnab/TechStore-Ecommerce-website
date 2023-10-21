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
        'hero': "url('/banner.jpg')",
        'testimonials': "url('https://i.ibb.co/zbbj0Kv/marvin-meyer-SYTO3xs06f-U-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}