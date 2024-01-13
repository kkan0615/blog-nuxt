<script setup>
const { locale: selected, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <UPopover mode="hover">
    <UButton color="white" icon="i-heroicons-language" variants="outline" />
    <template #panel>
      <div class="w-40">
        <UiList>
          <UiListItem
            v-for="localeEl in locales"
            :key="localeEl.code"
            :is-active="selected === localeEl.code"
          >
            <NuxtLink class="w-full inline-block" :to="switchLocalePath(localeEl.code)">
              {{ localeEl.name }}
            </NuxtLink>
          </UiListItem>
        </UiList>
      </div>
    </template>
  </UPopover>
</template>
