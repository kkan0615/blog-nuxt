<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import './libs/dayjs'

const appConfig = useAppConfig()
const themeCookie = useCookie('theme')
const { t } = useI18n()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  title: t('seo.title'),
  htmlAttrs: {
    'dir': head.value.htmlAttrs?.dir,
    'lang': head.value.htmlAttrs?.lang,
    'data-theme': themeCookie.value || '',
  },
  meta: [
    // Google search console
    { name: 'google-site-verification', content: 'u9R2rBecskR2Nejhsg5SuG6Ost-uel7q2IJGjXgddbA' },
    { name: 'application-name', content: t('seo.applicationName') },
    { name: 'description', content: t('seo.description') },
    { name: 'author', content: 'Requiem' },
    { name: 'publisher', content: 'Requiem' },
    { name: 'robots', content: 'index, follow' },
    { name: 'target', content: 'all' },
    { name: 'og:image', content: appConfig.profile.image },
    { name: 'language', content:  head.value.htmlAttrs?.lang },
    { name: 'keywords', content: 'blogs showcases contact website' },
    { name: 'theme-color', content: '#1E1E1E' },
    ...(head.value.meta || []).map(metaEl => {
      return {
        name: metaEl.name,
        property: metaEl.property,
        content: metaEl.content,
      }
    })
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: 'app/logo_color-128.png' },
    ...(head.value.link || []).map(linkEl => {
      return {
        id: linkEl.id,
        rel: linkEl.rel,
        href: linkEl.href,
        hreflang: linkEl.hreflang
      }
    }),
  ],
  // script: [
  //   {
  //     type: 'text/javascript',
  //     innerHTML: `
  //       amzn_assoc_ad_type = "link_enhancement_widget";
  //       amzn_assoc_tracking_id = "requiemblog-20";
  //       amzn_assoc_linkid = "4ceba45225ff312b220935a17294cd6a";
  //       amzn_assoc_placement = "";
  //       amzn_assoc_marketplace = "amazon";
  //       amzn_assoc_region = "US";
  //     `,
  //   },
  //   {
  //     src: 'ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US'
  //   }
  // ]
})

// useSeoMeta({
//   title: t('seo.title'),
//   googleSiteVerification: 'u9R2rBecskR2Nejhsg5SuG6Ost-uel7q2IJGjXgddbA',
//   charset: 'utf8',
//   contentType: 'text/html; charset=utf-8',
//   applicationName: t('seo.applicationName'),
//   author: appConfig.author,
//   creator: appConfig.author,
//   generator: appConfig.author,
//   description: t('seo.description'),
//   ogImage: 'appConfig.profile.image',
//   ogImageAlt: 'Requiem',
// })
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
