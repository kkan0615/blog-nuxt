<script setup lang="ts">
import { useI18n } from '#imports'
import { Icon } from '@iconify/vue'
import dayjs from 'dayjs'
import { PostList } from '~/types/post'

const DefaultNuxtImagePath = '/assets/blog-no-image.jpg'
const DefaultNuxtImageAlt = 'NuxtImage'
const DefaultNuxtImageHeight = 800
const DefaultNuxtImageWidth = 500

const { t } = useI18n()

interface Props {
  blog: PostList
}

const props = defineProps<Props>()

const timeFromNow = computed(() => {
  const now = dayjs()
  const targetDate = dayjs(props.blog.date)
  if (targetDate.diff(now, 'dates') < 7) {
    return targetDate.fromNow()
  }
  return targetDate.format('ll')
})

const isNew = computed(() => {
  const now = dayjs()
  const targetDate = dayjs(props.blog.date)
  return now.diff(targetDate, 'day') < 2
})

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
        <div
          v-if="isNew"
          class="badge badge-secondary"
        >
          NEW
        </div>
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
            {{ t(`labels.categories.${category}`) }}
          </div>
        </div>
        <div class="mt-1 card-actions text-md lg:text-sm">
          <div
            v-for="tag in blog.tags"
            :key="tag"
            class="badge badge-outline badge-md lg:badge-sm"
          >
            {{ t(`labels.tags.${tag}`) }}
          </div>
        </div>
        <div class="mt-2 card-actions text-md lg:text-sm">
          <div>
            {{ blog.readingTime.text }}
          </div>
          <div class="ml-auto">
            {{ timeFromNow }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
