<template>
  <NuxtLink
    class="opacity-70 uppercase font-black px-2"
    :class="{
      'border-l-2': active,
      'border-primary': active,
      'opacity-100': active,
    }
    "
    active-class="border-l-2 border-primary opacity-100"
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
