<script setup lang="ts">
defineProps<{
  url: string
  categories: string[]
  tags: string[]
}>()

const localePath = useLocalePath()

</script>
<template>
  <div>
    <div class="flex items-center gap-2 mb-2">
      <UTooltip text="Categories">
        <UIcon
          class="text-xl"
          name="i-heroicons-bookmark-square"
        />
      </UTooltip>
      <NuxtLink
        v-for="categoryEl in categories"
        :key="categoryEl"
        :to="{
          path: localePath('/blogs'),
          query: {
            category: categoryEl,
          }
        }"
      >
        <UBadge
          class="dark:!text-white"
          :label="$t(`categories.${categoryEl}`)"
        />
      </NuxtLink>
    </div>
    <div class="flex items-center gap-2 mb-4">
      <UTooltip text="Tags">
        <UIcon
          color="primary"
          class="text-xl"
          name="i-heroicons-tag"
        />
      </UTooltip>
      <NuxtLink
        v-for="tagEl in tags"
        :key="tagEl"
        :to="{
          path: localePath('/blogs'),
          query: {
            tag: tagEl,
          }
        }"
      >
        <UBadge
          class="dark:!text-white"
          color="primary"
        />
      </NuxtLink>
    </div>
    <BlogsShares :url="url" />
  </div>
</template>
