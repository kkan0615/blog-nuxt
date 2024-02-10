<script setup lang="ts">
import type { QueryBuilderWhere, SortFields } from '@nuxt/content/dist/runtime/types'
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
  if (route.query.search) {
    queryWhere.title = { $contains: route.query.search as string }
  }
  console.log(queryWhere)

  // Set sort
  const querySort: SortFields = {}
  if (!route.query.orderBy || route.query.orderBy === 'new') {
    querySort.date = -1
  } else if (route.query.orderBy === 'old') {
    querySort.date = 1
  } else if (route.query.orderBy === 'titleAsc') {
    querySort.title = 1
  } else if (route.query.orderBy === 'titleDesc') {
    querySort.title = -1
  }
  return await queryContent<CustomParsedContent>('blogs/')
    .where(queryWhere)
    .sort(querySort)
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
  if (route.query.search) {
    queryWhere.title = { $contains: route.query.search as string }
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
  await router.replace({
    query: {
      ...route.query,
      page: newPage,
    }
  })
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  await refresh()
}

</script>
<template>
  <UContainer class="mt-14 py-3">
    <UtilsAnimationObserver />
    <div class="lg:flex lg:space-x-8">
      <div class="lg:flex-1">
        <BlogsListHeader class="mb-4" />
        <BlogsSearchNav class="mb-4" />
        <h3 class="font-bold mb-4">
          Total: <span class="text-primary-500">{{ counts }}</span>
        </h3>
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-8">
          <CardsBlog
            v-for="contentEl in contents"
            :key="contentEl._id"
            :content="contentEl"
            data-animate="animate-fade-down"
          />
        </div>
        <UPagination
          :model-value="currPage"
          :page-count="DefaultLimit"
          :total="counts || 0"
          @update:model-value="handleUpdatePagination"
        />
      </div>
      <div class="w-60 lg:block hidden">
        <BlogsListNavigator
          :categories="categories || []"
          :tags="tags || []"
        />
      </div>
    </div>
  </UContainer>
</template>
