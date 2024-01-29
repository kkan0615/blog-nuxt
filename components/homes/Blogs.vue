<script setup lang="ts">
import type { CustomParsedContent } from '@/types/post'
const localePath = useLocalePath()

const { data } = await useAsyncData('blogs', async () => await queryContent<CustomParsedContent>('blogs/')
  .sort({
    date: -1,
  })
  .limit(3)
  .find()
)
</script>

<template>
  <section class="py-10 lg:py-20">
    <UContainer>
      <div class="flex justify-between">
        <h2 class="text-3xl font-bold lg:mb-8 mb-4">
          Recent posts
        </h2>
        <NuxtLink :to="localePath('/blogs')">
          <UTooltip text="Look more posts">
            <UButton
              class="capitalize"
              color="primary"
              variant="link"
              icon="i-lucide-arrow-right"
              trailing
            >
              {{ $t('labels.more') }}
            </UButton>
          </UTooltip>
        </NuxtLink>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <CardsBlog
          v-for="dataEl in data"
          :key="dataEl._id"
          :content="dataEl"
        />
      </div>
    </UContainer>
  </section>
</template>
