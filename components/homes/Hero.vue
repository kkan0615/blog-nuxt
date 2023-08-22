<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const runtimeConfig = useRuntimeConfig()

defineOptions({
  name: 'HomesHero'
})

const videoRef = ref<HTMLVideoElement>(null)
const isPlaying = ref(true)

const handlePlay = () => {
  videoRef.value.play()
  isPlaying.value = true
}

const handlePause = () => {
  videoRef.value.pause()
  isPlaying.value = false
}
</script>
<template>
  <div class="h-screen relative">
    <video
      ref="videoRef"
      loop
      autoplay
      muted
      :src="`${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}assets/home/anime-typing.mp4`"
      class="md:object-fill object-cover w-full h-full"
    />
    <div class="z-10 absolute right-6 bottom-6">
      <button
        v-if="isPlaying"
        class="btn btn-outline btn-circle text-white"
        @click="handlePause"
      >
        <Icon
          class="text-4xl"
          icon="material-symbols:pause"
        />
      </button>
      <button
        v-else
        class="btn btn-outline btn-circle text-white"
        @click="handlePlay"
      >
        <Icon
          class="text-4xl"
          icon="mdi:play"
        />
      </button>
    </div>
  </div>
</template>
