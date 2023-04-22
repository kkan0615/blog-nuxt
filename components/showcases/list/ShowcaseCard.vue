<script setup lang="ts">
import { useI18n } from '#imports'
import { Icon } from '@iconify/vue'
import dayjs from 'dayjs'

const DefaultNuxtImagePath = '/assets/blog-no-image.jpg'
const DefaultNuxtImageAlt = 'NuxtImage'
const DefaultNuxtImageHeight = 1024
const DefaultNuxtImageWidth = 576

const { t } = useI18n()

interface Props {
  blog: any,
  dense?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  blog: () => { return {} as any },
  dense: false,
})

</script>
<template>
  <div class="card rounded bg-base-200/50 hover:scale-105 transition ease-in-out duration-300">
    <NuxtLink
      class="flex flex-col h-full"
      :to="localePath(blog._path)"
    >
      <figure class="rounded-t">
        <NuxtImg
          v-if="blog.image && blog.image.path"
          class="aspect-video"
          :src="blog.image.path"
          :alt="blog.image.alt || DefaultNuxtImageAlt"
          :height="blog.image.height || DefaultNuxtImageHeight"
          :width="blog.image.width || DefaultNuxtImageWidth"
          preload
        />
        <!-- @TODO: No width and height may generate performance issue -->
        <NuxtImg
          v-else
          class="aspect-video"
          preload
          fit="fill"
          :src="DefaultNuxtImagePath"
          :alt="DefaultNuxtImageAlt"
          :width="DefaultNuxtImageAlt"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title ">
          {{ blog.title }}
        </h2>
        <p v-if="!dense">
          {{ blog.description }}
        </p>
        <div class="">
          <div class="mt-2 card-actions">
            <Icon icon="material-symbols:folder-open-outline-rounded" />
            <div
              v-for="category in blog.categories"
              :key="category"
              class="badge badge-outline badge-md lg:badge-sm"
            >
              {{ t(`labels.showcaseCategories.${category}`) }}
            </div>
          </div>
          <div class="mt-2 card-actions text-md lg:text-sm">
            <div
              v-for="tag in blog.tags"
              :key="tag"
              class="badge badge-outline badge-md lg:badge-sm"
            >
              {{ t(`labels.showcaseTags.${tag}`) }}
            </div>
          </div>
          <div class="mt-2 card-actions text-md lg:text-sm">
            <div class="ml-auto">
              {{ dayjs(blog.lastUpdated).format('ll') }}
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
