// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
  ],
  ui: {
    icons: ['simple-icons', 'heroicons'],
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
    documentDriven: false,
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Noto Sans': true,
    }
  }
  // devtools: { enabled: true },
  // devServer: {
  //   port: 3005
  // },
})
