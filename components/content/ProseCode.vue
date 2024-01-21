<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

interface Props {
  code: string
  language?: string
  filename?: string
}

const props = defineProps<Props>()

// const colorMode = useColorMode()
const { copy, copied } = useClipboard()

const handleCopy = () => {
  console.log(props)

  copy(props.code)
}

</script>

<template>
  <div class="max-w-full">
    <div class="code-container max-w-full overflow-x-auto rounded">
      <div class="flex items-center">
        <div class="mr-auto uppercase text-sm">
          {{ language }}
        </div>
        <UTooltip text="Copy">
          <UButton
            :icon="copied ? 'i-heroicons-check-16-solid' : 'i-heroicons-clipboard'"
            color="white"
            variant="ghost"
            @click="handleCopy"
          />
        </UTooltip>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.code-container pre {
  @apply my-0;
}
</style>
