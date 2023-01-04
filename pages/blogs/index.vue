<script setup lang="ts">
import { useAsyncData, useRoute } from '#app'
import { useI18n } from '#imports'
import Navbar from '~/components/blogs/list/Navbar.vue'
import BlogCard from '~/components/blogs/list/BlogCard.vue'
import { useLayoutStore } from '~/stores/layout'
import { PostList } from '~/types/post'

const route = useRoute()
const { t, locale } = useI18n()
const layoutStore = useLayoutStore()

// SEO
useHead({
  title: `${t('menus.blogs')} | ${t('seo.title')}`,
  meta: [
    { name: 'description', content: `${t('menus.descriptions.blogs')} | ${t('seo.applicationName')}` },
  ],
})

layoutStore.setHeaderTitle(t('menus.blogs'))

const { data: list, refresh } = await useAsyncData<PostList[]>('blogs', () =>
  queryContent<PostList>('/blogs')
    .where({
      title: { $contains: route.query.search } as any,
      locale: { $in: ((route.query.locales || locale.value) as string).split(',').filter((el) => !!el) } as any,
      categories: { $in: route.query.categories ?
        (route.query.categories as string).split(',').filter((el) => !!el) :
        undefined
      } as any,
      tags: { $in: route.query.tags ?
        (route.query.tags as string).split(',').filter((el) => !!el) :
        undefined
      } as any,
    })
    .find()
)

console.log(list.value ? list.value[0].tags : 'no')
</script>

<template>
  <div
    class="max-w-7xl mx-auto"
  >
    <Navbar
      @search="refresh"
    />
    <div
      class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-0 md:p-4 md:p-0"
    >
      <!--      <ContentList-->
      <!--        v-slot="{ list }"-->
      <!--        :query="query"-->
      <!--      >-->
      <BlogCard
        v-for="blog in list"
        :key="blog._path"
        :blog="blog"
        class="card bg-base-300"
      />
      <!--      </ContentList>-->
    </div>
    <div
      class="mt-4 text-center"
    >
      <Pagination
        :active-number="1"
        :max="20"
      />
    </div>
  </div>
</template>
