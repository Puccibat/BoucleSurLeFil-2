/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["LibreCaslonDisplay", "cursive"],
        secondary: ["LibreCaslonDisplay", "serif"],
      },
    },
  },
  plugins: [],
};
