<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const appConfig = useAppConfig()
</script>
<template>
  <section>
    <div
      class="flex items-center animate__animated mb-1"
      data-animate="animate__fadeInUp"
    >
      <!--      <h2 class="text-3xl font-black capitalize mb-2">-->
      <!--        About-->
      <!--      </h2>-->
    </div>
    <div class="flex space-x-8">
      <div class="grow text-center">
        <h3 class="text-4xl font-bold">
          I am glad to see you!
        </h3>
        <p class="mt-4 text-xl">
          I will do my best to share my skills with you! 😀 <br>
          If you would like to contact with me click following button!
        </p>
        <NuxtLink :to="localePath('/blogs')">
          <button
            class="btn btn-primary rounded-full mt-4"
            type="button"
          >
            Contact
          </button>
        </NuxtLink>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-4">
          <div class="stat bg-base-100 shadow rounded">
            <div class="stat-title">
              Days after start
            </div>
            <div class="stat-value">
              89,400
            </div>
          </div>
          <div class="stat bg-base-100 shadow rounded">
            <div class="stat-title">
              Days after start
            </div>
            <div class="stat-value">
              89,400
            </div>
          </div>
          <div class="stat bg-base-100 shadow rounded">
            <div class="stat-title">
              Days after start
            </div>
            <div class="stat-value">
              89,400
            </div>
          </div>
          <div class="stat bg-base-100 shadow rounded">
            <div class="stat-title">
              Days after start
            </div>
            <div class="stat-value">
              89,400
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
