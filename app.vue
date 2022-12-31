<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import './libs/dayjs'

// SEO
useHead({
  title: 'Nuxt-study',
  meta: [
    { name: 'application-name', content: 'Nuxt-study' },
    { name: 'description', content: 'It is Nuxt study website' },
    { name: 'author', content: 'Requiem' },
    { name: 'publisher', content: 'Requiem' },
    { name: 'robots', content: 'index, follow' }
  ],
})
// initial app setting
</script>
