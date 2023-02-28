<script setup lang="ts">

interface Props {
  to: string
  query?: Record<string, any>
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    class="capitalize font-black first-letter:text-primary hover-underline-animation"
    :to="{
      path: localePath(to),
      query: query
    }"
  >
    <span class="text-base-content">
      <slot />
    </span>
  </NuxtLink>
</template>
<style>
.hover-underline-animation {
  @apply relative text-primary inline-block;
}

.hover-underline-animation::after {
  content: '';
  @apply bg-primary absolute w-full bottom-0 left-0 ;
  transform: scaleX(0);
  height: 2px;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
