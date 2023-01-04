<script setup lang="ts">
import { Icon } from '@iconify/vue'
import LanguageSelect from '~/components/forms/LanguageSelect'
import MenuItem from '~/layouts/home/MenuItem.vue'
</script>
<template>
  <header
    class="navbar"
  >
    <label
      for="home-layout-drawer"
      class="btn btn-ghost btn-sm drawer-button block lg:hidden"
    >
      <span
        class="text-2xl"
      >
        <Icon
          icon="material-symbols:menu-rounded"
        />
      </span>
    </label>
    <div
      class="ml-auto"
    />
    <div
      class="space-x-4 hidden lg:flex"
    >
      <MenuItem
        to="/"
      >
        home
      </MenuItem>
      <MenuItem
        to="/blogs"
      >
        blogs
      </MenuItem>
      <MenuItem
        to="/showcases"
      >
        showcases
      </MenuItem>
      <MenuItem
        to="/"
      >
        contact
      </MenuItem>
    </div>
    <LanguageSelect
      class="hidden lg:block"
      end
    />
  </header>
</template>
