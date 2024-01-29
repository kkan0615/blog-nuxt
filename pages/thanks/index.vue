<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('seo.thanks.title')
})
</script>
<template>
  <UContainer>
    <p>{{ $t('welcome') }}</p>
    <UButton icon="i-heroicons-rocket-launch" label="Get Started" />
  </UContainer>
</template>
