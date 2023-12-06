const { colors } = require("./utils/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pageComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        mukta: ["Mukta", "sans-serif"],
      },
      colors: {
        pink: "#EF4136",
      },
    },
    borderRadius: {
      xs: "10px",
      lg: "20px",
    },
    backgroundImage: {
      // "ellipse-card": "url('../static/images/dashboard/bg.png')",
    },
  },
  plugins: [],
};
