<script setup lang="ts">
import { Icon } from '@iconify/vue'

const appConfig = useAppConfig()
const { t } = useI18n()

</script>
<template>
  <div class="card bg-base-300 mb-4">
    <div class="card-body">
      <h2 class="card-title">
        {{ t('views.contact.requestCard.title') }}
      </h2>
      <p>
        {{ t('views.contact.requestCard.description') }}
      </p>
      <div
        class="card-actions"
      >
        <NuxtLink
          href="/contact/requests"
          class="btn btn-sm btn-primary"
        >
          {{ t('views.contact.requestCard.requestBtn') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
