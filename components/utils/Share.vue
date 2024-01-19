<script setup lang="ts">
import { useShare } from '@vueuse/core'

const props = defineProps<{
  url: string
}>()

const { share, isSupported } = useShare()
const handleClick = async () => {
  if (isSupported) {
    await share({
      url: `${location.origin}${props.url}`,
    })
  }
}
</script>
<template>
  <UTooltip text="Share">
    <UButton
      icon="i-lucide-share-2"
      color="white"
      variant="outline"
      @click.prevent.stop="handleClick"
    />
  </UTooltip>
</template>
