<script setup lang="ts">
import { TocLink } from '@nuxt/content/dist/runtime/types'

interface Props {
  content: TocLink
}


const props = defineProps<Props>()
const handleClick = (content: TocLink) => {
  const baseContentEl = document.getElementById('base-content')
  const linkEl = document.getElementById(content.id)
  if (baseContentEl && linkEl) {
    baseContentEl.scrollTo({
      top: linkEl.offsetTop,
      behavior: 'smooth',
    })
  }
}
</script>
<template>
  <li
    class="text-sm"
    :class="{
      'ml-2': content.depth === 3,
      'ml-4': content.depth === 4,
    }"
    @click="() => handleClick(content)"
  >
    <NuxtLink :href="`#${content.id}`">
      {{ content.text }}
    </NuxtLink>
    <ul
      v-if="content.children"
      class="mt-1"
    >
      <table-of-content-item
        v-for="child in content.children"
        :id="child.id"
        :key="child.id"
        :content="child"
      />
    </ul>
  </li>
</template>
