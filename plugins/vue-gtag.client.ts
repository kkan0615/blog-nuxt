import { defineNuxtPlugin } from 'nuxt/app'
import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: config.GOOGLE_ANALYTICS_ID,
    },
  }, nuxtApp.$router)
})

//@TODO: 위에 꺼 작동하면 아래꺼 삭제
// import VueGtag from 'vue-gtag-next'
//
// export default defineNuxtPlugin((nuxtApp) => {
//   const config = useRuntimeConfig()
//
//   nuxtApp.vueApp.use(VueGtag, {
//     property: {
//       id: config.GOOGLE_ANALYTICS_ID
//     }
//   })
// })
