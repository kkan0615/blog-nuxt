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
      <div class="mb-2">
        <UBadge
          v-for="categoryEl in content.categories"
          :key="categoryEl"
          :label="categoryEl"
        />
      </div>
      <div class="font-semibold" />
      <h2 class="text-lg font-bold">
        {{ content.title }}
      </h2>
      <p class="line-clamp-2">
        {{ content.description }}
      </p>
    </div>
    <hr>
    <div class="flex items-center p-3">
      <div>
        {{ publishedAt }}
      </div>
    </div>
  </div>
</template>
