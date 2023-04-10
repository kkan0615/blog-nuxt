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
          'primary': '#E74646',
          'secondary': '#F0997D',
          'accent': '#86A3B8',
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
          'primary': '#E74646',
          'secondary': '#F0997D',
          'accent': '#86A3B8',
          'neutral': '#1c1917',
          'base-100': '#fff',
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
