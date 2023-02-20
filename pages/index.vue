<script lang="ts" setup>
import { PostList } from '~/types/post'
import Footer from '~/layouts/components/Footer.vue'

definePageMeta({
  layout: 'home'
})

const { t, locale } = useI18n()
const { data: blogList } = await useAsyncData<PostList[] >('blogs', async () => await queryContent<PostList>('blogs/')
  .where({
    _draft: { $not: true },
    locale: locale.value,
  })
  .sort({ date: -1 })
  .limit(3)
  .find())

const { data: showcaseList } = await useAsyncData<PostList[] >('showcases', async () => await queryContent<PostList>('showcases/')
  .where({
    _draft: { $not: true },
    locale: locale.value,
  })
  .sort({ date: -1 })
  .limit(3)
  .find())

const observer = ref<IntersectionObserver | null>(null)

onMounted(() => {
  const sectionEls = document.querySelectorAll('section')
  if (!sectionEls.length) {
    throw createError({ statusCode: 404 })
  }

  observer.value = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      if (intersecting) {
        entry.target.classList.add('animate__fadeInDown')
        observer.unobserve(entry.target)
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
    observer.value.disconnect()
    observer.value = null
  }
})

</script>
<template>
  <main>
    <div class="relative h-screen">
      <div class="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-30 lg:opacity-60 bg-fixed parallax-img" />
      <div class="h-full flex justify-center items-center">
        <div class="max-w-4xl p-4 lg:p-0 flex flex-col">
          <h1 class="text-4xl lg:text-7xl font-bold animate__animated animate__fadeIn">
            {{ t('views.home.title') }}
          </h1>
          <p class="py-6 text-xl lg:text-2xl animate__animated animate__fadeIn animate__delay-1s">
            {{ t('views.home.description') }}
          </p>
          <NuxtLink
            :to="localePath('/contact')"
          >
            <button class="btn btn-primary btn-sm lg:btn-md animate__animated animate__fadeIn animate__delay-1s">
              {{ t('menus.contact') }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <section
      class="max-w-4xl mx-auto p-4 lg:py-4 animate__animated"
      data-animate="animate__fadeInDown"
    >
      <h2 class="text-3xl font-bold capitalize">
        {{ t('views.home.sections.blogs.title') }}
        <NuxtLink :to="localePath('/blogs')">
          <button
            class="btn btn-outline btn-primary btn-sm"
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
        v-if="blogList.length"
        class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-0 md:py-4 md:p-0"
      >
        <BlogsListBlogCard
          v-for="blog in blogList"
          :key="blog._path"
          :blog="blog"
        />
      </div>
      <p
        v-else
        class="py-4 text-center"
      >
        {{ t('commons.placeholders.noData') }}
      </p>
    </section>
    <section class="max-w-4xl mx-auto p-4 lg:py-4 animate__animated">
      <h2 class="text-3xl font-bold capitalize">
        {{ t('views.home.sections.showcases.title') }}
        <NuxtLink
          :to="localePath('/showcases')"
        >
          <button
            class="btn btn-outline btn-primary btn-sm"
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
        v-if="showcaseList.length"
        class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-0 md:py-4 md:p-0"
      >
        <ShowcasesListShowcaseCard
          v-for="showcase in showcaseList"
          :key="showcase._path"
          :blog="showcase"
        />
      </div>
      <p
        v-else
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
  background-image: url("/assets/home/background.jpg");
}
</style>
