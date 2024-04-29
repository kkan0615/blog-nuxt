<script setup lang="ts">
import { capitalCase } from 'change-case'
import type { Experience } from '@/types/me/experience'

const { locale, defaultLocale } = useI18n()

const props = defineProps<{
  experience: Experience
}>()

const contents = computed(() => {
  if (!locale.value || locale.value === defaultLocale) {
    return props.experience.contents
  }

  return props.experience[`contents${capitalCase(locale.value)}`] || props.experience.contents
})

</script>
<template>
  <div
    role="listitem"
  >
    <div class="relative flex justify-between">
      <div class="flex flex-col items-center w-10 mr-4 md:w-24">
        <div>
          <div
            class="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600"
          >
            <div class="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400" />
          </div>
        </div>
        <div class="w-px h-full bg-blue-300 dark:bg-gray-600" />
      </div>
      <div class="w-full">
        <h2
          class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100"
        >
          {{ experience.date }}
        </h2>
        <div
          class="relative flex-1 mb-10"
        >
          <NuxtLink
            :to="experience.companyLink"
            target="_blank"
          >
            <UCard
              class="relative hover:scale-105 transition duration-200"
              :ui="{
                body: {
                  base: '',
                  background: '',
                  padding: 'px-3 py-3 sm:p-4',
                },
                header: {
                  base: '',
                  background: '',
                  padding: 'px-3 py-3 sm:p-4',
                },
                footer: {
                  base: '',
                  background: '',
                  padding: 'px-3 py-3 sm:p-4',

                },
              }"
            >
              <template #header>
                <h6 class="text-xl font-bold">
                  {{ experience.companyName }}
                </h6>
              </template>
              <ul>
                <li
                  v-for="contentEl in contents"
                  :key="contentEl"
                >
                  <span class="mr-2">-</span> {{ contentEl }}
                </li>
              </ul>
              <template #footer>
                <div class="flex gap-2 flex-wrap">
                  <UBadge
                    v-for="techStackEl in experience.techStacks"
                    :key="techStackEl"
                    :label="techStackEl"
                    color="white"
                  />
                </div>
              </template>
            </UCard>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
