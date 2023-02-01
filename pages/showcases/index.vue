<script setup lang="ts">
import { useAsyncData, useRoute } from '#app'
import { useI18n } from '#imports'
import { useLayoutStore } from '~/stores/layout'
import ShowcaseCard from '~/components/showcases/list/ShowcaseCard.vue'
import Navbar from '~/components/showcases/list/Navbar.vue'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t, locale } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const layoutStore = useLayoutStore()

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  }
})

// SEO
useHead({
  title: `${t('menus.showcases')} | ${t('seo.title')}`,
  meta: [
    { name: 'description', content: `${t('menus.descriptions.showcases')} | ${t('seo.applicationName')}` },
    ...(head.value.meta || []).map(metaEl => {
      return {
        name: metaEl.name,
        property: metaEl.property,
        content: metaEl.content,
      }
    })
  ],
  link: [
    { rel: 'canonical', href: `${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}${route.path}` },
    ...(head.value.link || []).map(linkEl => {
      return {
        id: linkEl.id,
        rel: linkEl.rel,
        href: linkEl.href,
        hreflang: linkEl.hreflang
      }
    })
  ]
})

layoutStore.setHeaderTitle(t('menus.showcases'))

const { data: list, refresh } = await useAsyncData('showcases', async () =>
  await queryContent('/showcases')
    .where({
      title: { $contains: route.query.search as string },
      locale: { $in: ((route.query.locales || locale.value) as string).split(',').filter((el) => !!el) },
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
  <div class="max-w-7xl mx-auto">
    <Navbar @search="refresh" />
    <div
      v-if="list && list.length > 0"
      class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-0 md:p-4 md:p-0"
    >
      <!--      <ContentList-->
      <!--        v-slot="{ list }"-->
      <!--        :query="query"-->
      <!--      >-->
      <ShowcaseCard
        v-for="blog in list"
        :key="blog._path"
        :blog="blog"
        class="card bg-base-300"
      />
      <!--      </ContentList>-->
    </div>
    <div
      v-else
      class="flex justify-center items-center h-64"
    >
      <div
        class="text-4xl font-bold capitalize"
      >
        {{ t('commons.placeholders.noSearchData') }}
      </div>
    </div>
  </div>
</template>
