// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-simple-robots',
    '@nuxtjs/sitemap',
    'nuxt-gtag',
  ],
  css: ['~/assets/scss/main.scss'],
  ui: {
    icons: ['simple-icons', 'heroicons', 'lucide', 'mdi'],
  },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: process.env.NUXT_GOOGLE_SITE_VERIFICATION || ''
        },
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js',
          'data-name': 'bmc-button',
          'data-slug': 'youngjinkwak',
          'data-color': '#FFDD00',
          'data-emoji': '',
          'data-font': 'Cookie',
          'data-text': 'Buy me a coffee',
          'data-outline-color': '#000000',
          'data-font-color': '#000000',
          'data-coffee-color': '#ffffff',
        }
      ]
    }
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.ts'
      },
      {
        code: 'ko',
        name: '한국어',
        file: 'ko.ts',
      },
    ],
    strategy: 'prefix_and_default',
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    // vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  content: {
    highlight: {
      // theme: {
      //   default: 'github-light',
      //   // light: 'github-light',
      //   dark: 'github-dark',
      // },
      theme: 'github-dark',
    },
    markdown: {
      toc: {
        depth: 5, searchDepth: 5
      },
      remarkPlugins: ['remark-reading-time'],
    },
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Roboto: true,
      'Noto Sans': true,
    }
  },
  site: {
    indexable: true,
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },
  sitemap: {
    // https://nuxtseo.com/sitemap/integrations/content
    strictNuxtContentPaths: true
  },
  gtag: {
    id: process.env.GTAG_ID,
  }
  // devtools: { enabled: true },
})
