<script setup lang="ts">
import { useLayoutStore } from '~/stores/layout'
import ProfileCard from '~/components/contacts/ProfileCard.vue'
import RequestCard from '~/components/contacts/RequestCard.vue'

const { t } = useI18n()
const runtimeConfig = useRuntimeConfig()
const layoutStore = useLayoutStore()

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  }
})
// SEO
useHead({
  title: `${t('menus.contact')} | ${t('seo.title')}`,
  meta: [
    { name: 'description', content: `${t('menus.descriptions.blogs')} | ${t('seo.applicationName')}` },
  ],
})
layoutStore.setHeaderTitle(t('menus.contact'))

</script>
<template>
  <div class="max-w-7xl mx-auto">
    <ProfileCard />
    <RequestCard />
  </div>
</template>
