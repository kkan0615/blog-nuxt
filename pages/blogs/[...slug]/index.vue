<script setup lang="ts">
import dayjs from 'dayjs'
import { useLayoutStore } from '~/stores/layout'
import { PostList, PostDetail, DefaultNuxtImagePath, DefaultNuxtImageAlt, DefaultNuxtImageHeight, DefaultNuxtImageWidth } from '~/types/post'
import { CommentSelect } from '~/types/models/comments'
import { Toc } from '@nuxt/content/dist/runtime/types'
import BottomNavbar from '~/components/blogs/detail/BottomNavbar.vue'
import Tags from '~/components/blogs/detail/Tags.vue'
import Categories from '~/components/blogs/detail/Categories.vue'
import Donation from '~/components/advertisements/Donation.vue'
import Back from '~/components/btns/Back.vue'
import BlogCard from '~/components/blogs/list/BlogCard.vue'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()
const layoutStore = useLayoutStore()

/* slug parameter return array like [en, en-1010100] */
const { data: page, error } = await useAsyncData<PostDetail>('page-data', async () =>
  await queryContent<PostDetail>(`/blogs/${route.params.slug[0]}/${route.params.slug[1]}`)
    .findOne()
)
/* Error handling - 404 */
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

/*
* Get similar blogs
* @TODO: Add random feature when there are many contents
*/
const { data: similarBlogs } = await useAsyncData('blogs', async () => {
  const list = await queryContent<PostList>('blogs/')
    .where({
      _draft: { $not: true },
      locale: { $in: ((route.query.locales || route.params.slug[0]) as string).split(',').filter((el) => !!el) },
      // @TODO: Open following codes when there are many contents
      categories: { $in: route.query.categories ?
        (route.query.categories as string).split(',').filter((el) => !!el) :
        undefined
      } as any,
      tags: { $in: route.query.tags ?
        (route.query.tags as string).split(',').filter((el) => !!el) :
        undefined
      } as any,
    })
    .limit(4) // For in case, there are same blog content as current blog
    .sort({ date: -1 })
    .find()

  return list.filter(blog => blog._id !== page.value?._id).slice(0, 3)
})

const { data: comments, pending: commentsPending, error: commentsError, refresh: refreshComments }
= await useFetch<CommentSelect[]>(`/api/posts/${page.value._id}/comments`)
// = useAsyncData('comments', async () => await $fetch<CommentSelect[]>(`/api/posts/${page.value._id}/comments`))

// SEO
useHead({
  title: page.value.title,
  titleTemplate: (titleChunk) => (
    titleChunk ? `${titleChunk} | ${t('seo.title')}` : t('seo.title')
  ),
  meta: [
    { name: 'description', content: page.value.description },
    { name: 'date', content:  dayjs(page.value.date).format('ll') },
    { name: 'keywords', content: `${page.value.tags.join(' ')} ${page.value.categories.join(' ')}` },
    { name: 'og:image', content: page.value.image
      ? `${runtimeConfig.public.NUXT_PUBLIC_SITE_URL}${page.value.image}`
      : `${runtimeConfig.public.NUXT_PUBLIC_SITE_URL}${DefaultNuxtImagePath}` },
    { name: 'twitter:image', content: page.value
      ? `${runtimeConfig.public.NUXT_PUBLIC_SITE_URL}${page.value.image}`
      : `${runtimeConfig.public.NUXT_PUBLIC_SITE_URL}${DefaultNuxtImagePath}` },
    { name: 'language', content: page.value.locale }
  ],
  link: [
    { rel: 'canonical', href: `${runtimeConfig.public.NUXT_PUBLIC_SITE_URL}/blogs/${route.params.slug[0]}/${route.params.slug[1]}` },
  ]
})

layoutStore.setHeaderTitle(t('menus.blogs'))

onMounted(() => {
  // Code block highlight
  // hljs.highlightAll()
  // When user enter the page with hash, scroll down to hash
  if (route.hash) {
    const contentDiv = document.getElementById('base-content')
    if (!contentDiv) return
    const hashEl = document.getElementById(route.hash.replace('#', ''))
    if (!hashEl) return
    contentDiv.scrollTo({
      top: hashEl.offsetTop,
      behavior: 'smooth'
    })
  }
})

// Resolve scroll behavior from similar blogs
router.beforeEach((guard) => {
  if (guard.hash) return
  const contentDiv = document.getElementById('base-content')
  if (!contentDiv) return
  contentDiv.scrollTo({
    top: 0,
  })
})

const handleRefreshComments = () => {
  refreshComments()
}

</script>
<template>
  <div class="max-w-5xl mx-auto flex p-2 lg:p-4">
    <div class="grow w-1 px-0 md:px-12">
      <Back />
      <h1 class="text-3xl font-bold mb-4">
        {{ page?.title }}
      </h1>
      <div class="flex mb-4">
        <div>
          <span class="mr-1 capitalize">
            {{ t('views.blogs.slug.posted') }}:
          </span>
          <span>
            {{ dayjs(page?.date).format('ll') }}
          </span>
        </div>
        <div class="ml-auto">
          {{ page?.readingTime.text }}
        </div>
      </div>
      <figure>
        <NuxtImg
          v-if="page.image && page.image.path"
          class="w-full"
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
      <div class="prose prose-lg max-w-full">
        <ContentRenderer
          id="article"
          class="max-w-full"
          :value="page"
        />
      </div>
      <hr class="my-4">
      <Categories
        :categories="page.categories"
      />
      <Tags
        :categories="page.categories"
        :tags="page.tags"
      />
      <!-- Additional bottom data -->
      <BottomNavbar
        :filepath="page._file"
      />
      <!-- Donation -->
      <div class="mt-4 block lg:hidden">
        <Donation />
      </div>
      <!-- More blog posts -->
      <h3 class="mt-4 text-xl font-bold opacity-80 capitalize mb-4 md:mb-0">
        {{ t('labels.furtherReading') }}
      </h3>
      <div
        v-if="similarBlogs && similarBlogs.length > 0"
        class="grid grid-cols-1 lg:grid-cols-3 gap-2 p-0 md:py-4 md:p-0 mt-2"
      >
        <BlogCard
          v-for="blog in similarBlogs"
          :key="blog._path"
          dense
          :blog="blog"
        />
      </div>
      <div class="flex">
        <div class="text-lg font-bold">
          Comments ({{ comments?.length || 0 }})
        </div>
      </div>
      <!--      <client-only>-->
      <blogs-detail-comment-form
        v-if="!!page?._id"
        :post-id="page._id"
        @success="handleRefreshComments"
      />
      <!--      </client-only>-->
      <blogs-detail-comments
        v-if="!!page?._id"
        :post-id="page._id"
        :comments="comments || []"
        @refresh="handleRefreshComments"
      />
    </div>
    <div
      class="shrink sticky top-4 h-1 w-52 hidden lg:block"
    >
      <table-of-content
        article-id="article"
        :toc="page?.body.toc || {} as Toc"
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
