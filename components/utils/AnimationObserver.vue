<script setup lang="ts">
const observer = ref<IntersectionObserver | null>(null)
onBeforeUnmount(() => {
  if (observer.value) {
    observer.value?.disconnect()
    observer.value = null
  }
})

onMounted(() => {
  initAnimateObserver()
})

const initAnimateObserver = () => {
  const sectionEls = document.querySelectorAll('[data-animate]:not([value=""])')
  if (!sectionEls.length) { return }

  observer.value = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting
      if (intersecting) {
        const animates = entry.target.getAttribute('data-animate')?.split(' ') || []
        if (animates.length) {
          animates.map(animateEl => entry.target.classList.add(animateEl))
          observer.unobserve(entry.target)
        }
      }
    })
  }, {
    rootMargin: '0px',
    threshold: 0.1
  })

  sectionEls.forEach(sectionEl => observer.value?.observe(sectionEl))
}
</script>
<template>
  <div />
</template>
