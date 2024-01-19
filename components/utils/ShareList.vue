<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps<{
  url: string
}>()

const { copy, isSupported } = useClipboard()

const handleCopyURL = async () => {
  if (isSupported.value) {
    await copy(`${location.origin}${props.url}`)
  }
}
</script>
<template>
  <div class="flex items-center">
    <UTooltip text="Copy URL">
      <UButton
        icon="i-lucide-link"
        color="white"
        variant="outline"
        @click.prevent.stop="handleCopyURL"
      />
    </UTooltip>
  </div>
</template>
