<script setup lang="ts">
const videoRef = ref<HTMLvideoElement>()

const handlePlay = () => {
  // videoRef.value
}

const handleStop = () => {
  // videoRef.value
}
</script>
<template>
  <section class="h-screen relative">
    <video
      ref="videoRef"
      loop
      autoplay
      muted
      src="/homes/anime-typing.mp4"
      class="md:object-fill object-cover w-full h-full absolute opacity-80"
    />
    <UTooltip
      class="absolute bottom-4 right-4 z-5"
      text="Stop"
    >
      <UButton
        class="rounded-full"
        size="xl"
        icon="i-heroicons-pause-20-solid"
        color="white"
        variant="outline"
        @click="handleStop"
      />
    </UTooltip>
    <UTooltip
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
