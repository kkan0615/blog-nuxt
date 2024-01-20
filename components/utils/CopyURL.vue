<script setup lang="ts">
import type { ButtonSize } from '@nuxt/ui/dist/runtime/types'
import { useClipboard } from '@vueuse/core'

const props = withDefaults(defineProps<{
  url: string
  size: ButtonSize
}>(), {
  size: 'sm'
})

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
        :size="size"
        @click.prevent.stop="handleCopyURL"
      />
    </UTooltip>
  </div>
</template>
