<script setup lang="ts">
import { useRoute } from '#app'
import { Icon } from '@iconify/vue'

interface Props {
  filepath: string
}

defineProps<Props>()

const appConfig = useAppConfig()
const { t } = useI18n()
const route = useRoute()

const handleCopyLink = async () => {
  if (route.path)
    await navigator.clipboard.writeText(`${location.origin}${route.path}`)
}

const handleShare = async () => {
  if (navigator.share && route.path) {
    await navigator.share({
      title: 'Share',
      url: `${location.origin}${route.path}`
    })
  }
}
</script>
<template>
  <div
    class="flex items-center mt-4"
  >
    <a
      :href="`${appConfig.github}/blob/main/content/${filepath}`"
      rel="noopener noreferrer"
      target="_blank"
      class="link"
    >
      {{ t('commons.labels.editOnGithub') }}
    </a>
    <div
      class="lg:block hidden ml-auto tooltip"
      :data-tip="t('commons.tooltips.copyURL')"
    >
      <button
        class="btn btn-sm btn-ghost"
        type="button"
        @click="handleCopyLink"
      >
        <Icon icon="mdi:link-variant" />
      </button>
    </div>
    <div
      class="lg:hidden ml-auto"
    >
      <button
        class="btn btn-sm btn-ghost"
        type="button"
        @click="handleShare"
      >
        <Icon icon="material-symbols:share" />
      </button>
    </div>
  </div>
</template>
