<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to: RouteLocationRaw,
  activeKey: string
}>()

const route = useRoute()
console.log('route', route);


const isActive = computed(() => {
  if (!route.name?.toString()) return false
  const name = route.name.toString().split('__')[0]?.split('-')[0] || ''
  if (!name) return false

  return name && name.toLocaleLowerCase() === props.activeKey
})

</script>
<template>
  <li class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary capitalize" :class="{
    'text-primary': isActive,
  }">
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </li>
</template>
