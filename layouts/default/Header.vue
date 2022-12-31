<script setup lang="ts">
import { Icon } from '@iconify/vue'
import LanguageSelect from '~/components/forms/LanguageSelect'
</script>
<template>
  <header
    class="navbar bg-base-100"
  >
    <label
      for="default-layout-drawer"
      class="btn btn-ghost btn-sm drawer-button lg:hidden"
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
    <LanguageSelect
      class="hidden lg:block"
      end
    />
  </header>
</template>
