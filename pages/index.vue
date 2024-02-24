<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('seo.homes.title')
})
</script>
<template>
  <UtilsAnimationObserver />
  <HomesHero />
  <HomesAboutMe />
  <HomesBlogs />
  <!-- <HomesCategories /> -->
  <HomesTags />
</template>
