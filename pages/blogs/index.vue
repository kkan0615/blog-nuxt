<script setup lang="ts">
import { useI18n } from '#imports'
import Navbar from '~/components/blogs/list/Navbar.vue'
import BlogCard from '~/components/blogs/list/BlogCard.vue'
import { useLayoutStore } from '~/stores/layout'
import { PostList } from '~/types/post'
import { QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'

const displayPosts = 20

const router = useRouter()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t, locale } = useI18n()
const layoutStore = useLayoutStore()

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  }
})

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

// SEO
useHead({
  title: t('menus.blogs'),
  titleTemplate: (titleChunk) => (
    titleChunk ? `${titleChunk} | ${t('seo.title')}` : t('seo.title')
  ),
  meta: [
    { name: 'description', content: `${t('menus.descriptions.blogs')} | ${t('seo.applicationName')}` },
    ...(head.value.meta || []).map(metaEl => {
      return {
        name: metaEl.name,
        property: metaEl.property,
        content: metaEl.content,
      }
    })
  ],
  link: [
    { rel: 'canonical', href: `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}${route.path}` },
    ...(head.value.link || []).map(linkEl => {
      return {
        id: linkEl.id,
        rel: linkEl.rel,
        href: linkEl.href,
        hreflang: linkEl.hreflang
      }
    })
  ]
})

layoutStore.setHeaderTitle(t('menus.blogs'))

const { data, refresh } = await useAsyncData<{
  maxPagination: number
  list: PostList[]
}>('blogs', async () => {
  const currPageNum = (Number(route.query.page) || 1)

  const queryBuilderWhere: QueryBuilderWhere = {
    _draft: { $not: true },
    title: { $contains: route.query.search as string },
    locale: { $in: ((route.query.locales || locale.value) as string).split(',').filter((el) => !!el) },
    categories: { $in: route.query.categories ?
      (route.query.categories as string).split(',').filter((el) => !!el) :
      undefined
    } as any,
    tags: { $in: route.query.tags ?
      (route.query.tags as string).split(',').filter((el) => !!el) :
      undefined
    } as any,
  }

  const maxLength = (await queryContent<PostList>('blogs/')
    .where(queryBuilderWhere)
    .only(['_id'])
    .find()).length

  const list = await queryContent<PostList>('blogs/')
    .where(queryBuilderWhere)
    .sort({ date: -1 })
    .skip((currPageNum - 1) * displayPosts)
    .limit(displayPosts)
    .find()

  return {
    // maximum page number
    maxPagination: parseInt((maxLength / displayPosts).toString()),
    // List
    list,
  }
})

const handleClickPagination = async (newPageNum: number) => {
  await router.replace({
    query: {
      ...route.query,
      page: newPageNum,
    }
  })

  await refresh()
}

</script>

<template>
  <div class="max-w-7xl mx-auto">
    <Navbar @search="refresh" />
    <div
      v-if="data?.list && data?.list.length > 0"
      class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-0 md:py-4 md:p-0"
    >
      <!--      <ContentList-->
      <!--        v-slot="{ list }"-->
      <!--        :query="query"-->
      <!--      >-->
      <BlogCard
        v-for="blog in data?.list || []"
        :key="blog._path"
        :blog="blog"
      />
      <!--      </ContentList>-->
    </div>
    <div
      v-else
      class="flex justify-center items-center h-64"
    >
      <div class="text-4xl font-bold capitalize">
        {{ t('commons.placeholders.noSearchData') }}
      </div>
    </div>
    <div class="mt-4 text-center">
      <LazyAdvertisementsAmazonBanner />
      <Pagination
        v-if="data?.maxPagination"
        :active-number="Number(route.query.page) || 1"
        :max="data?.maxPagination"
        @click="handleClickPagination"
      />
    </div>
  </div>
</template>
