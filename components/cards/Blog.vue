<script setup lang="ts">
import type { CustomParsedContent } from '@/types/post'
const props = defineProps<{
  content: CustomParsedContent
}>()

const publishedAt = computed(() => props.content.date)
</script>
<template>
  <div class="border rounded-2xl">
    <div class="aspect-video ">
      <img src="https://picsum.photos/300/200" :alt="content.title" class="w-full rounded-t-xl">
    </div>
    <div class="p-3">
      <div class="space-x-2 mb-1">
        <UBadge
          v-for="categoryEl in content.categories"
          :key="categoryEl"
          :label="categoryEl"
        />
      </div>
      <div class="space-x-2 mb-1">
        <UBadge
          v-for="tagEl in content.tags"
          :key="tagEl"
          :label="`#${tagEl}`"
          size="xs"
          color="white"
        />
      </div>
      <h2 class="text-lg font-bold">
        {{ content.title }}
      </h2>
      <p class="line-clamp-2 mb-2">
        {{ content.description }}
      </p>
      <div class="flex items-center space-x-2 text-sm">
        <div>
          {{ publishedAt }}
        </div>
        <div>
          {{ content.readingTime.text }}
        </div>
      </div>
    </div>
    <hr>
    <div class="p-3 flex justify-end">
      Actions
    </div>
  </div>
</template>
