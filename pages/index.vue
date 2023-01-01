<script lang="ts" setup>
import { definePageMeta, useI18n } from '#imports'

definePageMeta({
  layout: 'home'
})

const { t } = useI18n()

</script>
<template>
  <div class="hero h-full">
    <div class="hero-content max-w-4xl lg:space-x-12 flex-col lg:flex-row-reverse">
      <!--      <NuxtImg-->
      <!--        src="/assets/home/hero.jpg"-->
      <!--        alt="left-image"-->
      <!--        class="max-w-sm rounded-full shadow-2xl"-->
      <!--        height="300"-->
      <!--        width="300"-->
      <!--      />-->
      <div>
        <h1 class="text-5xl font-bold">
          {{ t('views.home.title') }}
        </h1>
        <p class="py-6 text-xl">
          {{ t('views.home.description') }}
        </p>

        <button class="btn btn-primary">
          contact
        </button>
      </div>
    </div>
  </div>
</template>
