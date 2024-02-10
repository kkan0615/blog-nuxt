<script setup lang="ts">
import { Experiences } from '@/types/me/experience'
</script>
<template>
  <section class="py-10 lg:py-20">
    <UContainer class="max-w-5xl">
      <h2 class="text-3xl font-bold mb-6 ">
        Experiences
      </h2>
      <ul class="space-y-3">
        <div
          role="listitem"
          class="hidden md:grid text-lg lg:grid-cols-4 grid-cols-1 text-stone-300"
        >
          <div>
            Position
          </div>
          <div>
            Company Name
          </div>
          <div>
            Location
          </div>
          <div>
            Date
          </div>
        </div>
        <NuxtLink
          v-for="experienceEl in Experiences"
          :key="experienceEl.companyName"
          :to="experienceEl.companyLink"
          target="_blank"
          role="listitem"
          class="text-lg grid lg:grid-cols-4 grid-cols-1 hover:bg-stone-500 rounded-md hover:px-2"
        >
          <div>
            {{ experienceEl.position }}
          </div>
          <div>
            {{ experienceEl.companyName }}
          </div>
          <div>
            {{ experienceEl.location }} ({{ experienceEl.remote }})
          </div>
          <div>
            {{ experienceEl.date }}
          </div>
        </NuxtLink>
      </ul>
    </UContainer>
  </section>
</template>
