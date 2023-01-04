<template>
  <NuxtLink
    class="opacity-70 font-black px-2 capitalize"
    :class="{
      'border-l-2': active,
      'border-primary': active,
      'opacity-100': active,
    }
    "
    :to="localePath(to)"
  >
    <slot />
  </NuxtLink>
</template>
<script setup lang="ts">

interface Props {
  to: string,
  active: boolean
}

defineProps<Props>()
</script>
