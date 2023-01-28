<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import './libs/dayjs'

const appConfig = useAppConfig()
const { t, locale } = useI18n()
// SEO
useHead({
  title: t('seo.title'),
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
    { name: 'language', content: locale },
    { name: 'keywords', content: 'blogs showcases contact website' },
  ],
})
// initial app setting
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
