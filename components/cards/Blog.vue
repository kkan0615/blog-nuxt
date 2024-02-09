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
    class="h-full"
    :to="localePath(content._path || '')"
    data-animate="animate-fade-down"
  >
    <div class="h-full flex flex-col border rounded-2xl">
      <div class="aspect-video overflow-hidden rounded-t-2xl">
        <NuxtImg
          v-if="content.image?.path"
          class="w-full h-full hover:scale-125 transition duration-200 cursor-pointer"
          :alt="content.title"
          :src="content.image.path"
        />
        <NuxtImg
          v-else
          class="w-full h-full hover:scale-125 transition duration-200 cursor-pointer"
          :alt="content.title"
          src="/blogs/no-image.jpg"
        />
      </div>
      <div class="p-3 flex-1 flex flex-col">
        <div class="space-x-2 mb-1">
          <UBadge
            v-for="categoryEl in content.categories"
            :key="categoryEl"
            class="dark:!text-white"
            :label="$t(`categories.${categoryEl}`)"
            color="primary"
          />
        </div>
        <div class="space-x-2 mb-1.5">
          <UBadge
            v-for="tagEl in content.tags"
            :key="tagEl"
            :label="`#${$t(`tags.${tagEl}`)}`"
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
        <div class="mt-auto w-full flex items-center justify-between text-sm">
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
