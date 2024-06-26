/** @type {import('tailwindcss').Config} */

export default {
  content: ["./**/*.{php,html,js,hbs}"],
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
      white: "#fff",
      green: "#8dd5b8",
      "green-dark": "#52bc91",
      red: "#d09696",
    },
    fontFamily: {
      sans: ["Rajdhani"],
    },
    extend: {
      maxWidth: {
        container: "960px",
      },
    },
  },
  plugins: [],
};
