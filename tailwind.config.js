const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yantramanav: ["Yantramanav", "sans-serif"],
        muktaVaani: ["Mukta Vaani", "sans-serif"],
        imprima: ["Imprima", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
});
