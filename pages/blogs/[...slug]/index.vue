<template>
  <div
    class="prose"
  >
    <ContentDoc
      v-slot="{ doc }"
      :head="false"
    >
      <h1>{{ doc.title }}</h1>
      <ContentRenderer
        :value="doc"
      />
    </ContentDoc>
  </div>
</template>
<script setup lang="ts">
import { useAsyncData, useHead } from '#app'
import { useContentHead } from '#imports'

const { data: page } = await useAsyncData('page-data', queryContent('/blogs/ko-12-23-2022-21-45').findOne)
// SEO
useHead({
  title: `${page.value?.title} | Nuxt-study`,
  meta: [
    { name: 'application-name', content: 'Nuxt-study' },
    { name: 'description', content: 'It is Nuxt study website' },
    { name: 'author', content: 'Requiem' },
    { name: 'publisher', content: 'Requiem' },
    { name: 'robots', content: 'index, follow' }
  ],
})
</script>
