<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  top?: boolean
  bottom?: boolean
  end?: boolean
  isIcon?: boolean
  contentClass?: string | Record<string, boolean>
}
defineProps<Props>()

const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div
    :class="{
      'dropdown': true,
      'dropdown-top': top,
      'dropdown-end': end,
      'dropdown-bottom': bottom,
    }"
  >
    <label
      v-if="!isIcon"
      :tabindex="0"
      class="btn btn-ghost btn-sm"
    >
      <Icon
        icon="material-symbols:translate"
        class="mr-2"
      />
      <span>
        {{ t(`commons.labels.languages.${locale}`) }}
      </span>
    </label>
    <label
      v-else
      :tabIndex="0"
      class="btn btn-ghost btn-sm"
    >
      <Icon
        class="text-lg"
        icon="material-symbols:translate"
      />
    </label>
    <ul
      :tabindex="0"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box max-w-52 z-20"
      :class="contentClass"
    >
      <li
        v-for="localeEl in locales"
        :key="localeEl.code"
      >
        <NuxtLink
          :class="{
            'bg-secondary text-white': locale === localeEl.code,
          }"
          :to="{ path: switchLocalePath(localeEl.code) }"
        >
          {{ t(`commons.labels.languages.${localeEl.code}`) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
