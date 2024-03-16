<script setup lang="ts">
import type { CustomParsedContent } from '@/types/post'

const localePath = useLocalePath()
const route = useRoute()

const { data: categoryData } = await useAsyncData('tags', async () => {
  const hashMap: Record<string, number> = {}
  const categories = (await queryContent<CustomParsedContent>('blogs/').only(['categories']).find()).map(el => el.categories).flat()
  categories.forEach((categoryEl) => {
    if (!hashMap[categoryEl]) { hashMap[categoryEl] = 0 }
    hashMap[categoryEl] += 1
  })

  return Object.keys(hashMap)
    .sort((a, b) => hashMap[b] - hashMap[a])
    .reduce((acc, key) => ({ ...acc, [key]: hashMap[key] }), {})
})
</script>

<template>
  <section class="py-10 lg:py-20">
    <UContainer>
      <h2 class="text-5xl font-bold capitalize lg:mb-16 mb-8 text-center">
        {{ $t('pages.homes.popularCategories') }}
      </h2>
      <div class="grid gap-4 lg:grid-cols-6 grid-cols-2">
        <UCard
          v-for="(value, key) in categoryData"
          :key="key"
        >
          <div>
            <!-- 이미지 -->
            <h6 class="text-center font-semibold mb-1">
              {{ $t(`categories.${key}`) }}
            </h6>
            <div class="text-center">
              Articles: {{ value }}
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
