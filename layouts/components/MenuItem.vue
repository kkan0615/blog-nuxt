<script setup lang="ts">

interface Props {
  to: string,
  active: boolean
  query?: Record<string, any>
}

defineProps<Props>()
</script>
<template>
  <NuxtLink
    class="font-black px-2 capitalize"
    :class="{
      'opacity-70': !active,
      'border-l-2 border-primary opacity-100': active,
    }
    "
    :to="{
      path: localePath(to),
      query: query
    }"
  >
    <slot />
  </NuxtLink>
</template>
