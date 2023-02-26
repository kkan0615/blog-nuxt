<script setup lang="ts">
import { Toc, TocLink } from '@nuxt/content/dist/runtime/types'
import Donation from '~/components/advertisements/Donation.vue'

interface Props {
  articleId: string
  toc: Toc
}

const HeaderSelectors = 'h1, h2'

const props = defineProps<Props>()
const { t } = useI18n()

const observer = ref<IntersectionObserver | null>(null)
const activeId = ref('')

/**
 * Click the toc element
 * @param {TocLink} content - clicked content
 */
const handleClick = (content: TocLink) => {
  const baseContentEl = document.getElementById('base-content')
  const linkEl = document.getElementById(content.id)
  if (baseContentEl && linkEl) {
    baseContentEl.scrollTo({
      top: linkEl.offsetTop,
      behavior: 'smooth',
    })
  }
}

const observeHeaders = () => {
  const article = document.getElementById(props.articleId)
  if (!article) throw new Error('No article')

  const headerEls = article.querySelectorAll(HeaderSelectors)
  if (!headerEls.length) return
  activeId.value = headerEls.item(0).id

  observer.value = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
      }
    })
  })
  headerEls.forEach(headerEl => observer.value?.observe(headerEl))
}

onMounted(() =>{
  observeHeaders()
})

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect()
    observer.value = null
  }
})

</script>
<template>
  <div class="px-2 w-full">
    <div class="font-bold mb-2 capitalize">
      {{ t('commons.labels.toc') }}
    </div>
    <ul
      v-if="toc && toc.links"
      class="space-y-2"
    >
      <li
        v-for="content in toc.links"
        :id="content.id"
        :key="content.id"
        class=" text-sm pl-2"
        :class="{
          'opacity-70': activeId !== content.id,
          'border-l-2 border-l-primary opacity-100': activeId === content.id
        }"
        @click="() => handleClick(content)"
      >
        <NuxtLink :href="`#${content.id}`">
          {{ content.text }}
        </NuxtLink>
        <ul
          v-if="activeId === content.id && content.children"
          class="animate__animated animate__fadeIn space-y-1 mt-1"
        >
          <TOCItem
            v-for="child in content.children"
            :id="child.id"
            :key="child.id"
            :content="child"
          />
        </ul>
      </li>
    </ul>
    <div class="mt-4">
      <Donation sm />
    </div>
  </div>
</template>

