// import { defineNuxtPlugin } from 'nuxt/app'
// import VueGtag from 'vue-gtag'
// import { useRuntimeConfig } from '#app'
//
// export default defineNuxtPlugin((nuxtApp) => {
//   const config = useRuntimeConfig()
//   nuxtApp.vueApp.use(VueGtag, {
//     config: {
//       id: config.GOOGLE_ANALYTICS_ID,
//     },
//   }, nuxtApp.$router)
// })

//@MEMO: Offciail website using following code
import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: config.GOOGLE_ANALYTICS_ID
    }
  })

  trackRouter(useRouter())
})
