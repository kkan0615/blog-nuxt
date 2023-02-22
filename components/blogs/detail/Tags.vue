<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  categories: string[]
  tags: string[]
}

defineProps<Props>()

const route = useRoute()
const { t } = useI18n()

</script>
<template>
  <div class="mt-4 flex items-center space-x-2">
    <Icon icon="mdi:tag-heart" />
    <NuxtLink
      v-for="tag in tags"
      :key="tag"
      class="badge badge-outline hover:text-primary"
      :to="{
        path: localePath('blogs'),
        query: {
          locales: route.query.locales,
          categories: categories.join(','),
          tags: tag,
        }
      }"
    >
      {{ t(`labels.tags.${tag}`) }}
    </nuxtlink>
  </div>
</template>
