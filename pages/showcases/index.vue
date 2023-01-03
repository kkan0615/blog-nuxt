<script setup lang="ts">
import { useAsyncData, useRoute } from '#app'
import { useI18n } from '#imports'
import { useLayoutStore } from '~/stores/layout'

const route = useRoute()
const { t, locale } = useI18n()
const layoutStore = useLayoutStore()

// SEO
useHead({
  title: `${t('menus.showcases')} | ${t('seo.title')}`,
  meta: [
    { name: 'description', content: `${t('menus.descriptions.showcases')} | ${t('seo.applicationName')}` },
  ],
})

layoutStore.setHeaderTitle(t('menus.showcases'))

const { data: list, refresh } = await useAsyncData('showcases', () =>
  queryContent('/showcases')
    .where({
      title: { $contains: route.query.search } as any,
      locale: { $in: ((route.query.locales || locale.value) as string).split(',').filter((el) => !!el) } as any,
      categories: { $in: route.query.categories ?
        (route.query.categories as string).split(',').filter((el) => !!el) :
        undefined
      } as any,
      tags: { $in: route.query.tags ?
        (route.query.tags as string).split(',').filter((el) => !!el) :
        undefined
      } as any,
    })
    .find()
)
</script>
<template>
  <div>
    Showcases
  </div>
</template>
