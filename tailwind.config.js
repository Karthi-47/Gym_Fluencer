/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ["Chakra Petch", "serif"],
      },
    },
  },
  plugins: [],
};