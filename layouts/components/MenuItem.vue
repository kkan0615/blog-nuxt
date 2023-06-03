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
    class="font-black capitalize px-0 text-lg"
    :to="{
      path: localePath(to),
      query: query
    }"
  >
    <div
      class="px-2"
      :class="{
        'opacity-70': !active,
        'border-l-4 border-primary opacity-100': active,
      }"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
