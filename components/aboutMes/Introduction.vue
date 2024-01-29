<script setup lang="ts">
const appConfig = useAppConfig()

</script>
<template>
  <section class="py-10 lg:py-20">
    <UContainer class="max-w-5xl">
      <div class="lg:flex lg:space-x-12">
        <div class="lg:w-1/3 w-full">
          <div class="bg-stone-100 rounded-full h-auto aspect-square flex p-4 lg:mb-0 mb-5 border-4 border-primary-500 shadow-xl">
            <NuxtImg src="/me/me.svg" alt="me" />
          </div>
        </div>
        <div class="lg:w-2/3 w-full">
          <h3 class="text-4xl font-medium mb-4">
            {{ $t('me.position') }}
          </h3>
          <p class="lg:mb-12 mb-4">
            {{ $t('me.description') }}
          </p>
          <div class="flex space-x-3">
            <UTooltip text="Github">
              <NuxtLink :to="appConfig.links.github" target="_blank">
                <UButton
                  icon="i-simple-icons-github"
                  size="md"
                  color="white"
                  square
                  variant="outline"
                />
              </NuxtLink>
            </UTooltip>
            <UTooltip text="LinkedIn">
              <NuxtLink :to="appConfig.links.github" target="_blank">
                <UButton
                  icon="i-simple-icons-linkedin"
                  size="md"
                  color="white"
                  square
                  variant="outline"
                />
              </NuxtLink>
            </UTooltip>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
