<script lang="ts" setup>
import { Showcases } from '~/types/showcase'

</script>

<template>
  <UContainer class="mt-14 py-3">
    <UtilsAnimationObserver />
    <UAlert
      class="mb-4"
      icon="i-lucide-message-circle-warning"
      color="red"
      variant="solid"
      title="Alert"
      description="Page is not ready. Please go back"
    />
    <div class="lg:flex lg:space-x-8">
      <div class="lg:flex-1">
        <h3 class="font-bold mb-4">
          Total: <span class="text-primary-500">{{ Showcases.length }}</span>
        </h3>
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-8">
          <CardsShowcase
            v-for="showcaseEl in Showcases"
            :key="showcaseEl.id"
            :showcase="showcaseEl"
          />
        </div>
      </div>
      <div class="w-60 lg:block hidden">
        Right
      </div>
    </div>
  </UContainer>
</template>

<style>

</style>
