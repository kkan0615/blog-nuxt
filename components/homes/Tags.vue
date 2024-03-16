<script setup lang="ts">
import type { CustomParsedContent } from '@/types/post'

const localePath = useLocalePath()

const { data: tagData } = await useAsyncData('tags', async () => {
  const hashMap: Record<string, number> = {}
  const tags = (await queryContent<CustomParsedContent>('blogs/').only(['tags']).find()).map(el => el.tags).flat()
  tags.forEach((tagEl) => {
    if (!hashMap[tagEl]) { hashMap[tagEl] = 0 }
    hashMap[tagEl] += 1
  })

  return Object.keys(hashMap)
    .sort((a, b) => hashMap[b] - hashMap[a])
    .reduce((acc, key) => ({ ...acc, [key]: hashMap[key] }), {})
})
</script>

<template>
  <section class="py-10 lg:py-20 bg-stone-900 text-white">
    <UContainer>
      <div class="flex justify-between">
        <h3 class="text-3xl font-bold capitalize mb-3 flex items-center">
          {{ $t('pages.homes.popularTags') }}
          <UIcon
            class="ml-4"
            name="i-heroicons-bookmark-square"
          />
        </h3>
      </div>
      <p class="block mb-6 font-normal text-lg text-neutral-400">
        {{ $t('pages.homes.popularTagsDesc') }}
      </p>
      <ul class="flex gap-x-2 gap-y-3 flex-wrap">
        <NuxtLink
          v-for="(value, key) in tagData"
          :key="key"
          class="text-sm capitalize hover:underline"
          :to="{
            path: localePath('/blogs'),
            query: {
              tag: key,
            },
          }"
        >
          <UBadge
            class="dark:!text-white py-3 px-4 text-sm rounded-full"
            :label="`#${$t(`tags.${key}`)} (${value})`"
          />
        </NuxtLink>
      </ul>
    </UContainer>
  </section>
</template>
