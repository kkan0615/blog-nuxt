<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('seo.homes.title')
})
</script>
<template>
  <HomesHero />
  <HomesAboutMe />
  <HomesBlogs />
  <UContainer>
    <p>{{ $t('welcome') }}</p>
    <UButton icon="i-heroicons-rocket-launch" label="Get Started" />
  </UContainer>
</template>
