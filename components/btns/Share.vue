<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useClipboard } from '@vueuse/core'
interface Props {
  path: string
}

const props = defineProps<Props>()
const { t } = useI18n()

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
    class="btn btn-sm"
    type="button"
    @click="handleShare"
  >
    <span
      class="tooltip font-normal text-md"
      :data-tip="t('commons.tooltips.share')"
    >
      <Icon icon="material-symbols:share" />
    </span>
  </button>
</template>
