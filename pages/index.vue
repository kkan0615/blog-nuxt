<script lang="ts" setup>
definePageMeta({
  layout: 'home'
})

const { t } = useI18n()

</script>
<template>
  <div class="hero h-full">
    <div class="hero-content max-w-4xl lg:space-x-12 flex-col lg:flex-row-reverse">
      <NuxtImg
        src="/assets/home/hero.jpg"
        alt="left-image"
        class="max-w-sm rounded-full shadow-2xl animate__animated animate__fadeIn"
        height="250"
        width="250"
      />
      <div>
        <h1 class="text-5xl font-bold animate__animated animate__bounce">
          {{ t('views.home.title') }}
        </h1>
        <p class="py-6 text-xl">
          {{ t('views.home.description') }}
        </p>
        <NuxtLink
          :to="localePath('/contact')"
        >
          <button class="btn btn-primary">
            {{ t('menus.contact') }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
