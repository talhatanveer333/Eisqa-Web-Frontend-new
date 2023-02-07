/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
