<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useClipboard } from '@vueuse/core'
interface Props {
  path: string
}

const props = defineProps<Props>()
const { copy, copied, text } = useClipboard()

const handleCopyLink = async () => {
  await copy(`${location.origin}${props.path}`)
}

</script>
<template>
  <button
    class="btn btn-sm btn-ghost"
    type="button"
    @click="handleCopyLink"
  >
    <Icon
      v-if="copied"
      icon="material-symbols:check-small-rounded"
    />
    <Icon
      v-else
      icon="mdi:link-variant"
    />
  </button>
</template>
