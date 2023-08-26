<script lang="ts" setup>
import Header from '~/layouts/home/Header.vue'
import SideMenu from '~/layouts/components/SideMenu.vue'
import Footer from '~/layouts/components/Footer.vue'

</script>
<template>
  <div class="drawer">
    <CookiePopup />
    <input
      id="home-layout-drawer"
      type="checkbox"
      class="drawer-toggle"
    >
    <div
      id="base-content"
      class="drawer-content relative bg-base-200/50"
    >
      <!-- Page content here -->
      <Header />
      <div>
        <slot />
      </div>
      <div class="mt-auto max-w-5xl mx-auto">
        <Footer />
      </div>
    </div>
    <div class="drawer-side z-20">
      <label
        aria-label="drawer"
        for="home-layout-drawer"
        class="drawer-overlay"
      />
      <SideMenu />
    </div>
  </div>
</template>
<style>
section {
  @apply max-w-5xl mx-auto px-2 lg:px-0 lg:py-4;
}
</style>
