<script setup lang="ts">
const props = defineProps<{
  url: string
  categories: string[]
  tags: string[]
}>()
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
      <UBadge
        v-for="categoryEl in categories"
        :key="categoryEl"
        :label="categoryEl"
      />
    </div>
    <div class="flex items-center gap-2 mb-4">
      <UTooltip text="Tags">
        <UIcon
          class="text-xl"
          name="i-heroicons-tag"
        />
      </UTooltip>
      <UBadge
        v-for="tagEl in tags"
        :key="tagEl"
        :label="tagEl"
      />
    </div>
    <BlogsShares :url="url" />
  </div>
</template>
