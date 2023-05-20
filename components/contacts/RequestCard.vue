<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
<template>
  <div class="card bg-base-300 mb-4">
    <div class="card-body">
      <h2 class="card-title capitalize">
        {{ t('views.contact.requestCard.title') }}
      </h2>
      <p>
        {{ t('views.contact.requestCard.description') }}
      </p>
      <div class="card-actions">
        <NuxtLink
          :to="localePath('/contact/requests')"
          class="btn btn-sm btn-primary"
        >
          {{ t('views.contact.requestCard.requestBtn') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
