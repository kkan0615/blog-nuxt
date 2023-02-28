<script setup lang="ts">
import { Icon } from '@iconify/vue'
import LanguageSelect from '~/components/forms/LanguageSelect'
import MenuItem from '~/layouts/home/MenuItem.vue'

const { t } = useI18n()

const contentDiv = ref<HTMLDivElement | null>(null)
const top = ref(true)

onMounted(() => {
  const found = document.getElementById('base-content')
  if (found) {
    contentDiv.value = found as HTMLDivElement
    contentDiv.value.addEventListener('scroll', handleScroll)
  }
})

onBeforeUnmount(() => {
  if (contentDiv.value)
    contentDiv.value.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  if (!contentDiv.value) return
  top.value = contentDiv.value.scrollTop === 0
}

</script>
<template>
  <header
    class="navbar bg-base-300 z-10 fixed top-0 transition duration-500 ease-in-out"
    :class="{
      'bg-transparent': top,
    }"
  >
    <nav class="max-w-4xl mx-auto flex w-full">
      <label
        for="home-layout-drawer"
        class="btn btn-ghost btn-sm drawer-button block lg:hidden"
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
        <MenuItem to="/">
          home
        </MenuItem>
        <!-- @TODO: Open following code when other categories are ready -->
        <!--        <div class="dropdown dropdown-open">-->
        <!--          <div-->
        <!--            :tabindex="0"-->
        <!--            class="capitalize font-black first-letter:text-primary cursor-pointer"-->
        <!--          >-->
        <!--            blogs-->
        <!--          </div>-->
        <!--          <ul-->
        <!--            :tabindex="0"-->
        <!--            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box max-w-52"-->
        <!--          >-->
        <!--            <li>-->
        <!--              <MenuItem-->
        <!--                class="px-2 py-1"-->
        <!--                to="/blogs"-->
        <!--                :query="{categories: 'programming'}"-->
        <!--              >-->
        <!--                Programming-->
        <!--              </MenuItem>-->
        <!--            </li>-->
        <!--          </ul>-->
        <!--        </div>-->
        <MenuItem
          to="/blogs"
          :query="{categories: 'programming'}"
        >
          Blogs
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
