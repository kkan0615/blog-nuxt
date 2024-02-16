<script setup lang="ts">
import { Experiences } from '@/types/me/experience'
</script>
<template>
  <section class="py-10 lg:py-20">
    <UContainer class="max-w-5xl">
      <h2 class="text-3xl font-bold mb-6 ">
        Experiences
      </h2>
      <div class="w-full">
        <AboutMesExperienceItem
          v-for="experienceEl in Experiences"
          :key="experienceEl.companyName"
          :experience="experienceEl"
        />
      </div>
    </UContainer>
  </section>
</template>
