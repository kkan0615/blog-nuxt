<script setup lang="ts">
import { useRoute } from '#app'
import { Icon } from '@iconify/vue'
import CopyBtn from '~/components/btns/Copy.vue'
import ShareBtn from '~/components/btns/Share.vue'

interface Props {
  filepath: string
}

defineProps<Props>()

const appConfig = useAppConfig()
const { t } = useI18n()
const route = useRoute()

</script>
<template>
  <div class="flex items-center mt-4">
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
      <CopyBtn :path="route.path" />
    </div>
    <div class="lg:hidden ml-auto">
      <ShareBtn :path="route.path" />
    </div>
  </div>
</template>
