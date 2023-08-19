<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  top?: boolean
  bottom?: boolean
  end?: boolean
  isIcon?: boolean
}

defineProps<Props>()
const colorMode = useColorMode()
const { t } = useI18n()

const handleClick = async (newTheme?: string) => {
  colorMode.preference = newTheme || 'system'
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
      v-if="!isIcon"
      :tabIndex="0"
      class="btn btn-ghost btn-sm"
    >
      <Icon
        icon="mdi:theme-light-dark"
        class="mr-2"
      />
      <span>
        {{ t('labels.theme') }}
      </span>
    </label>
    <label
      v-else
      :tabIndex="0"
      class="btn btn-ghost btn-sm"
    >
      <Icon
        class="text-lg"
        icon="mdi:theme-light-dark"
      />
    </label>
    <client-only>
      <ul
        :tabIndex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32 z-20"
      >
        <li>
          <button
            class="w-full capitalize"
            :class="{
              'bg-primary text-white': colorMode.preference === 'system'
            }"
            type="button"
            @click="() => handleClick()"
          >
            {{ t('labels.themes.default') }}
          </button>
        </li>
        <li>
          <button
            class="w-full capitalize"
            :class="{
              'bg-primary text-white': colorMode.preference === 'base-light'
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
              'bg-primary text-white': colorMode.preference === 'base-dark'
            }"
            type="button"
            @click="() => handleClick('base-dark')"
          >
            {{ t('labels.themes.dark') }}
          </button>
        </li>
      </ul>
    </client-only>
  </div>
</template>
