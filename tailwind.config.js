/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
      },
      keyframes: {
        top: {
          to: { transform: "translateY(-100px)" },
        },
      },
      animation: {
        "move-top": "top 1s cubic-bezier(0.19, 1, 0.22, 1) 1s both",
      },
      colors: {
        light: "#eb4365",
        dark: "#0AFF9D",
        darkBg: "#111111",
        darkText: "#b1b2b7",
        darkHeading: "#ebecf3",
      },
    },
  },
  plugins: [],
};
