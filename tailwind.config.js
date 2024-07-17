/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#00D8FF",
        secondary: "#21222A",
        tertiary: "#282D35",
      },
      backgroundImage: {
        main: "url('/src/assets/reactjs-icon.svg')",
      },
    },
  },
  plugins: [],
};
