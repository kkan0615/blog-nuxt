<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
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
        path: localePath('showcases'),
        query: {
          locales: route.query.locales,
          tags: tag,
        }
      }"
    >
      {{ t(`labels.showcaseTags.${tag}`) }}
    </NuxtLink>
  </div>
</template>
