const {fontFamily} = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--michroma-font)', ...fontFamily.sans],
        serif: [
          'var(--michroma-font)',
        ]
      },
    },
  },
  plugins: [],
}
