<script setup lang="ts">
import type { CustomParsedContent } from '@/types/post'
const route = useRoute()

const { data: page } = await useAsyncData('content', () => queryContent<CustomParsedContent>(`/blogs/${(route.params.slug as string[]).join('/')}`).findOne())

useSeoMeta({
  title: page.value?.title || ''
})
</script>
<template>
  <UContainer class="mt-14 py-3 lg:flex">
    <div class="lg:flex-1 lg:mr-10">
      <div class="mb-8">
        <h1 class="text-5xl font-bold mb-1">
          {{ page?.title }}
        </h1>
        <div class="flex">
          <div class="text-stone-500">
            {{ page?.date }}
          </div>
          <div class="mx-auto" />
          <div class="text-stone-500">
            {{ page?.readingTime.text }}
          </div>
        </div>
      </div>
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
      <div class="sticky top-14">
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
