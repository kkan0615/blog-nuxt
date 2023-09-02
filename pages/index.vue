<script lang="ts" setup>
const { t, locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const runtimeConfig = useRuntimeConfig()

definePageMeta({
  layout: 'home',
  scrollToTop: true,
})

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

// SEO
useHead({
  title: 'Home',
  titleTemplate: (titleChunk) => (
    titleChunk ? `${titleChunk} | ${t('seo.title')}` : t('seo.title')
  ),
  link: [
    { rel: 'canonical', href: `${runtimeConfig.public.NUXT_PUBLIC_SITE_URL}${route.path}` },
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

// Observing
const observer = ref<IntersectionObserver | null>(null)

onMounted(() => {
  initAnimateObserver()
})

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value?.disconnect()
    observer.value = null
  }
})

const initAnimateObserver = () => {
  const sectionEls = document.querySelectorAll('[data-animate]:not([value=""])')
  if (!sectionEls.length) throw createError({ statusCode: 404 })

  observer.value = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      if (intersecting) {
        const animate = entry.target.getAttribute('data-animate')
        if (animate) {
          entry.target.classList.add(animate)
          observer.unobserve(entry.target)
        }
      }
    })
  }, {
    rootMargin: '0px',
    threshold: 0.1
  })

  sectionEls.forEach(sectionEl => observer.value?.observe(sectionEl))
}
</script>
<template>
  <main class="space-y-4">
    <HomesHero />
    <HomesAboutMe />
    <HomesBlogs />
    <HomesCategories />
  </main>
</template>
