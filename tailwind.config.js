/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*{.vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
