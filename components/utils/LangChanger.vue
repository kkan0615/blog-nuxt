<script setup>
const { locale: selected, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const label = computed(() => locales.value.find(localeEl => localeEl.code === selected.value)?.name || '')
</script>

<template>
  <!-- mode="hover"  -->
  <UPopover mode="hover">
    <UButton color="white" icon="i-heroicons-language" variants="outline" />
    <template #panel>
      <div class="w-40">
        <UiList>
          <UiListItem v-for="localeEl in locales" :key="localeEl.code" :isActive="selected === localeEl.code">
            <NuxtLink :to="switchLocalePath(localeEl.code)">
              {{ localeEl.name }}
            </NuxtLink>
          </UiListItem>
        </UiList>
      </div>
    </template>
  </UPopover>
</template>
