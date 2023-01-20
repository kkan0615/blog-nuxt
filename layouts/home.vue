<script lang="ts" setup>
import SideMenu from '~/layouts/components/SideMenu.vue'
import Header from '~/layouts/home/Header.vue'
</script>
<template>
  <div class="drawer">
    <NuxtImg
      class="opacity-60 -z-10 fixed h-screen w-screen"
      src="/assets/home/background.jpg"
      alt="background"
      priority
    />
    <input
      id="home-layout-drawer"
      type="checkbox"
      class="drawer-toggle"
    >
    <div class="drawer-content h-screen flex flex-col">
      <!-- Page content here -->
      <Header />
      <div class="p-4 flex-grow h-1">
        <slot />
      </div>
    </div>
    <div class="drawer-side">
      <label
        for="home-layout-drawer"
        class="drawer-overlay"
      />
      <SideMenu />
    </div>
  </div>
</template>
