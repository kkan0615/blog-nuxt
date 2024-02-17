<script setup lang="ts">
const items = [
  {
    label: 'System',
    icon: 'i-heroicons-computer-desktop',
    value: 'system',
    activeClass: '',
    click: () => {
      changeColorMode('system')
    }
  },
  {
    label: 'Light',
    icon: 'i-heroicons-sun-16-solid',
    value: 'light',
    click: () => {
      changeColorMode('light')
    }
  },
  {
    label: 'Dark',
    icon: 'i-heroicons-moon-20-solid',
    value: 'dark',
    click: () => {
      changeColorMode('dark')
    }
  }
]

const iconMap: Record<string, string> = {
  system: 'i-heroicons-computer-desktop',
  light: 'i-heroicons-sun-16-solid',
  dark: 'i-heroicons-moon-20-solid',
}

const colorMode = useColorMode()

const changeColorMode = (newColorMode: string) => {
  colorMode.preference = newColorMode
}
</script>
<template>
  <UPopover mode="hover">
    <UButton color="white" :icon="iconMap[colorMode.preference]" square variants="ghost" />
    <template #panel>
      <div class="w-40">
        <UiList>
          <UiListItem
            v-for="itemEl in items"
            :key="itemEl.label"
            class="flex items-center cursor-pointer"
            :is-active="itemEl.value === colorMode.preference"
            @click="itemEl.click"
          >
            <UIcon class="mr-3" :name="itemEl.icon" />
            {{ itemEl.label }}
          </UiListItem>
        </UiList>
      </div>
    </template>
  </UPopover>
</template>
