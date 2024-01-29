<script setup lang="ts">
const appConfig = useAppConfig()
</script>
<template>
  <footer class="py-3 border-t-2">
    <UContainer class="flex items-center">
      <h3>Free open source project made by Youngjin</h3>
      <div class="ml-auto flex space-x-2 items-center">
        <!-- <UTooltip text="Repository">
          <NuxtLink :to="`${appConfig.links.repository}/issues/new?title=Feedback%20for%20%E2%80%9CAI%20Weekly%20%23004%E2%80%9D&amp;labels=feedback`" target="_blank">
            <UButton
              icon="i-simple-icons-github"
              size="sm"
              color="white"
              square
              variant="outline"
            />
          </NuxtLink>
        </UTooltip> -->
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
