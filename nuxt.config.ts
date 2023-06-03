// https://nuxt.com/docs/api/configuration/nuxt-config
import { DefaultLocale } from './types/locale'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    // '@vite-pwa/nuxt',
  ],
  runtimeConfig: {
    public:{
      GOOGLE_ANALYTICS_ID: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
      NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
      CA_PUB: process.env.NUXT_PUBLIC_CA_PUB,
      NUXT_PUBLIC_AMZN_ASSOC_TARCKING_ID: process.env.NUXT_PUBLIC_AMZN_ASSOC_TARCKING_ID
    },
    GOOGLE_ANALYTICS_ID: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
    CA_PUB: process.env.NUXT_PUBLIC_CA_PUB,
    NUXT_PUBLIC_AMZN_ASSOC_TARCKING_ID: process.env.NUXT_PUBLIC_AMZN_ASSOC_TARCKING_ID
  },
  css: [
    'animate.css',
    '~/styles/global.scss',
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
  // pwa: {
  //   registerType: 'autoUpdate',
  //   manifest: {
  //     name: 'Requiem blog',
  //     short_name: 'Requiem_blog',
  //     theme_color: '#1E1E1E',
  //     icons: [
  //       {
  //         src: 'app/logo_color-128.png',
  //         sizes: '128x128',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'app/logo_color-256.png',
  //         sizes: '256x256',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'app/logo_color-512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'app/logo_color-512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //         purpose: 'any maskable',
  //       },
  //     ],
  //   },
  //   // workbox: {
  //   // navigateFallback: '/',
  //   //   globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
  //   // },
  //   client: {
  //     installPrompt: true,
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: 'module',
  //   },
  // },
  // security: {
  //   corsHandler: false,
  //   headers: false,
  // },
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  i18n: {
    lazy: true,
    precompile: {
      strictMessage: false,
      escapeHtml: true
    },
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    defaultLocale: DefaultLocale,
    strategy: 'prefix_except_default',
    trailingSlash: false,
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        files: ['en/index.json', 'en/common.json'],
      },
      {
        code: 'ko',
        iso: 'ko',
        name: 'Korean',
        files: ['ko/index.json', 'ko/common.json'],
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: './i18n.config.ts'
  },
  image: {
    provider: 'netlify',
  },
  content: {
    markdown: {
      toc: {
        depth: 5, searchDepth: 5
      },
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
    // },
  },
})
