<script setup lang="ts">
import dayjs from 'dayjs'
import { Icon } from '@iconify/vue'
import { useLayoutStore } from '~/stores/layout'
import { PostDetail } from '~/types/post'
import TableOfContent from '~/components/TableOfContent.client.vue'
import BottomNavbar from '~/components/showcases/detail/BottomNavbar.vue'
import Tags from '~/components/showcases/detail/Tags.vue'
import Categories from '~/components/showcases/detail/Categories.vue'
import DownloadsDropdown from '~/components/showcases/detail/DownloadsDropdown.vue'
import Back from '~/components/btns/Back.vue'
import hljs from 'highlight.js'

const DefaultNuxtImagePath = '/assets/blog-no-image.jpg'
const DefaultNuxtImageAlt = 'NuxtImage'
const DefaultNuxtImageHeight = 1024
const DefaultNuxtImageWidth = 576

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const { t } = useI18n()
const layoutStore = useLayoutStore()
const { data: page } =
    await useAsyncData('page-data', queryContent<PostDetail>(`/showcases/${route.params.slug[0]}/${route.params.slug[1]}`).findOne, {
      server: true
    })
// const page = await queryContent(`/blogs/${route.params.slug}`).findOne()

/* Error handling - 404 */
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
// SEO
useHead({
  title: page.value.title,
  titleTemplate: (titleChunk) => (
    titleChunk ? `${titleChunk} | ${t('seo.title')}` : t('seo.title')
  ),
  meta: [
    { name: 'description', content: page.value?.description },
    { name: 'date', content: dayjs(page.value?.lastUpdated).format('ll') },
    { name: 'keywords', content: `${page.value.tags.join(' ')} ${page.value.categories.join(' ')}` },
    { name: 'og:image', content: page.value?.image
      ? `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}${page.value.image}`
      : `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}${DefaultNuxtImagePath}` },
    { name: 'twitter:image', content: page.value
      ? `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}${page.value.image}`
      : `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}${DefaultNuxtImagePath}` },
    { name: 'language', content: page.value.locale }
  ],
  link: [
    { rel: 'canonical', href: `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}/showcases/${route.params.slug[0]}/${route.params.slug[1]}` },
  ]
})

layoutStore.setHeaderTitle(t('menus.showcases'))

onMounted(() => {
  // Code block highlight
  hljs.highlightAll()
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

</script>
<template>
  <div class="max-w-5xl mx-auto flex flex-col-reverse justify-between gap-x-10 xl:flex-row">
    <div class="grow w-1 px-0 md:px-12">
      <Back />
      <h1 class="text-3xl font-bold mb-4">
        {{ page.title }}
      </h1>
      <div class="flex text-sm mb-2">
        <div
          v-if="page.github"
          class="mr-4"
        >
          <a
            class="link inline-flex items-center"
            :href="page.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="mdi:github"
              class="text-xl mr-1"
            />
            Github Link
          </a>
        </div>
        <DownloadsDropdown
          v-if="page.downloads"
          :downloads="page.downloads"
        />
      </div>
      <div class="flex text-sm mb-2">
        <span class="mr-1 capitalize">
          {{ t('commons.labels.lastUpdated') }}:
        </span>
        <span>
          {{ dayjs(page.lastUpdated).format('ll') }}
        </span>
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
      <div class="prose prose-lg max-w-full">
        <ContentRenderer
          id="article"
          class="max-w-full"
          :value="page"
        />
      </div>
      <hr class="my-4">
      <Categories :categories="page.categories" />
      <Tags :tags="page.tags" />
      <div class="mt-8">
        <ClientOnly>
          <LazyAdvertisementsAmazonBanner />
        </ClientOnly>
      </div>
      <BottomNavbar :filepath="page._file" />
    </div>
    <div class="shrink sticky top-4 h-1 w-52 hidden lg:block">
      <!--      <client-only>-->
      <!--        <TableOfContent-->
      <!--          article-id="article"-->
      <!--        />-->
      <!--      </client-only>-->
      <TOC
        article-id="article"
        :toc="page.body.toc"
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
