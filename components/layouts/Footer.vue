<script setup lang="ts">
const appConfig = useAppConfig()
const localePath = useLocalePath()

</script>
<template>
  <footer class="py-3 border-t-2">
    <UContainer class="flex items-center">
      <h3>Free open source project made by Youngjin</h3>
      <div class="ml-auto flex space-x-2 items-center">
        <NuxtLink :to="localePath('/donations')">
          <UTooltip :text="$t('labels.donation')">
            <UButton
              icon="i-mdi-donation-outline"
              size="sm"
              color="primary"
              variant="outline"
              :label="$t('labels.donation')"
              :trailing="false"
            />
          </UTooltip>
        </NuxtLink>
        <UTooltip text="Repository">
          <NuxtLink :to="appConfig.links.repository" target="_blank">
            <UButton
              icon="i-simple-icons-github"
              size="sm"
              color="white"
              square
              variant="outline"
            />
          </NuxtLink>
        </UTooltip>
      </div>
    </UContainer>
  </footer>
</template>
