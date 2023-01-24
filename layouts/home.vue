<script lang="ts" setup>
import SideMenu from '~/layouts/components/SideMenu.vue'
import Header from '~/layouts/home/Header.vue'
</script>
<template>
  <div class="drawer lg:h-fit">
    <input
      id="home-layout-drawer"
      type="checkbox"
      class="drawer-toggle"
    >
    <div class="drawer-content relative">
      <!-- Page content here -->
      <Header />
      <div>
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
