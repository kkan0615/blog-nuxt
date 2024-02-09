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
        const animate = entry.target.getAttribute('data-animate')
        if (animate) {
          entry.target.classList.add(animate)
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
