<script lang="ts" setup>
import SideMenu from '~/layouts/components/SideMenu.vue'
import Header from '~/layouts/home/Header.vue'
</script>
<template>
  <div class="drawer">
    <input
      id="home-layout-drawer"
      type="checkbox"
      class="drawer-toggle"
    >
    <div class="drawer-content">
      <!-- Page content here -->
      <Header />
      <div
        class="p-2 lg:p-4"
      >
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
