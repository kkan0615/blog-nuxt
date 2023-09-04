<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { PostList } from '~/types/post'

// Maximum card count
const LIMIT_CARDS = 3

const { t, locale } = useI18n()
const localePath = useLocalePath()

const { data: blogList } = await useAsyncData<PostList[] >('blogs', async () => await queryContent<PostList>('blogs/')
  .where({
    _draft: { $not: true },
    locale: locale.value,
  })
  .sort({ date: -1 })
  .limit(LIMIT_CARDS)
  .find())
</script>
<template>
  <section>
    <div
      class="flex items-center animate__animated mb-1"
      data-animate="animate__fadeInUp"
    >
      <h2 class="text-3xl font-black capitalize ">
        {{ t('views.home.sections.blogs.title') }}
      </h2>
      <div class="mx-auto" />
      <NuxtLink :to="localePath('/blogs')">
        <button
          class="btn btn-primary btn-ghost btn-sm"
          type="button"
        >
          {{ t('commons.btns.more') }}
          <Icon
            class="text-xl"
            icon="material-symbols:arrow-forward"
          />
        </button>
      </NuxtLink>
    </div>
    <p class="text-gray-800 dark:text-gray-300">
      {{ t('views.home.sections.blogs.description') }}
    </p>
    <div
      v-show="blogList?.length !== 0"
      class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-4 p-0 md:py-4 md:p-0"
    >
      <BlogsListBlogCard
        v-for="blog in blogList"
        :key="blog._path"
        class="animate__animated"
        data-animate="animate__fadeIn"
        dense
        :blog="blog"
      />
    </div>
    <p
      v-show="blogList?.length === 0"
      class="py-4 text-center"
    >
      {{ t('commons.placeholders.noData') }}
    </p>
  </section>
</template>
