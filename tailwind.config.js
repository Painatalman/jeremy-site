/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "**/*.html",
    "./src/**/*.hbs",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
  ],
  theme: {
    backgroundImage: {
      default: "url('/background.png')",
    },
    colors: {
      black: "#000",
      "grey-100": "#111",
      "grey-200": "#222",
      "grey-400": "#404040",
      "grey-500": "#555",
      "grey-900": "#999",
      green: "#8dd5b8",
      "green-dark": "#52bc91",
      red: "#d09696",
    },
    fontFamily: {
      sans: ["Rajdhani"],
    },
    extend: {},
  },
  plugins: [],
};
