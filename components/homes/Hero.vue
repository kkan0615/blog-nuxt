<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const runtimeConfig = useRuntimeConfig()

defineOptions({
  name: 'HomesHero'
})

const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(true)

const handlePlay = () => {
  videoRef.value?.play()
  isPlaying.value = true
}

const handlePause = () => {
  videoRef.value?.pause()
  isPlaying.value = false
}

const moveToFirstSection = () => {
  const sections = document.getElementsByTagName('section')
  if (sections.length >= 1) {
    window.scrollTo({
      top: sections[0].offsetTop,
      behavior: 'smooth'
    })
  }
}
</script>
<template>
  <div class="h-screen relative bg-black">
    <video
      ref="videoRef"
      loop
      autoplay
      muted
      :src="`${runtimeConfig.public.NUXT_PUBLIC_BASE_URL}assets/home/anime-typing.mp4`"
      class="md:object-fill object-cover w-full h-full absolute opacity-80"
    />
    <div class="h-full w-full flex justify-center items-center absolute">
      <div class="max-w-5xl text-white">
        <HomesTextAnimation text="Hello world" />
        <div class="text-2xl mt-2 text-center">
          Welcome to Youngjin's Blog
        </div>
        <div class="mt-12 text-center">
          <button
            class="btn btn-outline btn-circle text-inherit animate-bounce"
            @click="moveToFirstSection"
          >
            <Icon
              class="text-2xl"
              icon="ic:baseline-arrow-downward"
            />
          </button>
        </div>
      </div>
    </div>
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
