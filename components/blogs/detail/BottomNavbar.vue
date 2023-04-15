<script setup lang="ts">
import { useRoute } from '#app'
import CopyBtn from '~/components/btns/Copy.vue'
import ShareBtn from '~/components/btns/Share.vue'
import EditOnGithub from '~/components/links/EditOnGithub.vue'

interface Props {
  filepath: string
}

defineProps<Props>()

const { t } = useI18n()
const route = useRoute()

</script>
<template>
  <div class="flex items-center mt-4">
    <EditOnGithub :filepath="filepath" />
    <div
      class="lg:block hidden ml-auto tooltip"
      :data-tip="t('commons.tooltips.copyURL')"
    >
      <CopyBtn :path="route.path" />
    </div>
    <div class="lg:hidden ml-auto">
      <ShareBtn
        is-ghost
        :path="route.path"
      />
    </div>
  </div>
</template>
