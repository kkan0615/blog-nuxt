<script lang="ts" setup>
import SideMenu from '~/layouts/components/SideMenu.vue'
import Header from '~/layouts/default/Header.vue'
import Footer from '~/layouts/components/Footer.vue'
</script>
<template>
  <div class="drawer lg:drawer-open">
    <CookiePopup />
    <ClientOnly>
      <LazyBtnsScrollTop />
    </ClientOnly>
    <input
      id="default-layout-drawer"
      type="checkbox"
      class="drawer-toggle"
    >
    <div
      id="base-content"
      class="drawer-content relative min-h-screen flex flex-col"
    >
      <!-- Page content here -->
      <Header />
      <div class="flex-grow p-2 lg:p-4">
        <slot />
      </div>
      <Footer />
    </div>
    <div class="drawer-side">
      <label
        for="default-layout-drawer"
        class="drawer-overlay"
      />
      <SideMenu />
    </div>
  </div>
</template>
