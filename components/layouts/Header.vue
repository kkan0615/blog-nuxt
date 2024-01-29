<script setup lang="ts">
import { Menus } from '@/types/menu'

const appConfig = useAppConfig()
const { toggleIsOpenSideBar } = useLayout()
const localePath = useLocalePath()

</script>
<template>
  <header class="fixed bg-white dark:bg-gray-900 top-0 py-3 border-b-2 border-white dark:border-gray-900 w-full z-10">
    <UContainer as="nav" class="flex items-center">
      <UButton
        class="mr-3 lg:hidden"
        icon="i-heroicons-bars-3"
        color="white"
        variant="ghost"
        @click="toggleIsOpenSideBar"
      />
      <h1 class="font-bold">
        <NuxtLink :to="localePath('/')">
          {{ appConfig.info.name }}
        </NuxtLink>
      </h1>
      <div class="mx-auto" />
      <ul class="mr-8 space-x-8 hidden lg:flex">
        <LayoutsMenuItem
          v-for="menuEl in Menus"
          :key="menuEl.key"
          :to="menuEl.to"
          :active-key="menuEl.key"
        />
      </ul>
      <div class="flex items-center space-x-2">
        <UtilsThemeChanger />
        <UtilsLangChanger />
      </div>
    </UContainer>
  </header>
</template>
