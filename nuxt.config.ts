// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/content',
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'ko',
        name: '한국어'
      },
    ],
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  content: {
    documentDriven: false,
  },
  devtools: { enabled: true },
  // devServer: {
  //   port: 3005
  // },
})
