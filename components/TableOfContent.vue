<script setup lang="ts">
import Donation from '~/components/advertisements/Donation.vue'

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

const { t } = useI18n()

const toc = ref<TOC[]>([])

const createToc = () => {
  const article = document.getElementById(props.articleId)
  console.log('article', article)
  if (!article) {
    throw new Error('No article')
  }
  const newToc: TOC[] = []
  const headers = article.querySelectorAll('h1, h2, h3')
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

onMounted(async () =>{
  await nextTick(() => createToc())
})

</script>
<template>
  <div class="px-2 w-full">
    <div class="font-bold mb-2 capitalize">
      {{ t('commons.labels.toc') }}
    </div>
    <ul class="space-y-1">
      <li
        v-for="content in toc"
        :key="content.hash"
        class="link"
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
    <div class="mt-4">
      <Donation sm />
    </div>
  </div>
</template>

