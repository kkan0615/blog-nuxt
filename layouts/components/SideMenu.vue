<script setup lang="ts">
import packageJson from '@/package.json'
import MenuItem from '~/layouts/components/MenuItem.vue'
import LanguageSelect from '~/components/forms/LanguageSelect.vue'
import Donation from '~/components/advertisements/Donation.vue'
import ThemeSelect from '~/components/forms/ThemeSelect.vue'
// import AnimatedOctocats from '~/components/icons/AnimatedOctocats.client.vue'
import AnimatedOctocats from '~/components/icons/AnimatedOctocats.vue'
import SideMenuContracts from '~/layouts/components/SideMenuContracts.vue'

const { t } = useI18n()
const appConfig = useAppConfig()
const route = useRoute()
</script>
<template>
  <!-- "menu class" is moved to middle -->
  <div class="flex flex-col w-64 h-full bg-base-200">
    <AnimatedOctocats />
    <div class="text-center p-4 mt-4">
      <div class="avatar flex justify-center mb-4">
        <div class="w-1/2 rounded-full border">
          <img
            :src="appConfig.profile.image"
            height="300"
            width="300"
            alt="Profile image"
          >
        </div>
      </div>
      <div class="text-2xl font-bold">
        {{ t('seo.applicationName') }}
      </div>
      <div class="text-sm opacity-70 line whitespace-pre-wrap">
        {{ t('seo.description') }}
      </div>
      <!-- @TODO: Change version from package.json after release -->
      <div class="mt-2 badge badge-primary text-white">
        {{ packageJson.version }}
      </div>
    </div>
    <div class="px-4">
      <Donation sm />
    </div>
    <div class="menu">
      <ul class="px-4">
        <li>
          <MenuItem
            to="/"
            icon="material-symbols:home-outline-rounded"
            :active="route.name.includes('index')"
          >
            <span>home</span>
          </MenuItem>
        </li>
        <li>
          <MenuItem
            to="/blogs"
            icon="material-symbols:menu-rounded"
            :active="route.name.includes('blogs')"
          >
            <span>blogs</span>
          </MenuItem>
        </li>
        <li>
          <MenuItem
            to="/showcases"
            icon="material-symbols:menu-rounded"
            :active="route.name.includes('showcases')"
          >
            <span>showcases</span>
          </MenuItem>
        </li>
        <li>
          <MenuItem
            to="/contact"
            icon="mdi:donation-outline"
            :active="route.name.includes('contact')"
          >
            <span>contact</span>
          </MenuItem>
        </li>
      </ul>
    </div>
    <div class="mt-auto p-4">
      <SideMenuContracts />
      <div class="flex items-center justify-center">
        <ThemeSelect
          class="block lg:hidden"
          top
        />
        <LanguageSelect
          class="block lg:hidden"
          top
        />
      </div>
    </div>
  </div>
</template>
