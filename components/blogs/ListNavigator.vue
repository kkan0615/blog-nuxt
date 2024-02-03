<script setup lang="ts">
defineProps<{
  categories: string[]
  tags: string[]
}>()

const route = useRoute()

const handleClick = () => {
  refreshNuxtData('contents')
}
</script>
<template>
  <div class="w-60 lg:block hidden">
    <h6 class="capitalize font-semibold mb-1 inline-flex items-center gap-2">
      <UIcon
        name="i-heroicons-bookmark-square"
      />
      {{ $t('labels.categories') }}
    </h6>
    <ul class="mb-8">
      <NuxtLink
        v-for="categoryEl in categories"
        :key="categoryEl"
        class="text-sm capitalize hover:underline"
        :to="{
          path: route.path,
          query: {
            ...route.query,
            category: categoryEl,
          }
        }"
        @click="handleClick"
      >
        <li>
          {{ $t(`categories.${categoryEl}`) }}
        </li>
      </NuxtLink>
    </ul>
    <h6 class="capitalize font-semibold mb-2 inline-flex items-center gap-2">
      <UIcon
        color="primary"
        name="i-heroicons-tag"
      />
      {{ $t('labels.tags') }}
    </h6>
    <ul class="flex gap-1 flex-wrap">
      <NuxtLink
        v-for="tagEl in tags"
        :key="tagEl"
        class="text-sm capitalize hover:underline"
        :to="{
          path: route.path,
          query: {
            ...route.query,
            tag: tagEl,
          }
        }"
        @click="handleClick"
      >
        <UBadge>
          #{{ $t(`tags.${tagEl}`) }}
        </UBadge>
      </NuxtLink>
    </ul>
  </div>
</template>
