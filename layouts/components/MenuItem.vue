<template>
  <NuxtLink
    class="opacity-70 uppercase font-black px-2"
    active-class="border-l-2 border-primary opacity-100"
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
