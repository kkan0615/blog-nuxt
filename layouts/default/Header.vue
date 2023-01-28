<script setup lang="ts">
import { Icon } from '@iconify/vue'
import LanguageSelect from '~/components/forms/LanguageSelect'
import { useLayoutStore } from '~/stores/layout'
import ThemeSelect from '~/components/forms/ThemeSelect.vue'

const layoutStore = useLayoutStore()

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
    <!-- Resolve header hydration error -->
    <ClientOnly>
      <div
        class="capitalize font-bold truncate"
      >
        {{ layoutStore.headerTitle }}
      </div>
    </ClientOnly>
    <div
      class="ml-auto"
    />
    <ThemeSelect
      class="hidden lg:block"
      end
    />
    <LanguageSelect
      class="hidden lg:block"
      end
    />
  </header>
</template>
