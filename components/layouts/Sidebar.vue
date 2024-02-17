<script setup lang="ts">
import { Menus } from '~/types/menu'

const appConfig = useAppConfig()
const localePath = useLocalePath()
const { isOpenSideBar, toggleIsOpenSideBar } = useLayout()

</script>
<template>
  <USlideover
    v-model="isOpenSideBar"
    side="left"
    class="max-w-xs"
  >
    <div class="p-4 relative">
      <UButton
        class="absolute top-2 right-3"
        icon="i-heroicons-x-mark"
        color="white"
        variant="ghost"
        @click="toggleIsOpenSideBar"
      />
      <NuxtLink :to="localePath('/')">
        <h1 class="text-2xl font-bold">
          {{ appConfig.info.name }}
        </h1>
      </NuxtLink>
      <ul class="mt-4">
        <li class="text-stone-500 dark:text-stone-300 mb-2">
          Menus
        </li>
        <LayoutsSidebarMenuItem
          v-for="menuEl in Menus"
          :key="menuEl.key"
          :to="menuEl.to"
          :active-key="menuEl.key"
        />
      </ul>
    </div>
  </USlideover>
</template>
