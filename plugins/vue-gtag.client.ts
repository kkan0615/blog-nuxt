import VueGtag from 'vue-gtag'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    },
  }, nuxtApp.$router)
})
