<script setup lang="ts">
defineProps<{
  to: string,
  active?: boolean
}>()
</script>
<template>
  <li
    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
    :class="{
      'text-primary': active,
    }"
  >
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </li>
</template>
