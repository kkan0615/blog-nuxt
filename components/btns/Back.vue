<script setup lang="ts">
import { Icon } from '@iconify/vue'

const router = useRouter()
const { t } = useI18n()

const handleClick = () => {
  router.go(-1)
}
</script>
<template>
  <button
    class="btn btn-sm btn-ghost"
    aria-label="back button"
    @click="handleClick"
  >
    <Icon
      icon="mdi:arrow-left"
      class="mr-2"
    />
    {{ t('commons.btns.back') }}
  </button>
</template>
