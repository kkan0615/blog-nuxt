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
    class="opacity-70 font-black px-2 capitalize"
    :class="{
      'border-l-2': active,
      'border-primary': active,
      'opacity-100': active,
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
