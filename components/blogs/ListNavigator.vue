<script setup lang="ts">
defineProps<{
  categories: string[]
  tags: string[]
}>()

const route = useRoute()

const handleClick = async () => {
  await refreshNuxtData('counts')
  await refreshNuxtData('contents')
}

</script>
<template>
  <div class="w-60 lg:block hidden">
    <div>
      <NuxtLink
        :to="{
          path: route.path,
          replace: true,
        }"
        @click="handleClick"
      >
        <UButton
          class="px-0"
          icon="i-mdi-remove"
          color="white"
          variant="link"
          label="Reset Option"
          @click="handleClick"
        />
      </NuxtLink>
    </div>
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
          },
          replace: true,
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
          },
          replace: true,
        }"
        @click="handleClick"
      >
        <UBadge
          class="dark:!text-white"
          :label="`#${$t(`tags.${tagEl}`)}`"
        />
      </NuxtLink>
    </ul>
  </div>
</template>
