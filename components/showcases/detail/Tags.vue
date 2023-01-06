<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  tags: string[]
}

defineProps<Props>()

const { t } = useI18n()

</script>
<template>
  <div class="mt-4 flex items-center space-x-2">
    <Icon icon="mdi:tag-heart" />
    <div
      v-for="tag in tags"
      :key="tag"
      class="badge badge-outline"
    >
      {{ t(`labels.showcaseTags.${tag}`) }}
    </div>
  </div>
</template>
