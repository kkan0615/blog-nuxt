<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

interface Props {
  code: string
  language?: string
  filename?: string
}

const props = defineProps<Props>()

const { copy, copied } = useClipboard()

const handleCopy = () => {
  copy(props.code)
}

</script>

<template>
  <div class="max-w-full py-2 text-white bg-[#1f2937] rounded-lg">
    <div class="code-container max-w-full overflow-x-auto rounded">
      <div class="flex items-center px-4 mb-1">
        <div class="mr-auto uppercase text-xs">
          {{ language }}
        </div>
        <UTooltip text="Copy">
          <UButton
            class="text-white"
            :icon="copied ? 'i-heroicons-check-16-solid' : 'i-heroicons-clipboard'"
            size="xs"
            color="white"
            variant="ghost"
            @click="handleCopy"
          />
        </UTooltip>
      </div>
      <slot />
    </div>
  </div>
</template>

<style>
.code-container pre {
  @apply my-0 py-0;
}
</style>
