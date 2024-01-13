<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <UContainer class="mt-14 py-3">
    Slug: {{ route.params.slug }}
  </UContainer>
</template>
