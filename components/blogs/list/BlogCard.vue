<script setup lang="ts">
import { useI18n } from '#imports'
import { Icon } from '@iconify/vue'
import dayjs from 'dayjs'
import { PostList, DefaultNuxtImagePath, DefaultNuxtImageAlt, DefaultNuxtImageHeight, DefaultNuxtImageWidth } from '~/types/post'
import ShareBtn from '~/components/btns/Share.vue'

// NEW Tag blog
const NewDay = 2

interface Props {
  blog: PostList
  noImage?: boolean
  isHideTime?: boolean
  dense?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  blog: () => { return {} as PostList },
  noImage: false,
  dense: false,
})
const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()

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
  return now.diff(targetDate, 'day') < NewDay
})
</script>
<template>
  <div class="card rounded hover:scale-105 transition ease-in-out duration-300 shadow-xl bg-base-100 rounded-xl">
    <NuxtLink
      class="flex flex-col h-full"
      :to="{
        path: localePath(blog._path),
        query: route.query
      }"
    >
      <div
        v-if="!noImage"
        class="rounded-t relative"
      >
        <div class="absolute right-2 -bottom-4 drop-shadow-xl">
          <ShareBtn
            :path="localePath(blog._path)"
          />
        </div>
        <div
          v-if="isNew"
          class="badge badge-accent text-white absolute right-2 top-2 drop-shadow-xl"
        >
          NEW
        </div>
        <NuxtImg
          v-if="blog.image && blog.image.path"
          class="aspect-video rounded-t-xl"
          :src="blog.image.path"
          :alt="blog.image.alt || DefaultNuxtImageAlt"
          :height="blog.image.height || DefaultNuxtImageHeight"
          :width="blog.image.width || DefaultNuxtImageWidth"
          preload
        />
        <!-- @TODO: No width and height may generate performance issue -->
        <NuxtImg
          v-else
          class="aspect-video rounded-t-xl"
          preload
          :src="DefaultNuxtImagePath"
          :alt="DefaultNuxtImageAlt"
        />
      </div>
      <div class="card-body">
        <h2 class="card-title">
          {{ blog.title }}
        </h2>
        <p v-if="!dense">
          {{ blog.description }}
        </p>
        <!-- categories -->
        <div
          v-if="blog.categories?.length"
          class="mt-2 card-actions"
        >
          <Icon icon="material-symbols:folder-open-outline-rounded" />
          <div
            v-for="category in blog.categories"
            :key="category"
            class="badge badge-outline badge-md lg:badge-sm"
          >
            {{ t(`labels.blogCategories.${category}`) }}
          </div>
        </div>
        <!-- Tags -->
        <div
          v-if="blog.tags?.length"
          class="mt-1 card-actions text-md lg:text-sm"
        >
          <div
            v-for="tag in blog.tags"
            :key="tag"
            class="badge badge-outline badge-md lg:badge-sm"
          >
            {{ t(`labels.blogTags.${tag}`) }}
          </div>
        </div>
        <!-- reading time and published date -->
        <div
          v-if="!isHideTime"
          class="mt-2 card-actions text-md lg:text-sm"
        >
          <div>{{ blog.readingTime?.text }}</div>
          <div class="ml-auto">
            {{ timeFromNow }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
