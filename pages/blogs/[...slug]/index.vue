<script setup lang="ts">
import { useAsyncData, useHead } from '#app'
import dayjs from 'dayjs'
import TableOfContent from '~/components/TableOfContent.vue'
import BottomNavbar from '~/components/blogs/detail/BottomNavbar.vue'

const DefaultNuxtImagePath = '/assets/blog-no-image.jpg'
const DefaultNuxtImageAlt = 'NuxtImage'
const DefaultNuxtImageHeight = 800
const DefaultNuxtImageWidth = 500

const route = useRoute()
const { t } = useI18n()

const { data: page } = await useAsyncData('page-data', queryContent(`/blogs/${route.params.slug}`).findOne)
// const page = await queryContent(`/blogs/${route.params.slug}`).findOne()
console.log(page.value)
// SEO
useHead({
  title: `${page.value?.title} | ${t('seo.title')}`,
  meta: [
    { name: 'description', content: page.value?.description },
  ],
})

</script>
<template>
  <div
    class="max-w-4xl mx-auto flex flex-col-reverse justify-between gap-6 xl:flex-row"
  >
    <div>
      <h1
        class="text-3xl font-bold mb-4"
      >
        {{ page.title }}
      </h1>
      <div
        class="flex text-sm mb-2"
      >
        <div>
          <span
            class="mr-1"
          >
            Posted:
          </span>
          <span>
            {{ dayjs(page?.date).format('ll') }}
          </span>
        </div>
        <div
          class="ml-auto"
        >
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
          :src="DefaultNuxtImagePath"
          :alt="DefaultNuxtImageAlt"
        />
      </figure>
      <hr
        class="my-4"
      >
      <div
        class="prose"
      >
        <ContentDoc
          v-slot="{ doc }"
          :head="false"
        >
          <ContentRenderer
            id="article"
            :value="doc"
          />
        </ContentDoc>
      </div>
      <BottomNavbar
        :filepath="page._file"
      />
    </div>
    <div
      class="w-60 sticky top-4 h-1 hidden lg:block"
    >
      <TableOfContent
        article-id="article"
      />
    </div>
  </div>
</template>
