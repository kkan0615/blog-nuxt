<script setup lang="ts">
const appConfig = useAppConfig()
const localePath = useLocalePath()

</script>
<template>
  <section class="py-10 lg:py-20">
    <UContainer>
      <h2 class="text-3xl font-bold text-center lg:mb-16 mb-6 ">
        About me
      </h2>
      <div class="lg:flex lg:space-x-12">
        <div class="lg:w-1/3 w-full lg:mb-0 mb-8">
          <div
            class="flex w-full flex-row items-center justify-center"
            data-animate="animate-jump-in"
          >
            <div class="w-full animate-border inline-block rounded-2xl bg-white bg-gradient-to-r from-red-500 via-purple-500 to-primary bg-[length:400%_400%] p-1">
              <NuxtImg src="/me/me.jfif" alt="me" class="h-auto w-full rounded-2xl" />
            </div>
          </div>
        </div>
        <div class="lg:w-2/3 w-full flex flex-col">
          <h3 class="text-4xl font-medium mb-4">
            {{ $t('me.position') }}
          </h3>
          <p class="lg:mb-12 mb-6">
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
            <UTooltip text="Email">
              <NuxtLink :to="`mailto:${appConfig.links.email}`" target="_blank">
                <UButton
                  icon="i-lucide-mail"
                  size="md"
                  color="white"
                  square
                  variant="outline"
                />
              </NuxtLink>
            </UTooltip>
          </div>
          <NuxtLink class="mt-auto" :to="localePath('/about-me')">
            <UButton
              icon="i-lucide-contact-2"
              class="capitalize dark:!text-white"
              size="md"
              :label="$t('labels.hireMe')"
            />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </section>
</template>
