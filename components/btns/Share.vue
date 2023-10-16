<script setup lang="ts">
import { Icon } from '@iconify/vue'
interface Props {
  path: string
  isGhost?: boolean
}

const props = defineProps<Props>()
const { t } = useI18n()

const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: t('seo.title'),
      url: `${location.origin}${props.path}`,

    })
  }
}

</script>
<template>
  <div
    class="tooltip font-normal"
    :data-tip="t('commons.tooltips.share')"
  >
    <button
      class="btn btn-sm"
      :class="{
        'btn-circle btn-primary': !isGhost,
        'btn-ghost': isGhost,
      }"
      type="button"
      aria-label="share button"
      @click.prevent="handleShare"
    >
      <Icon icon="material-symbols:share" />
    </button>
  </div>
</template>
