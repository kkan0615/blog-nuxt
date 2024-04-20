<script lang="ts" setup>
import type { Showcase } from '~/types/showcase'
defineProps<{
  showcase: Showcase // Project
}>()

</script>

<template>
  <NuxtLink
    class="h-full"
    to="'/'"
  >
    <div class="h-full flex flex-col border rounded-2xl">
      <div class="aspect-video overflow-hidden rounded-t-2xl relative">
        <NuxtImg
          v-if="showcase.image?.path"
          class="w-full h-full hover:scale-125 transition duration-200 cursor-pointer"
          :alt="showcase.title"
          :src="showcase.image.path"
        />
        <NuxtImg
          v-else
          class="w-full h-full hover:scale-125 transition duration-200 cursor-pointer"
          :alt="showcase.title"
          src="/blogs/no-image.jpg"
        />
      </div>
      <div class="p-3 flex-1 flex flex-col">
        <h2 class="text-lg font-bold">
          {{ showcase.title }}
        </h2>
        <p
          v-if="showcase.description"
          class="line-clamp-2 mb-3"
        >
          {{ showcase.description }}
        </p>
        <div class="mt-auto w-full text-sm">
          <div class="opacity-75">
            {{ showcase.lastUpdatedAt }}
          </div>
          <div>
            website
          </div>
        </div>
      </div>
      <hr>
    </div>
  </NuxtLink>
</template>

<style>

</style>
