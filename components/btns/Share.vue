<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useClipboard } from '@vueuse/core'
interface Props {
  path: string
}

const props = defineProps<Props>()

const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: 'Share',
      url: `${location.origin}${props.path}`
    })
  }
}

</script>
<template>
  <button
    class="btn btn-sm btn-ghost"
    type="button"
    @click="handleShare"
  >
    <Icon icon="material-symbols:share" />
  </button>
</template>
