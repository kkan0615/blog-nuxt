<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import './libs/dayjs'

const { t } = useI18n()
const themeCookie = useCookie('theme')
// SEO
useHead({
  title: t('seo.title'),
  meta: [
    { name: 'application-name', content: t('seo.applicationName') },
    { name: 'description', content: t('seo.description') },
    { name: 'author', content: 'Requiem' },
    { name: 'publisher', content: 'Requiem' },
    { name: 'robots', content: 'index, follow' }
  ],
  htmlAttrs: {
    'data-theme': themeCookie.value || 'base-dark'
  }
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
