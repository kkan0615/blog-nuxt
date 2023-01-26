<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  top?: boolean
  bottom?: boolean
  end?: boolean
}

defineProps<Props>()
const themeCookie = useCookie('theme')
const { t } = useI18n()

const currTheme = ref(themeCookie.value || '')

const handleClick = async (newTheme?: string) => {
  if (!newTheme) {
    themeCookie.value = null
    document.documentElement.setAttribute('data-theme', 'base-dark')
  } else {
    themeCookie.value = newTheme
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  currTheme.value = newTheme || ''
}
</script>
<template>
  <div
    class="dropdown"
    :class="{
      'dropdown-top': top,
      'dropdown-bottom': bottom,
      'dropdown-end': end,
    }"
  >
    <label
      :tabIndex="0"
      class="btn btn-ghost"
    >
      <Icon icon="mdi:theme-light-dark" />
      <span class="ml-2">
        {{ t('labels.theme') }}
      </span>
    </label>
    <ul
      :tabIndex="0"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
    >
      <li>
        <button
          class="w-full capitalize"
          :class="{
            'bg-secondary': currTheme === ''
          }"
          type="button"
          @click="() => handleClick('')"
        >
          {{ t('labels.themes.default') }}
        </button>
      </li>
      <li>
        <button
          class="w-full capitalize"
          :class="{
            'bg-secondary': currTheme === 'base-light'
          }"
          type="button"
          @click="() => handleClick('base-light')"
        >
          {{ t('labels.themes.light') }}
        </button>
      </li>
      <li>
        <button
          class="w-full capitalize"
          :class="{
            'bg-secondary': currTheme === 'base-dark'
          }"
          type="button"
          @click="() => handleClick('base-dark')"
        >
          {{ t('labels.themes.dark') }}
        </button>
      </li>
    </ul>
  </div>
</template>
