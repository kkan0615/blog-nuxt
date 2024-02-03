<script setup lang="ts">
import type { QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'
import type { CustomParsedContent } from '@/types/post'
import { DefaultLimit } from '@/types/post'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

const { data: contents, refresh } = await useAsyncData('contents', async () => {
  // @TODO: Merge duplicate where
  const queryWhere: QueryBuilderWhere = {
    categories: { $contains: route.query.category as string },
    tags: { $contains: route.query.tag as string },
  }
  return await queryContent<CustomParsedContent>('blogs/')
    .where(queryWhere)
    .sort({
      date: -1
    })
    .limit(DefaultLimit)
    .skip(((Number(route.query.page) || 1) - 1) * DefaultLimit)
    .find()
})
const { data: counts } = await useAsyncData('counts', async () => {
  // @TODO: Merge duplicate where
  const queryWhere: QueryBuilderWhere = {
    categories: { $contains: route.query.category as string },
    tags: { $contains: route.query.tag as string },
  }
  return await queryContent<CustomParsedContent>('blogs/')
    .where(queryWhere)
    .only(['_id']).count()
})

const { data: categories } = await useAsyncData('categories', async () => (
  [...new Set((await queryContent<CustomParsedContent>('blogs/').only(['categories']).find()).map(el => el.categories).flat())]
))

const { data: tags } = await useAsyncData('tags', async () => (
  [...new Set((await queryContent<CustomParsedContent>('blogs/').only(['tags']).find()).map(el => el.tags).flat())]
))

const currPage = computed(() => Number(route.query.page) || 1)

useSeoMeta({
  title: t('seo.blogs.title')
})

const handleUpdatePagination = async (newPage: number) => {
  await router.push({
    query: {
      page: newPage,
    }
  })
  await refresh()
}

</script>
<template>
  <UContainer class="mt-14 py-3">
    <div class="lg:flex lg:space-x-8">
      <div class="lg:flex-1">
        <h3 class="font-bold mb-4">
          Total: <span class="text-primary-500">{{ counts }}</span>
        </h3>
        <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 mb-8">
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
          @update:model-value="handleUpdatePagination"
        />
      </div>
      <BlogsListNavigator
        :categories="categories || []"
        :tags="tags || []"
      />
    </div>
  </UContainer>
</template>
