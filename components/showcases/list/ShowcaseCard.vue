<script setup lang="ts">
import { useI18n } from '#imports'
import { Icon } from '@iconify/vue'
import dayjs from 'dayjs'

const DefaultNuxtImagePath = '/assets/blog-no-image.jpg'
const DefaultNuxtImageAlt = 'NuxtImage'
const DefaultNuxtImageHeight = 800
const DefaultNuxtImageWidth = 500

const { t } = useI18n()

interface Props {
  blog: any
}

const props = defineProps<Props>()

</script>
<template>
  <div class="card bg-base-300">
    <NuxtLink
      :to="localePath(blog._path)"
    >
      <figure>
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
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ blog.title }}
        </h2>
        <p>{{ blog.description }}</p>
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
        <div class="mt-1 card-actions text-md lg:text-sm">
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
            {{ dayjs(blog.date) }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>