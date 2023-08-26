<script lang="ts" setup>
import { PostList } from '~/types/post'
import Footer from '~/layouts/components/Footer.vue'
import { Icon } from '@iconify/vue'

const LIMIT_CARDS = 3

definePageMeta({
  layout: 'home',
  scrollToTop: true,
})

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

const { data: showcaseList } = await useAsyncData<PostList[] >('showcases', async () => await queryContent<PostList>('showcases/')
  .where({
    _draft: { $not: true },
    locale: locale.value,
  })
  .sort({ date: -1 })
  .limit(LIMIT_CARDS)
  .find())

const observer = ref<IntersectionObserver | null>(null)

onMounted(() => {
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
})

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value?.disconnect()
    observer.value = null
  }
})

</script>
<template>
  <main>
    <div class="relative h-screen mb-4 bg-gray-500">
      <div class="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-30 lg:opacity-80 bg-fixed parallax-img" />
      <div class="h-full w-full flex items-center">
        <div class="max-w-4xl mx-auto w-full p-4 lg:p-0">
          <h1
            class="text-4xl lg:text-7xl font-bold animate__animated animate__fadeIn text-white"
            style="font-family: 'Lucida Calligraphy', serif;"
          >
            {{ t('views.home.title') }}
          </h1>
          <p class="py-6 text-xl lg:text-2xl animate__animated animate__fadeIn animate__delay-1s text-white">
            {{ t('views.home.description') }}
          </p>
          <div class="space-x-4">
            <NuxtLink :to="localePath('/contact')">
              <button class="btn btn-primary swing-in-top-fwd rounded-full">
                <Icon
                  class="text-xl"
                  icon="mdi:contact-outline"
                />
                <span class="ml-1">
                  {{ t('menus.contact') }}
                </span>
              </button>
            </NuxtLink>
            <NuxtLink :to="localePath('/blogs')">
              <button class="btn btn-secondary text-white swing-in-top-fwd rounded-full">
                <Icon
                  class="text-xl"
                  icon="mdi:blog-outline"
                />
                <span class="ml-1">
                  {{ t('menus.blogs') }}
                </span>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <section class="max-w-4xl mx-auto p-4 lg:py-4">
      <h2
        class="text-3xl font-bold capitalize animate__animated"
        data-animate="animate__fadeInUp"
      >
        {{ t('views.home.sections.blogs.title') }}
        <NuxtLink :to="localePath('/blogs')">
          <button
            class="btn btn-primary btn-sm"
            type="button"
          >
            {{ t('commons.btns.more') }}
          </button>
        </NuxtLink>
      </h2>
      <p class="text-lg my-2">
        {{ t('views.home.sections.blogs.description') }}
      </p>
      <div
        v-show="blogList?.length !== 0"
        class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-0 md:py-4 md:p-0"
      >
        <BlogsListBlogCard
          v-for="blog in blogList"
          :key="blog._path"
          class="animate__animated"
          data-animate="animate__fadeIn"
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
    <section class="max-w-4xl mx-auto p-4 lg:py-4">
      <h2
        class="text-3xl font-bold capitalize animate__animated"
        data-animate="animate__fadeInUp"
      >
        {{ t('views.home.sections.showcases.title') }}
        <NuxtLink :to="localePath('/showcases')">
          <button
            class="btn btn-primary btn-sm"
            type="button"
          >
            {{ t('commons.btns.more') }}
          </button>
        </NuxtLink>
      </h2>
      <p class="text-lg my-2">
        {{ t('views.home.sections.showcases.description') }}
      </p>
      <div
        v-show="showcaseList?.length !== 0"
        class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-0 md:py-4 md:p-0"
      >
        <ShowcasesListShowcaseCard
          v-for="showcase in showcaseList"
          :key="showcase._path"
          :blog="showcase"
          class="animate__animated"
          data-animate="animate__fadeIn"
        />
      </div>
      <p
        v-show="showcaseList?.length === 0"
        class="py-4 text-center"
      >
        {{ t('commons.placeholders.noData') }}
      </p>
    </section>
    <Footer class="max-w-4xl mx-auto" />
  </main>
</template>
<style>
.parallax-img {
  background-image: url("/assets/home/background.webp");
}
</style>
