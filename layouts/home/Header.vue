<script setup lang="ts">
import { Icon } from '@iconify/vue'
import LanguageSelect from '~/components/forms/LanguageSelect'
import MenuItem from '~/layouts/home/MenuItem.vue'

const { t } = useI18n()

</script>
<template>
  <header class="navbar absolute top-0">
    <nav class="max-w-4xl mx-auto flex w-full">
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
        class="text-lg font-bold ml-2"
      >
        {{ t('seo.title') }}
      </div>
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
          to="/contact"
        >
          contact
        </MenuItem>
      </div>
      <LanguageSelect
        class="hidden lg:block"
        end
      />
    </nav>
  </header>
</template>
