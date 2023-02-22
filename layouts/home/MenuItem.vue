<script setup lang="ts">

interface Props {
  to: string
  query?: Record<string, any>
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    class="capitalize font-black first-letter:text-primary"
    :to="{
      path: localePath(to),
      query: query
    }"
  >
    <slot />
  </NuxtLink>
</template>
