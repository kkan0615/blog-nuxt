<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
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

// SEO
useHead({
  title: t('seo.title'),
  htmlAttrs: {
    'dir': head.value.htmlAttrs?.dir,
    'lang': head.value.htmlAttrs?.lang,
    'data-theme': themeCookie.value || '',
  },
  meta: [
    // Google search console
    { name: 'google-site-verification', content: 'duPDxBWhVaaRC3sGCeasbfDI5vAc4yWZ785rilMrgPs' },
    { name: 'application-name', content: t('seo.applicationName') },
    { name: 'description', content: t('seo.description') },
    { name: 'author', content: 'Requiem' },
    { name: 'publisher', content: 'Requiem' },
    { name: 'robots', content: 'index, follow' },
    { name: 'target', content: 'all' },
    { name: 'og:image', content: appConfig.profile.image },
    { name: 'language', content:  head.value.htmlAttrs?.lang },
    { name: 'keywords', content: 'blogs showcases contact website' },
    ...(head.value.meta || []).map(metaEl => {
      return {
        name: metaEl.name,
        property: metaEl.property,
        content: metaEl.content,
      }
    })
  ],
  link: [
    ...(head.value.link || []).map(linkEl => {
      return {
        id: linkEl.id,
        rel: linkEl.rel,
        href: linkEl.href,
        hreflang: linkEl.hreflang
      }
    }),
  ],
})
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
