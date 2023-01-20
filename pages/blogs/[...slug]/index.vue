<script setup lang="ts">
import { useAsyncData, useHead } from '#app'
import dayjs from 'dayjs'
import { useLayoutStore } from '~/stores/layout'
import type { PostDetail } from '~/types/post'
import TableOfContent from '~/components/TableOfContent.vue'
import BottomNavbar from '~/components/blogs/detail/BottomNavbar.vue'
import Tags from '~/components/blogs/detail/Tags.vue'
import Categories from '~/components/blogs/detail/Categories.vue'
import Donation from '~/components/advertisements/Donation.vue'

const DefaultNuxtImagePath = '/assets/blog-no-image.jpg'
const DefaultNuxtImageAlt = 'NuxtImage'
const DefaultNuxtImageHeight = 800
const DefaultNuxtImageWidth = 500

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const { t } = useI18n()
const layoutStore = useLayoutStore()

const { data: page } = await useAsyncData<PostDetail>('page-data', () =>
  queryContent<PostDetail>(`/blogs/${route.params.slug[0]}/${route.params.slug[1]}`)
    .findOne()
)
/* slug parameter return array like [en, en-1010100] */
// const page = await queryContent<PostDetail>(`/blogs/${route.params.slug[0]}/${route.params.slug[1]}`).findOne()

// SEO
useHead({
  title: `${page.value?.title} | ${t('seo.title')}`,
  meta: [
    { name: 'description', content: page.value?.description },
    { name: 'date', content:  dayjs(page.value?.date).format('ll') },
    { name: 'og:image', content: page.value?.image
      ? `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}${page.value.image}`
      : `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}${DefaultNuxtImagePath}` },
    { name: 'twitter:image', content: page.value
      ? `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}${page.value.image}`
      : `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}${DefaultNuxtImagePath}` },
  ],
})

layoutStore.setHeaderTitle(t('menus.blogs'))

</script>
<template>
  <div class="max-w-5xl mx-auto flex flex-col-reverse justify-between gap-x-10 xl:flex-row">
    <div class="flex-1 w-full sm:w-1">
      <h1 class="text-3xl font-bold mb-4">
        {{ page.title }}
      </h1>
      <div class="flex text-sm mb-2">
        <div>
          <span class="mr-1 capitalize">
            {{ t('views.blogs.slug.posted') }}:
          </span>
          <span>
            {{ dayjs(page?.date).format('ll') }}
          </span>
        </div>
        <div class="ml-auto">
          {{ page.readingTime.text }}
        </div>
      </div>
      <figure>
        <NuxtImg
          v-if="page.image && page.image.path"
          :src="page.image.path"
          :alt="page.image.alt || DefaultNuxtImageAlt"
          :height="page.image.height || DefaultNuxtImageHeight"
          :width="page.image.width || DefaultNuxtImageWidth"
          preload
        />
        <!-- @TODO: No width and height may generate performance issue -->
        <NuxtImg
          v-else
          preload
          fit="fill"
          class="w-full"
          :src="DefaultNuxtImagePath"
          :alt="DefaultNuxtImageAlt"
          :height="DefaultNuxtImageHeight"
          :width="DefaultNuxtImageWidth"
        />
      </figure>
      <hr class="my-4">
      <div class="prose max-w-full">
        <ContentRenderer
          id="article"
          class="max-w-full"
          :value="page"
        />
      </div>
      <hr class="my-4">
      <div>
        <Donation />
      </div>
      <Categories
        :categories="page.categories"
      />
      <Tags
        :tags="page.tags"
      />
      <BottomNavbar
        :filepath="page._file"
      />
    </div>
    <div class="w-52 sticky top-4 h-1 hidden lg:block">
      <TableOfContent
        article-id="article"
      />
    </div>
  </div>
</template>
<style lang="scss">
.youtube-player {
  @apply w-full;
  @apply aspect-video;
}
</style>
