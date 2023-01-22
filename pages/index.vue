<script lang="ts" setup>
definePageMeta({
  layout: 'home'
})

const { t } = useI18n()

</script>
<template>
  <div class="hero h-full w-full">
    <div class="max-w-4xl">
      <h1 class="text-7xl font-bold animate__animated animate__fadeIn">
        {{ t('views.home.title') }}
      </h1>
      <p class="py-6 text-2xl animate__animated animate__fadeIn animate__delay-1s">
        {{ t('views.home.description') }}
      </p>
      <NuxtLink
        :to="localePath('/contact')"
      >
        <button class="btn btn-primary animate__animated animate__fadeIn animate__delay-1s">
          {{ t('menus.contact') }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
