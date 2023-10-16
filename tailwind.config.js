/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'label-color': 'rgb(108, 117, 125)',
        'github-dark-code': '#24292e',
      }
    },
  },
  daisyui: {
    themes: [
      {
        'base-dark': {
          'primary': '#F2CB05',
          'primary-content': '#F2F2F2',
          'secondary': '#F2B705',
          'secondary-content': '#fff',
          'accent': '#D92414',
          'accent-content': '#fff',
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
          'primary': '#F2CB05',
          'primary-content': '#F2F2F2',
          'secondary': '#F2B705',
          'secondary-content': '#fff',
          'accent': '#D92414',
          'accent-content': '#fff',
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
