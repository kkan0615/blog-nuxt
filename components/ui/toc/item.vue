<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types'

defineProps<{
  links: TocLink[]
  activeId: string
}>()

</script>
<template>
  <li
    v-for="linkEl in links"
    :key="linkEl.id"
  >
    <NuxtLink
      :class="{
        'text-stone-500': linkEl.id !== activeId,
        'text-primary font-semibold': linkEl.id === activeId,
      }"
      :to="`#${linkEl.id}`"
    >
      {{ linkEl.text }}
    </NuxtLink>
    <ul
      v-if="linkEl.children"
      class="pl-3"
    >
      <UiTocItem
        :links="linkEl.children"
        :active-id="activeId"
      />
    </ul>
  </li>
</template>
