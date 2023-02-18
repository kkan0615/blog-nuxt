// https://nuxt.com/docs/api/configuration/nuxt-config

import { enMessage } from './locales/en'
import { koMessage } from './locales/ko'
import { DefaultLocale } from './types/locale'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    '@nuxt/content',
    // 'nuxt-security'
  ],
  runtimeConfig: {
    public:{
      GOOGLE_ANALYTICS_ID: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
      NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
      CA_PUB: process.env.NUXT_PUBLIC_CA_PUB,
    },
    GOOGLE_ANALYTICS_ID: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
    CA_PUB: process.env.NUXT_PUBLIC_CA_PUB,
  },
  css: [
    'animate.css',
    '~/styles/libs/animate.css',
    '~/styles/libs/tokyo-night-dark.min.css',
  ],
  app: {
    head: {
      script: [
        {
          async: true,
          src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NUXT_PUBLIC_CA_PUB}`,
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  // security: {
  //   corsHandler: false,
  //   headers: false,
  // },
  i18n: {
    defaultLocale: DefaultLocale,
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
      fallbackLocale: DefaultLocale,
      messages: {
        en: enMessage,
        ko: koMessage,
      }
    }
  },
  image: {
    provider: 'netlify',
  },
  content: {
    // ignores: ['ghost'],
    markdown: {
      anchorLinks: false,
      remarkPlugins: {
        'remark-reading-time': {},
      },
      rehypePlugins: [
        // 'rehype-highlight'
      ]
    },
    // highlight: {
    //   theme: {
    //     default: 'github-dark',
    //     'base-dark': 'github-dark',
    //     'base-light': 'github-light',
    //   },
    //   preload: [
    //     'c',
    //     'cpp',
    //     'java',
    //     'javascript',
    //     'typescript',
    //   ]
    // }
  },
})
