<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  to: RouteLocationRaw,
  activeKey: string
}>()

const route = useRoute()
const localePath = useLocalePath()

const isActive = computed(() => {
  if (!route.name?.toString()) { return false }
  const name = route.name.toString().split('__')[0]?.split('-')[0] || ''
  if (!name) { return false }

  return name && name.toLocaleLowerCase() === props.activeKey
})

</script>
<template>
  <li
    class="text-lg flex items-center gap-1 hover:text-primary capitalize py-1.5"
  >
    <div
      class="px-3"
      :class="{
        'border-l-4 border-primary-500 text-primary !px-1.5': isActive,
      }"
    >
      <NuxtLink :to="localePath(to)">
        <slot />
      </NuxtLink>
    </div>
  </li>
</template>
