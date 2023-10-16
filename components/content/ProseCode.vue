<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useClipboard } from '@vueuse/core'

interface Props {
  code: string
  language?: string
  filename?: string
  highlights?: string
}

const props = defineProps<Props>()

const { t } = useI18n()
const colorMode = useColorMode()
const { copy, copied, text } = useClipboard()

const handleCopy = () => {
  copy(props.code)
}

</script>

<template>
  <div class="max-w-full">
    <div
      class="code-container max-w-full overflow-x-auto rounded bg-github-dark-code"
      :class="{
        'bg-github-dark-code': colorMode.value.includes('dark'),
        'bg-white': colorMode.value.includes('light'),
      }"
    >
      <div class="flex items-center p-1 pl-3">
        <div class="mr-auto uppercase text-sm">
          {{ language }}
        </div>
        <div
          class="tooltip tooltip-left"
          :data-tip="t('commons.tooltips.copy')"
        >
          <button
            type="button"
            class="btn btn-xs btn-ghost mt-2"
            @click="handleCopy"
          >
            <span
              v-if="copied"
              class="text-lg"
            >
              <Icon icon="material-symbols:check-small-rounded" />
            </span>
            <span
              v-else
              class="text-lg"
            >
              <Icon icon="material-symbols:copy-all" />
            </span>
          </button>
        </div>
      </div>
      <div class="px-3 pb-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.code-container {
  //@apply bg-white dark:bg-[#24292e];

  pre {
    @apply my-0 p-0;
  }
}
</style>
