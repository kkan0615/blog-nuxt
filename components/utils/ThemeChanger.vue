<script setup lang="ts">
// import type { DropdownItem } from '@nuxt/ui/dist/runtime/types'
// : DropdownItem[][]
const items = [
  {
    label: 'System',
    icon: 'i-heroicons-computer-desktop',
    activeClass: '',
    click: () => {
      changeColorMode('system')
    }
  },
  {
    label: 'Light',
    icon: 'i-heroicons-sun-16-solid',
    click: () => {
      changeColorMode('light')
    }
  },
  {
    label: 'Dark',
    icon: 'i-heroicons-moon-20-solid',
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

// const items2: DropdownItem[][] = [
//   [
//     {
//       label: 'System',
//       icon: 'i-heroicons-computer-desktop',
//       activeClass: '',
//       click: () => {
//         changeColorMode('system')
//       }
//     },
//     {
//       label: 'Light',
//       icon: 'i-heroicons-sun-16-solid',
//       click: () => {
//         changeColorMode('light')
//       }
//     },
//     {
//       label: 'Dark',
//       icon: 'i-heroicons-moon-20-solid',
//       click: () => {
//         changeColorMode('dark')
//       }
//     }
//   ]
// ]

const colorMode = useColorMode()
// console.log(colorMode.value)

const changeColorMode = (newColorMode: string) => {
  colorMode.preference = newColorMode
}
</script>
<template>
  <!-- @TODO: Remove inline-flex after popover is resolved -->
  <div class="inline-flex">
    <UPopover mode="hover">
      <UButton
        color="white"
        :icon="iconMap[colorMode.preference]"
        square
        variants="ghost"
      />
      <template #panel>
        <div class="py-2 w-40">
          <ul class="flex flex-col">
            <UButton
              v-for="itemEl in items"
              :key="itemEl.label"
              class="w-full"
              color="white"
              variant="ghost"
              :icon="itemEl.icon"
              :label="itemEl.label"
              @click="itemEl.click"
            />
          </ul>
        </div>
      </template>
    </UPopover>
  </div>
  <!-- <UDropdown :items="items2" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown> -->
</template>
