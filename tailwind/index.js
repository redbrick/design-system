const themes = require('daisyui/src/theming/themes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        'nix-light': {
          ...themes.light,
          primary: '#5277c3',
          secondary: '#6ad541',
          accent: '#27385d',
          neutral: '#7ebae4',
          'primary-content': '#ffffff',
          'secondary-content': '#ffffff',
          'neutral-content': '#ffffff',
        },
        'nix-dark': {
          ...themes.dark,
          primary: '#5277c3',
          secondary: '#6ad541',
          accent: '#27385d',
          neutral: '#7ebae4',
          'primary-content': '#ffffff',
          'secondary-content': '#ffffff',
          'neutral-content': '#ffffff',
        }
      },
      // {
      //   light: {
      //     ...themes.light,
      //     primary: '#bc171c',
      //     secondary: '#1762d2',
      //     accent: '#b41a3b',
      //   },
      // },
      // {
      //   dark: {
      //     ...themes.dark,
      //     primary: '#dc2b31',
      //     secondary: '#1784d2',
      //     accent: '#d21746',
      //   },
      // },
      {
        synthwave: {
          ...themes.synthwave,
          primary: '#cd1946',
        },
      },
      
    ],
  },
}
