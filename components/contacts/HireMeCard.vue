<script setup lang="ts">
const appConfig = useAppConfig()
const { t } = useI18n()

</script>
<template>
  <div class="card bg-base-100 mb-4">
    <div class="card-body">
      <h2 class="card-title">
        Hire me
      </h2>
      <p>
        {{ t('views.contact.profileCard.description') }}
      </p>
      <div class="mt-2 flex text-3xl space-x-2">
        Download resume
      </div>
    </div>
  </div>
</template>
