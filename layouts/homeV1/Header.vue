<script setup lang="ts">
import { Icon } from '@iconify/vue'
import LanguageSelect from '~/components/forms/LanguageSelect.vue'
import MenuItem from '~/layouts/home/MenuItem.vue'
import ThemeSelect from '~/components/forms/ThemeSelect.vue'

const { t } = useI18n()

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

</script>
<template>
  <header
    class="navbar bg-base-300 z-10 fixed top-0 transition duration-500 ease-in-out"
    :class="{
      'bg-transparent': !isScrolled,
      'text-white': !isScrolled,
    }"
  >
    <nav class="max-w-4xl mx-auto flex items-center w-full">
      <label
        for="home-layout-drawer"
        class="btn btn-ghost btn-sm drawer-button block lg:hidden px-1 pb-0 pt-1"
      >
        <span class="text-2xl">
          <Icon
            icon="material-symbols:menu-rounded"
          />
        </span>
      </label>
      <div class="text-lg font-bold ml-2">
        {{ t('seo.title') }}
      </div>
      <div class="ml-auto" />
      <div class="space-x-4 hidden lg:flex">
        <MenuItem
          :is-scrolled="isScrolled"
          to="/"
        >
          home
        </MenuItem>
        <MenuItem
          :is-scrolled="isScrolled"
          to="/blogs"
        >
          blogs
        </MenuItem>
        <MenuItem
          :is-scrolled="isScrolled"
          to="/showcases"
        >
          showcases
        </MenuItem>
        <MenuItem
          :is-scrolled="isScrolled"
          to="/contact"
        >
          contact
        </MenuItem>
      </div>
      <ThemeSelect
        is-icon
        class="hidden lg:block"
        :class="{
          'text-white': !isScrolled,
        }"
        :content-class="{
          'text-base-content': !isScrolled,
        }"
        end
      />
      <LanguageSelect
        is-icon
        class="hidden lg:block"
        :class="{
          'text-white': !isScrolled,
        }"
        :content-class="{
          'text-base-content': !isScrolled,
        }"
        end
      />
    </nav>
  </header>
</template>
