<script setup lang="ts">
import { useAsyncData } from '#app'
import PriceCard from '~/components/requests/PriceCard.vue'

const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const { t, locale } = useI18n()

const { data: list, refresh } = await useFetch('/api/prices', {
  query: {
    locale,
  }
})

// SEO
useHead({
  title: `${t('menus.blogs')} | ${t('seo.title')}`,
  meta: [
    { name: 'description', content: `${t('menus.descriptions.blogs')} | ${t('seo.applicationName')}` },
  ],
})

</script>
<template>
  <div class="max-w-7xl mx-auto">
    <div class="card">
      <div class="card-body text-center bg-base-300">
        <p>
          Email me with service name that you would like!
        </p>
        <div>
          <a
            :href="`mailto:${appConfig.profile.email}`"
            class="mt-2 link"
          >
            {{ appConfig.profile.email }}
          </a>
        </div>
      </div>
    </div>
    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-4">
      <PriceCard
        v-for="(data, index) in list"
        :key="index"
        :data="data"
      />
    </div>
  </div>
</template>
