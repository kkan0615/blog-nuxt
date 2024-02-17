<script setup lang="ts">
const appConfig = useAppConfig()
// const route = useRoute()

// useSeoMeta({
//   title: `${route.meta.title} | ${appConfig.seo.title}`,
// })
useServerSeoMeta({
  robots: 'index, follow',
})

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

useHead({
  htmlAttrs: { ...head.value.htmlAttrs },
  link: head.value.link,
  meta: head.value.meta,
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} | ${appConfig.seo.title}` : (appConfig.seo.title || '')
})
</script>
<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>
<style>
body {
  font-family: 'Noto Sans', sans-serif;
  /* font-family: 'Roboto', sans-serif; */
}
</style>
