const themes = require('daisyui/src/theming/themes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...themes.light,
          primary: '#bc171c',
          secondary: '#1762d2',
          accent: '#b41a3b',
        },
      },
      {
        dark: {
          ...themes.dark,
          primary: '#dc2b31',
          secondary: '#1784d2',
          accent: '#d21746',
        },
      },
      {
        synthwave: {
          ...themes.synthwave,
          primary: '#cd1946',
        },
      },
    ],
  },
}
