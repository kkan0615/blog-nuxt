<script setup lang="ts">
import type { CustomParsedContent } from '@/types/post'
const route = useRoute()

const { data: page } = await useAsyncData('content', () => queryContent<CustomParsedContent>(`/blogs/${(route.params.slug as string[]).join('/')}`).findOne())

useSeoMeta({
  title: page.value?.title || ''
})
</script>
<template>
  <UContainer
    v-if="page"
    class="mt-14 py-3 lg:flex"
  >
    <div class="lg:flex-1 lg:mr-10">
      <BlogsHeader
        :content="page"
      />
      <article
        v-if="page"
        class="prose max-w-full"
      >
        <!-- class="prose prose-primary dark:prose-invert max-w-none" -->
        <ContentRenderer
          id="article"
          :value="page"
        />
      </article>
      <BlogsFooter
        :url="page?._path || ''"
        :categories="page?.categories || []"
        :tags="page?.tags || []"
      />
    </div>
    <div class="lg:block hidden w-60">
      <div class="sticky top-16">
        <UiToc
          :toc="page?.body?.toc"
        />
      </div>
    </div>
  </UContainer>
</template>
<style>
#article table {
  @apply inline-block overflow-auto max-w-full;
}
</style>
