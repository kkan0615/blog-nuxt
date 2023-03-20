<script setup lang="ts">
import { useLayoutStore } from '~/stores/layout'
import ProfileCard from '~/components/contacts/ProfileCard.vue'
import RequestCard from '~/components/contacts/RequestCard.vue'

const { t } = useI18n()
const layoutStore = useLayoutStore()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  }
})
// SEO
useHead({
  title: t('menus.contact'),
  titleTemplate: (titleChunk) => (
    titleChunk ? `${titleChunk} | ${t('seo.title')}` : t('seo.title')
  ),
  meta: [
    { name: 'description', content: `${t('menus.descriptions.blogs')} | ${t('seo.applicationName')}` },
    ...(head.value.meta || []).map(metaEl => {
      return {
        name: metaEl.name,
        property: metaEl.property,
        content: metaEl.content,
      }
    })
  ],
  link: [
    ...(head.value.link || []).map(linkEl => {
      return {
        id: linkEl.id,
        rel: linkEl.rel,
        href: linkEl.href,
        hreflang: linkEl.hreflang
      }
    })
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
