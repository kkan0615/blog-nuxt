<script setup lang="ts">
import type { Toc, TocLink } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  toc?: Toc
}>()

const observer = ref<IntersectionObserver | null>(null)
const activeId = ref('')

const initObserver = () => {
  observer.value = new IntersectionObserver((entries, observer) => {
    entries.forEach((entryEl) => {
      if (entryEl.isIntersecting) { activeId.value = entryEl.target.id }
    })
  })

  if (props.toc?.links) { startObserve(props.toc?.links) }
}

const startObserve = (links: TocLink[]) => {
  if (!observer.value) { return }
  links.forEach((linkEl) => {
    const foundEl = document.getElementById(linkEl.id)
    if (foundEl) { observer.value?.observe(foundEl) }
    if (linkEl.children) { startObserve(linkEl.children) }
  })
}

onMounted(() => {
  initObserver()
})

</script>
<template>
  <div>
    <ul>
      <li class="font-bold mb-1">
        Table of Contents
      </li>
      <UiTocItem
        v-if="toc?.links"
        :links="toc.links"
        :active-id="activeId"
      />
    </ul>
  </div>
</template>
