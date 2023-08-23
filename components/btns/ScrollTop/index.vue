<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onBeforeUnmount, onMounted } from '#imports'

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

</script>
<template>
  <div class="fixed bottom-5 right-5 sm:bottom-12 sm:right-12 z-10">
    <button
      v-if="isScrolled"
      class="btn btn-circle btn-outline animate__animated animate__fadeIn btn-sm sm:btn-md"
      @click="handleClick"
    >
      <span class="text-md sm:text-xl">
        <Icon icon="material-symbols:keyboard-arrow-up" />
      </span>
    </button>
  </div>
</template>
