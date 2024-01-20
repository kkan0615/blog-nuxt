<script setup lang="ts">
import type { CustomParsedContent } from '@/types/post'
const route = useRoute()

const { data } = await useAsyncData('content', () => queryContent<CustomParsedContent>(`/blogs/${(route.params.slug as string[]).join('/')}`).findOne())

</script>
<template>
  <UContainer class="mt-14 py-3 lg:flex">
    <div class="lg:flex-1 lg:mr-10">
      <div class="mb-8">
        <h1 class="text-5xl font-bold mb-1">
          {{ data?.title }}
        </h1>
        <div class="flex">
          <div class="text-stone-500">
            {{ data?.date }}
          </div>
          <div class="mx-auto" />
          <div class="text-stone-500">
            {{ data?.readingTime.text }}
          </div>
        </div>
      </div>
      <div
        v-if="data"
        class="prose prose-lg text-inherit max-w-full"
      >
        <ContentRenderer
          id="article"
          class="max-w-full"
          :value="data"
        />
      </div>
      <BlogsFooter
        :url="data?._path || ''"
        :categories="data?.categories || []"
        :tags="data?.tags || []"
      />
    </div>
    <div class="lg:block hidden w-60">
      <div class="sticky top-14">
        <UiToc
          :toc="data?.body?.toc"
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
