/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': "'Rubik', sans-serif"
      },
      backgroundImage: {
        'hero': "url('https://i.ibb.co/ZfLNdRG/banner.jpg')"
      }
    },
  },
  plugins: [],
}