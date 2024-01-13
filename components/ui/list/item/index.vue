<script lang="ts" setup>
defineProps<{
  isActive: boolean
}>()
</script>
<template>
  <li
    class="w-full px-2 py-1.5 font-normal text-sm"
    :class="{
      'bg-blue-600 text-white': isActive,
      'hover:bg-gray-100 hover:dark:bg-gray-800': !isActive,
    }"
  >
    <slot />
  </li>
</template>
