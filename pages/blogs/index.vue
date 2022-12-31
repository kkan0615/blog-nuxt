<script setup lang="ts">
import { useAsyncData, useRoute } from '#app'
import Navbar from '~/components/blogs/list/Navbar.vue'
import BlogCard from '~/components/blogs/list/BlogCard.vue'
import { useI18n } from '#imports'

const route = useRoute()
const { locale } = useI18n()

const { data: list, refresh } = await useAsyncData('blogs', () =>
  queryContent('/blogs')
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
</script>

<template>
  <div>
    <Navbar
      @search="refresh"
    />
    <div
      class="grid grid-cols-4 gap-4"
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
  </div>
</template>
