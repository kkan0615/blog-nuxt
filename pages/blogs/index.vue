<script setup lang="ts">
const displayPosts = 20

import { useI18n } from '#imports'
import Navbar from '~/components/blogs/list/Navbar.vue'
import BlogCard from '~/components/blogs/list/BlogCard.vue'
import { useLayoutStore } from '~/stores/layout'
import { PostList } from '~/types/post'

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

// SEO
useHead({
  title: `${t('menus.blogs')} | ${t('seo.title')}`,
  meta: [
    { name: 'description', content: `${t('menus.descriptions.blogs')} | ${t('seo.applicationName')}` },
  ],
  link: [
    { rel: 'canonical', href: `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}${route.path}` },
  ]
})

layoutStore.setHeaderTitle(t('menus.blogs'))

const { data, refresh } = await useAsyncData<{
  maxPagination: number
  list: PostList[]
}>('blogs', async () => {
  const currPageNum = (Number(route.query.page) || 1)

  const maxLength = (await queryContent<PostList>('blogs/')
    .where({
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
    })
    .only(['_id'])
    .find()).length

  const list = await queryContent<PostList>('blogs/')
    .where({
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
    })
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
      v-if="data.list && data.list.length > 0"
      class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-0 md:p-4 md:p-0"
    >
      <!--      <ContentList-->
      <!--        v-slot="{ list }"-->
      <!--        :query="query"-->
      <!--      >-->
      <BlogCard
        v-for="blog in data.list"
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
      <Pagination
        v-if="data.maxPagination"
        :active-number="Number(route.query.page) || 1"
        :max="data.maxPagination"
        @click="handleClickPagination"
      />
    </div>
  </div>
</template>
