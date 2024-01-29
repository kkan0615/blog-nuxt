<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { camelCase } from 'change-case'

const props = defineProps<{
  to: RouteLocationRaw,
  activeKey: string
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const isActive = computed(() => {
  if (!route.name?.toString()) { return false }
  const name = route.name.toString().split('__')[0] || ''
  if (!name) { return false }

  return name && name.toLocaleLowerCase().includes(props.activeKey)
})

const menuName = computed(() => t(`seo.${camelCase(props.activeKey)}.menuName`))

</script>
<template>
  <li
    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary capitalize"
    :class="{
      'text-primary': isActive,
    }"
  >
    <NuxtLink :to="localePath(to)">
      {{ menuName }}
    </NuxtLink>
  </li>
</template>
