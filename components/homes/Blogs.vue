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
        <h2 class="text-3xl font-bold capitalize lg:mb-8 mb-4">
          {{ $t('labels.recentPosts') }}
        </h2>
        <NuxtLink :to="localePath('/blogs')">
          <UTooltip class="uppercase" :text="$t('labels.lookMorePosts')">
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
          v-for="(dataEl, index) in data"
          :key="dataEl._id"
          :content="dataEl"
          data-animate="animate-fade-down"
          :class="{
            'lg:animate-delay-[200ms]': index === 0,
            'lg:animate-delay-[400ms]': index === 1,
            'lg:animate-delay-[600ms]': index === 2,
          }"
        />
        <!-- :style="`animation-delay:${200 * (index + 1)}ms;`" -->
      </div>
    </UContainer>
  </section>
</template>
