<script setup lang="ts">
const props = defineProps<{
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
          :label="categoryEl"
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
          color="primary"
          :label="`#${tagEl}`"
        />
      </NuxtLink>
    </div>
    <BlogsShares :url="url" />
  </div>
</template>
