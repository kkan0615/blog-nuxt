import { LayoutsMenuItem, NuxtLink } from '../../.nuxt/components';
<template>
  <header>
    <UContainer as="nav" class="flex h-12 items-center">
      <h1 class="font-bold">
        <NuxtLink to="/">
          Blog Name
        </NuxtLink>
      </h1>
      <div class="mx-auto" />
      <ul class="mr-3 flex space-x-3">
        <LayoutsMenuItem active to="/">
          Menu 1
        </LayoutsMenuItem>
        <LayoutsMenuItem to="/">
          Menu 2
        </LayoutsMenuItem>
      </ul>
      <UtilsThemeChanger />
    </UContainer>
  </header>
</template>
