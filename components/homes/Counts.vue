<script lang="ts" setup>
import dayjs from 'dayjs'
import { PostList } from '~/types/post'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const appConfig = useAppConfig()

const days = computed(() => dayjs().diff(dayjs(appConfig.startedAt), 'days').toLocaleString('en-US'))
const { data: postCounts, refresh } = await useAsyncData<string>('posts', async () => {
  return (await queryContent<PostList>('blogs/')
    .only(['_id'])
    .find()).length.toLocaleString('en-US')
})

</script>
<template>
  <section>
    <!--    <div-->
    <!--      class="flex items-center animate__animated mb-1"-->
    <!--      data-animate="animate__fadeInUp"-->
    <!--    >-->
    <!--      <h2 class="text-3xl font-black capitalize mb-2">-->
    <!--        About-->
    <!--      </h2>-->
    <!--    </div>-->
    <div class="md:flex md:items-center md:space-x-8 md:space-y-0 space-y-4">
      <div class="grow text-center">
        <div class="text-4xl font-bold">
          {{ t('views.home.sections.aboutMe.hello') }}
        </div>
        <p class="mt-4 text-lg">
          {{ t('views.home.sections.aboutMe.description1') }}<br>
          {{ t('views.home.sections.aboutMe.description2') }}
        </p>
        <NuxtLink :to="localePath('/blogs')">
          <button
            class="btn btn-primary mt-4"
            type="button"
          >
            Contact
          </button>
        </NuxtLink>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-4">
          <div class="stat bg-base-100 shadow rounded">
            <div class="stat-title text-gray-800 dark:text-gray-300 mb-2">
              {{ t('views.home.sections.aboutMe.counts.days') }}
            </div>
            <div class="stat-value">
              🎉 {{ days }}
            </div>
          </div>
          <div class="stat bg-base-100 shadow rounded">
            <div class="stat-title text-gray-800 dark:text-gray-300 mb-2">
              {{ t('views.home.sections.aboutMe.counts.posts') }}
            </div>
            <div class="stat-value">
              📃 {{ postCounts }}
            </div>
          </div>
          <!--          <div class="stat bg-base-100 shadow rounded">-->
          <!--            <div class="stat-title">-->
          <!--              Days after start-->
          <!--            </div>-->
          <!--            <div class="stat-value">-->
          <!--              89,400-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="stat bg-base-100 shadow rounded">-->
          <!--            <div class="stat-title">-->
          <!--              Days after start-->
          <!--            </div>-->
          <!--            <div class="stat-value">-->
          <!--              89,400-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>
