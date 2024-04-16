<script lang="ts" setup>
defineProps<{
  project: any // Project
}>()

const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    class="h-full"
    :to="localePath(project.id)"
  >
    Project
  </NuxtLink>
</template>

<style>

</style>
