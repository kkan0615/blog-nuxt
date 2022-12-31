<template>
  <div
    class="menu w-64 bg-base-200"
  >
    <div
      class="text-center p-4"
    >
      <div
        class="text-2xl font-bold"
      >
        {{ t('seo.applicationName') }}
      </div>
      <!-- @TODO: Change version from package.json after release -->
      <div
        class="mt-4 badge badge-primary text-white"
      >
        Beta
      </div>
    </div>
    <ul
      class="px-4 text-primary"
    >
      <li>
        <MenuItem
          to="/"
          icon="material-symbols:home-outline-rounded"
        >
          <span>home</span>
        </MenuItem>
      </li>
      <li>
        <MenuItem
          to="/blogs"
          icon="material-symbols:menu-rounded"
        >
          <span>blogs</span>
        </MenuItem>
      </li>
      <li>
        <MenuItem
          to="/"
          icon="material-symbols:menu-rounded"
        >
          <span>showcases</span>
        </MenuItem>
      </li>
      <li>
        <MenuItem
          to="/"
          icon="mdi:donation-outline"
        >
          <span>contact</span>
        </MenuItem>
      </li>
    </ul>
    <div
      class="mt-auto text-center p-4"
    >
      <LanguageSelect
        class="block lg:hidden"
        top
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import MenuItem from '~/layouts/components/MenuItem.vue'
import LanguageSelect from '~/components/forms/LanguageSelect.vue'

const { t } = useI18n()
</script>
