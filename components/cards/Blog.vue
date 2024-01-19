<script setup lang="ts">
import type { CustomParsedContent } from '@/types/post'

const props = defineProps<{
  content: CustomParsedContent
}>()
const localePath = useLocalePath()

const publishedAt = computed(() => props.content.date)
</script>
<template>
  <NuxtLink
    :to="localePath(content._path || '')"
  >
    <div class="border rounded-2xl">
      <div class="aspect-video">
        <img src="https://picsum.photos/300/200" :alt="content.title" class="w-full rounded-t-2xl">
      </div>
      <div class="p-3">
        <div class="space-x-2 mb-1">
          <UBadge
            v-for="categoryEl in content.categories"
            :key="categoryEl"
            :label="categoryEl"
            color="primary"
          />
        </div>
        <div class="space-x-2 mb-1.5">
          <UBadge
            v-for="tagEl in content.tags"
            :key="tagEl"
            :label="`#${tagEl}`"
            size="xs"
            color="white"
          />
        </div>
        <h2 class="text-lg font-bold hover:text-primary-500">
          {{ content.title }}
        </h2>
        <p class="line-clamp-2 mb-3">
          {{ content.description }}
        </p>
        <div class="w-full flex items-center justify-between text-sm">
          <div class="opacity-75">
            {{ publishedAt }}
          </div>
          <div class="opacity-75">
            {{ content.readingTime.text }}
          </div>
        </div>
      </div>
      <hr>
      <div class="p-3 flex justify-end">
        <UtilsShare :url="content._path || ''" />
      </div>
    </div>
  </NuxtLink>
</template>
