<template>
  <NuxtLink
    class="uppercase font-black first-letter:text-primary"
    :to="localePath(to)"
  >
    <slot />
  </NuxtLink>
</template>
<script setup lang="ts">

interface Props {
  to: string
}

defineProps<Props>()
</script>
