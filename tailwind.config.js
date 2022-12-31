module.exports = {
  theme: {
    extend: {
      colors: {
        'label-color': 'rgb(108, 117, 125)'
      }
    },
  },
  daisyui: {
    themes: [
      {
        'base-dark': {
          'primary': '#FD5E53',
          'secondary': '#FE8947',
          'accent': '#E6406D',
          'neutral': '#292433',
          'base-100': '#1E1E1E',
          'info': '#4586E8',
          'success': '#22D89B',
          'warning': '#facc15',
          'error': '#b91c1c',
        },
      },
      {
        'base-light': {
          'primary': '#FD5E53',
          'secondary': '#FE8947',
          'accent': '#E6406D',
          'neutral': '#1c1917',
          'base-100': '#e7e5e4',
          'info': '#4586E8',
          'success': '#22D89B',
          'warning': '#facc15',
          'error': '#b91c1c',
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
