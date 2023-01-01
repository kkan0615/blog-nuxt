// https://nuxt.com/docs/api/configuration/nuxt-config
import { enMessage } from './locales/en'
import { koMessage } from './locales/ko'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    '@nuxt/content',
  ],
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    trailingSlash: false,
    locales: [
      {
        code: 'en',
        iso: 'en'
      },
      {
        code: 'ko',
        iso: 'ko-KR'
      },
    ],
    vueI18n: {
      legacy: false,
      fallbackLocale: 'en',
      messages: {
        en: enMessage,
        ko: koMessage,
      }
    }
  },
  image: {
    provider: 'netlify'
  },
  content: {
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
  },
})
