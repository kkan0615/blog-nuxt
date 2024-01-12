<script setup lang="ts">
import { Menus } from '@/types/menu'
const appConfig = useAppConfig()
</script> 
<template>
  <header class="fixed top py-3 border-b-2 w-full">
    <UContainer as="nav" class="flex items-center">
      <h1 class="font-bold">
        <NuxtLink to="/">
          {{ appConfig.info.name }}
        </NuxtLink>
      </h1>
      <div class="mx-auto" />
      <ul class="mr-8 flex space-x-8">
        <LayoutsMenuItem v-for="menuEl in Menus" :to="menuEl.to" :key="menuEl.key" :active-key="menuEl.key">
          {{ menuEl.key }}
        </LayoutsMenuItem>
      </ul>
      <div class="flex items-center space-x-2">
        <UtilsThemeChanger />
        <UtilsLangChanger />
      </div>
    </UContainer>
  </header>
</template>
