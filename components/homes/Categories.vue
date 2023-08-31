<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const appConfig = useAppConfig()

</script>
<template>
  <section>
    <div
      class="flex items-center animate__animated mb-1"
      data-animate="animate__fadeInUp"
    >
      <h2 class="text-3xl font-black capitalize ">
        {{ t('views.home.sections.categories.title') }}
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
    <p class="text-gray-800 dark:text-gray-300 mb-4">
      {{ t('views.home.sections.categories.description') }}
    </p>
    <div
      v-for="(categoryEl, key) in appConfig.blogTags"
      :key="key"
    >
      <h3 class="text-lg font-bold">
        {{ t(`labels.blogCategories.${key}`) }}
      </h3>
      <div class="grid grid-cols-3 xl:grid-cols-6 gap-4 p-0 md:py-2 md:p-0">
        <NuxtLink
          v-for="tagEl in categoryEl"
          :key="tagEl"
          :to="{
            path: localePath('blogs'),
            query: {
              // locales: route.query.locales,
              categories: key,
              tags: tagEl,
            }
          }"
        >
          <button class="btn btn-outline rounded-full w-full normal-case">
            {{ t(`labels.blogTags.${tagEl}`) }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
