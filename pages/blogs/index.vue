<script setup lang="ts">
import type { CustomParsedContent } from '@/types/post'

const { data } = await useAsyncData('blogs', async () => await queryContent<CustomParsedContent>('blogs/').find())
console.log(data.value)

</script>
<template>
  <UContainer class="mt-14 py-3">
    <div class="flex space-x-2">
      <div class="flex-1 grid grid-cols-3">
        <CardsBlog
          v-for="dataEl in data"
          :key="dataEl._id"
          :content="dataEl"
        />
      </div>
      <div class="w-52">
        Right navigator
      </div>
    </div>
  </UContainer>
</template>
