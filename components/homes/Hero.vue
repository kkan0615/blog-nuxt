<script lang="ts" setup>
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'HomesHero'
})

const { t } = useI18n()
const runtimeConfig = useRuntimeConfig()
const isHeroPausedCookie = useCookie('is_hero_paused')

const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(isHeroPausedCookie.value !== 'Y')

onMounted(() => {
  if (!isPlaying.value) {
    handlePause()
  }
})

const handlePlay = () => {
  videoRef.value?.play()
  isPlaying.value = true
  isHeroPausedCookie.value = 'N'
}

const handlePause = () => {
  videoRef.value?.pause()
  isPlaying.value = false
  isHeroPausedCookie.value = 'Y'
}

const moveToFirstSection = () => {
  const sections = document.getElementsByTagName('section')
  if (sections.length >= 1) {
    window.scrollTo({
      top: sections[0].offsetTop - 64, // 64 is appbar size
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
      :src="`${runtimeConfig.public.NUXT_PUBLIC_SITE_URL}assets/home/anime-typing.mp4`"
      class="md:object-fill object-cover w-full h-full absolute opacity-80"
    />
    <div class="h-full w-full flex justify-center items-center absolute">
      <div class="max-w-5xl text-white">
        <HomesTextAnimation text="Hello world" />
        <div class="text-2xl mt-4 text-center">
          {{ t('views.home.sections.hero.welcome') }}
        </div>
        <div class="mt-12 text-center">
          <button
            class="btn btn-outline btn-circle text-inherit"
            :class="{
              'animate-bounce hover:animate-none': isPlaying,
            }"
            aria-label="move to next section"
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
      <div
        v-if="isPlaying"
        class="tooltip"
        data-tip="Pause"
      >
        <button
          class="btn btn-outline btn-circle text-white"
          aria-label="pause"
          @click="handlePause"
        >
          <Icon
            class="text-4xl"
            icon="material-symbols:pause"
          />
        </button>
      </div>
      <div
        v-else
        class="tooltip"
        data-tip="Play"
      >
        <button
          class="btn btn-outline btn-circle text-white"
          aria-label="play"
          @click="handlePlay"
        >
          <Icon
            class="text-4xl"
            icon="mdi:play"
          />
        </button>
      </div>
    </div>
  </div>
</template>
