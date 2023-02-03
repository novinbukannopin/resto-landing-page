/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#232631",
      ungu: "#5A4FCF",
      ungubg: "#DCDAF3",
      background: "#FAFAFA",
      putih: "#FFFFFF",
      textgray: "#858585",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
