<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onBeforeUnmount, onMounted } from '#imports'

const visible = ref(true)
const contentDiv = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const found = document.getElementById('base-content')
  if (found) {
    contentDiv.value = found as HTMLDivElement
    contentDiv.value.addEventListener('scroll', handleScroll)
  }
})

onBeforeUnmount(() => {
  if (contentDiv.value)
    contentDiv.value.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  if (!contentDiv.value) return
  visible.value = contentDiv.value.scrollTop > 0
}

const handleClick = () => {
  if (!contentDiv.value) return
  contentDiv.value.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

</script>
<template>
  <div class="fixed bottom-10 right-10">
    <button
      v-if="visible"
      class="btn btn-circle"
      @click="handleClick"
    >
      <Icon icon="material-symbols:keyboard-arrow-up" />
    </button>
  </div>
</template>
