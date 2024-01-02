<script setup>
const { locale: selected, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const label = computed(() => locales.value.find(localeEl => localeEl.code === selected.value)?.name || '')
</script>

<template>
  <UPopover mode="hover">
    <UButton
      color="white"
      :label="label"
      variants="outline"
    />
    <template #panel>
      <div class="py-2 w-40">
        <ul class="flex flex-col">
          <NuxtLink
            v-for="localeEl in locales"
            :key="localeEl.code"
            :to="switchLocalePath(localeEl.code)"
          >
            <UButton
              class="w-full hover:bg-gray-100 hover:dark:bg-gray-800"
              :color="selected === localeEl.code ? 'primary' : 'white'"
              variant="ghost"
              :label="localeEl.name"
            />
          </NuxtLink>
        </ul>
      </div>
    </template>
  </UPopover>
</template>
