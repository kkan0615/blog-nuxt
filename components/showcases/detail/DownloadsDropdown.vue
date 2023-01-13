<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  downloads: {
    title: string
    link: string
  }[]
}

defineProps<Props>()
const { t } = useI18n()

</script>
<template>
  <div class="dropdown">
    <label
      :tabIndex="0"
      class="link inline-flex items-center"
    >
      <Icon
        class="mr-1 text-xl"
        icon="material-symbols:download-for-offline-outline-rounded"
      />
      {{ t('commons.labels.downloads') }}
    </label>
    <ul
      :tabIndex="0"
      class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
    >
      <li
        v-for="download in downloads"
        :key="download.link"
      >
        <a
          class="px-2 py-1"
          :href="download.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ download.title }}
        </a>
      </li>
    </ul>
  </div>
  <template />
</template>
