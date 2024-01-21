// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],
  css: ['~/assets/scss/main.scss'],
  ui: {
    icons: ['simple-icons', 'heroicons', 'lucide'],
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
    // documentDriven: false,
    highlight: {
      // theme: {
      //   default: 'github-light',
      //   // light: 'github-light',
      //   dark: 'github-dark',
      // },
      theme: 'github-dark',
      // preload: ['js', 'ts', 'tex', 'md', 'yaml', 'javascript', 'typescript', 'css', 'scss', 'sass', 'html', 'vue', 'vue-html'],
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
  // devtools: { enabled: true },
  // devServer: {
  //   port: 3005
  // },
})
