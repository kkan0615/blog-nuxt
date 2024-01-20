<script setup lang="ts">
import type { Toc } from '@nuxt/content/dist/runtime/types'

defineProps<{
  toc?: Toc
}>()

</script>
<template>
  <div>
    <ul>
      <li class="font-bold mb-1">
        Table of Contents
      </li>
      <UiTocItem v-if="toc?.links" :links="toc.links" />
    </ul>
  </div>
</template>
