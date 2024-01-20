<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types'

defineProps<{
  links: TocLink[]
}>()

</script>
<template>
  <li
    v-for="linkEl in links"
    :key="linkEl.id"
  >
    {{ linkEl.text }}
    <ul
      v-if="linkEl.children"
      class="pl-3"
    >
      <UiTocItem :links="linkEl.children" />
    </ul>
  </li>
</template>
