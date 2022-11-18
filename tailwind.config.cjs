/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f98072",
        secondary: "#bf20db",
        accent: "#38aad1",
        neutral: "#262631",
        base: "#303254",
        info: "#3466CB",
        success: "#25C166",
        warning: "#E7BD13",
        error: "#EA576D",
        text: "#e7e7e7"
      }
    },
  },
  plugins: [],
}
