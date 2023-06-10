<script setup lang="ts">
interface Props {
  top?: boolean
  bottom?: boolean
  end?: boolean
  textSize?: 'sm' | 'md' | 'lg'
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
      :tabindex="0"
      class="btn btn-ghost btn-sm m-1"
    >
      {{ t(`commons.labels.languages.${locale}`) }}
    </label>
    <ul
      :tabindex="0"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box max-w-52 z-20"
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
