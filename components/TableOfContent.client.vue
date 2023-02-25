<script setup lang="ts">
import Donation from '~/components/advertisements/Donation.vue'

type TOCNodeName = 'H1' | 'H2' | 'H3' | 'H4'

interface TOC {
  title: string,
  hash: string,
  nodeName: TOCNodeName
  el: Element
}

interface Props {
  articleId: string
}

const HeaderSelectors = 'h1, h2, h3, h4'

const props = defineProps<Props>()

const { t } = useI18n()

const toc = ref<TOC[]>([])
const observer = ref<IntersectionObserver | null>(null)
/** Links template ref */
const ulRef = ref<HTMLUListElement | null>(null)

/**
 * Create Table of content. Push the headers to toc array
 */
const createToc = () => {
  const article = document.getElementById(props.articleId)
  if (!article) throw new Error('No article')

  const newToc: TOC[] = []
  const headers = article.querySelectorAll(HeaderSelectors)

  headers.forEach(header => {
    newToc.push({
      title: header.textContent || '',
      hash: header.id,
      nodeName: header.nodeName as TOCNodeName,
      el: header,
    })
  })

  toc.value = newToc
}

/**
 * Click the toc element
 * @param {TOC} content - clicked content
 */
const handleClick = (content: TOC) => {
  content.el.scrollIntoView({ behavior: 'smooth' })
}

const observeHeaders = () => {
  const article = document.getElementById(props.articleId)
  if (!article) throw new Error('No article')

  const headerEls = article.querySelectorAll(HeaderSelectors)
  if (!headerEls.length) throw createError({ statusCode: 404 })

  observer.value = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!ulRef.value) return
      // Find link elements under link ul element
      // find element by id
      const found = Array.from( ulRef.value.querySelectorAll('li') || []).find(liEl => liEl.id === entry.target.id)
      if(!found) return
      if (entry.isIntersecting) {
        found.classList.add('opacity-100')
        found.classList.remove('opacity-70')
      } else {
        found.classList.add('opacity-70')
        found.classList.remove('opacity-100')
      }
    })
  })
  headerEls.forEach(headerEl => observer.value?.observe(headerEl))
}

onMounted(async () =>{
  // Client is required to use with nextTick function
  await nextTick(() => {
    createToc()
    observeHeaders()
  })
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
      ref="ulRef"
      class="space-y-1"
    >
      <li
        v-for="content in toc"
        :id="content.hash"
        :key="content.hash"
        class="opacity-70 text-sm"
        :class="{
          'ml-4': content.nodeName === 'H3',
          'ml-8': content.nodeName === 'H4',
        }"
        @click="() => handleClick(content)"
      >
        <NuxtLink :href="`#${content.hash}`">
          {{ content.title }}
        </NuxtLink>
      </li>
    </ul>
    <div class="mt-4">
      <Donation sm />
    </div>
  </div>
</template>

