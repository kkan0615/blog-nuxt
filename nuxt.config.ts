// https://nuxt.com/docs/api/configuration/nuxt-config

import { enMessage } from './locales/en'
import { koMessage } from './locales/ko'

export default defineNuxtConfig({
  dev: process.env.NUXT_PUBLIC_MODE === 'development',
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    '@nuxt/content',
  ],
  runtimeConfig: {
    public:{
      NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
      NUXT_PUBLIC_MODE: process.env.NUXT_PUBLIC_MODE,
    },
    GOOGLE_ANALYTICS_ID: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
    NUXT_PUBLIC_MODE: process.env.NUXT_PUBLIC_MODE,
  },
  css: [
    'animate.css',
    '@/styles/libs/animate.css'
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
      anchorLinks: false,
      remarkPlugins: {
        'remark-reading-time': {},
      },
      rehypePlugins: {
        'rehype-highlight': {}
      }
    },
  },
})
