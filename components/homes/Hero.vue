<script setup lang="ts">
import { useStorage } from '@vueuse/core'

const videoRef = ref<HTMLVideoElement>()

const isPlaying = useStorage('playing', true)

const handlePlay = () => {
  videoRef.value?.play()
  isPlaying.value = true
}

const handlePause = () => {
  videoRef.value?.pause()
  isPlaying.value = false
}

const handleNext = () => {
  // 58 is equal to navbar height
  window.scrollTo({
    top: window.innerHeight - 58,
    behavior: 'smooth',
  })
}
</script>
<template>
  <section class="h-screen relative flex items-center justify-center">
    <video
      ref="videoRef"
      :autoplay="isPlaying"
      loop
      muted
      src="/homes/anime-typing.mp4"
      class="md:object-fill object-cover w-full h-full absolute opacity-80 -z-10"
    />
    <div class="text-white z-10 text-center">
      <h1 class="mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-6xl font-bold">
        Hello World
      </h1>
      <p class="text-xl">
        Welcome to Youngjin Blog
      </p>
    </div>
    <div class="absolute bottom-4">
      <UTooltip
        text="Scroll Down"
      >
        <UButton
          class="rounded-full animate-bounce"
          size="xl"
          icon="i-heroicons-chevron-down-16-solid"
          color="white"
          variant="solid"
          @click="handleNext"
        />
      </UTooltip>
    </div>
    <UTooltip
      v-if="isPlaying"
      class="absolute bottom-4 right-4 z-5"
      text="Pause"
    >
      <UButton
        class="rounded-full"
        size="xl"
        icon="i-heroicons-pause-20-solid"
        color="white"
        variant="outline"
        @click="handlePause"
      />
    </UTooltip>
    <UTooltip
      v-else
      class="absolute bottom-4 right-4 z-5"
      text="Play"
    >
      <UButton
        class="rounded-full"
        size="xl"
        icon="i-heroicons-play-16-solid"
        color="white"
        variant="outline"
        @click="handlePlay"
      />
    </UTooltip>
  </section>
</template>
