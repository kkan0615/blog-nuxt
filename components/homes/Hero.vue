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
</script>
<template>
  <section class="h-screen relative">
    <video
      ref="videoRef"
      :autoplay="isPlaying"
      loop
      muted
      src="/homes/anime-typing.mp4"
      class="md:object-fill object-cover w-full h-full absolute opacity-80"
    />
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
