<script setup lang="ts">
import type { ButtonSize } from '@nuxt/ui/dist/runtime/types'
import { useClipboard } from '@vueuse/core'

const props = withDefaults(defineProps<{
  url: string
  size: ButtonSize
}>(), {
  size: 'sm'
})

const { copy, isSupported, copied } = useClipboard()
const toast = useToast()

const handleCopyURL = async () => {
  if (isSupported.value) {
    await copy(`${location.origin}${props.url}`)
    toast.add({
      title: 'Successfully copied',
      color: 'green',
    })
  }
}
</script>
<template>
  <div class="flex items-center">
    <UTooltip text="Copy URL">
      <UButton
        :icon="copied ? 'i-heroicons-check-16-solid' : 'i-lucide-link'"
        color="white"
        variant="outline"
        :size="size"
        @click.prevent.stop="handleCopyURL"
      />
    </UTooltip>
  </div>
</template>
