<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  categories: string[]
}

defineProps<Props>()

const { t } = useI18n()

</script>
<template>
  <div class="mt-4 flex items-center space-x-2">
    <Icon icon="material-symbols:folder-open-outline" />
    <div
      v-for="category in categories"
      :key="category"
      class="badge badge-outline"
    >
      {{ t(`labels.showcaseCategories.${category}`) }}
    </div>
  </div>
</template>
