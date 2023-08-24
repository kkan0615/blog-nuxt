<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const appConfig = useAppConfig()
</script>
<template>
  <section class="max-w-4xl mx-auto px-2 lg:px-0 lg:py-4">
    <div
      class="flex items-center animate__animated mb-1"
      data-animate="animate__fadeInUp"
    >
      <h2 class="text-3xl font-black capitalize ">
        About
      </h2>
      <div class="mx-auto" />
      <NuxtLink :to="localePath('/blogs')">
        <button
          class="btn btn-primary btn-ghost btn-sm"
          type="button"
        >
          Contact
          <Icon
            class="text-xl"
            icon="material-symbols:arrow-forward"
          />
        </button>
      </NuxtLink>
    </div>
    <div class="flex space-x-4">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">
            Days
          </div>
          <div class="stat-value">
            89,400
          </div>
        </div>
      </div>
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">
            Total Posts
          </div>
          <div class="stat-value">
            89,400
          </div>
          <!--        <div class="stat-desc">-->
          <!--          21% more than last month-->
          <!--        </div>-->
        </div>
      </div>
    </div>
  </section>
</template>
