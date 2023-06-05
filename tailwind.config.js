/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
    },
  },
  plugins: [],
};
