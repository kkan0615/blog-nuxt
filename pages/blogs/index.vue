<script setup lang="ts">
import type { CustomParsedContent } from '@/types/post'
import { DefaultLimit } from '@/types/post'

const { t } = useI18n()
const route = useRoute()

const { data: contents } = await useAsyncData('contents', async () =>
  await queryContent<CustomParsedContent>('blogs/')
    .limit(DefaultLimit)
    .skip(((Number(route.query.page) || 1) - 1) * DefaultLimit)
    .find()
)
const { data: counts } = await useAsyncData('counts', async () => (
  (await queryContent<CustomParsedContent>('blogs/').only(['_id']).count())
))

const { data: categories } = await useAsyncData('categories', async () => (
  [...new Set((await queryContent<CustomParsedContent>('blogs/').only(['categories']).find()).map(el => el.categories).flat())]
))

const currPage = computed(() => Number(route.query.page) || 1)

useSeoMeta({
  title: t('seo.blogs.title')
})

</script>
<template>
  <UContainer class="mt-14 py-3">
    <div class="flex space-x-2">
      <div class="flex-1">
        <h3 class="font-bold mb-4">
          Total: <span class="text-primary-500">{{ counts }}</span>
        </h3>
        <div class="grid lg:grid-cols-3 grid-cols-1 mb-8">
          <CardsBlog
            v-for="contentEl in contents"
            :key="contentEl._id"
            :content="contentEl"
          />
        </div>
        <UPagination
          :model-value="currPage"
          :page-count="DefaultLimit"
          :total="counts || 0"
        />
      </div>
      <div class="w-52 lg:block hidden">
        <ul>
          <li class="capitalize font-semibold mb-0.5">
            {{ $t('labels.categories') }}
          </li>
          <NuxtLink
            v-for="categoryEl in categories"
            :key="categoryEl"
            class="text-sm capitalize hover:underline"
            :to="{
              path: route.path,
              query: {
                category: categoryEl,
              }
            }"
          >
            <li>
              {{ categoryEl }}
            </li>
          </NuxtLink>
        </ul>
      </div>
    </div>
  </UContainer>
</template>
