<script setup lang="ts">

interface Props {
  to: string
  query?: Record<string, any>
  isScrolled?: boolean
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    class="capitalize font-black"
    :class="{
      'text-white': !isScrolled,
    }"
    :to="{
      path: localePath(to),
      query: query
    }"
  >
    <span>
      <slot />
    </span>
  </NuxtLink>
</template>
<style>
</style>
