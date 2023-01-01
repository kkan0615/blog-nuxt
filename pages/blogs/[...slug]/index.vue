<template>
  <div
    class="prose mx-auto"
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

const route = useRoute()
const { t } = useI18n()
const { data: page } = await useAsyncData('page-data', queryContent(`/blogs/${route.params.slug}`).findOne)
// SEO
useHead({
  title: `${page.value?.title} | ${t('seo.title')}`,
  meta: [
    { name: 'description', content: page.value?.description },
  ],
})
</script>
