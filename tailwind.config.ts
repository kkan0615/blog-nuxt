import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden'
          },
          '100%': {
            width: '100%'
          }
        },
        blink: {
          '50%': {
            borderColor: 'transparent'
          },
          '100%': {
            borderColor: 'white'
          }
        },
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite',
        border: 'border 4s ease infinite',
      }
    },
  },
}
