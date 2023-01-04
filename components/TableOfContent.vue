<script setup lang="ts">

interface TOC {
  title: string,
  hash: string,
  nodeName: 'H1' | 'H2' | 'H3'
  el: Element
}

interface Props {
  articleId: string
}
const props = defineProps<Props>()

const toc = ref<TOC[]>([])

const createToc = () => {
  const article = document.getElementById(props.articleId)
  if (!article) {
    throw new Error('No article')
  }
  const newToc: TOC[] = []
  const headers = article.querySelectorAll('h1, h2')
  headers.forEach(header => {
    newToc.push({
      title: header.textContent || '',
      hash: header.id,
      nodeName: header.nodeName as ('H1' | 'H2' | 'H3'),
      el: header,
    })
  })

  toc.value = newToc
}

const handleClick = (content: TOC) => {
  content.el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() =>{
  createToc()
})

</script>
<template>
  <div
    class="px-2 w-full"
  >
    <div
      class="font-bold mb-2"
    >
      Table of Content
    </div>
    <ul
      class="space-y-1"
    >
      <li
        v-for="content in toc"
        :key="content.hash"
        class="text-sm"
        :class="{
          'ml-2': content.nodeName === 'H2',
          'ml-4': content.nodeName === 'H3',
        }"
        @click="() => handleClick(content)"
      >
        <NuxtLink
          :href="`#${content.hash}`"
        >
          {{ content.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

