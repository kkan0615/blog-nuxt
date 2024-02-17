<script setup lang="ts">
import type { CustomParsedContent } from '@/types/post'

const props = defineProps<{
  content: CustomParsedContent
}>()

const URL = computed(() => props.content?._path || '')

</script>
<template>
  <div class="flex items-center gap-2">
    <UTooltip text="Suggest to dit">
      <NuxtLink to="/" target="_blank">
        <UButton
          icon="i-simple-icons-github"
          color="white"
          size="xs"
          square
          variant="outline"
        />
      </NuxtLink>
    </UTooltip>
    <div class="mx-auto" />
    <UTooltip text="Share to Linkedin">
      <NuxtLink
        :to="`https://www.linkedin.com/shareArticle?mini=true&u=${URL}&t=${content?.title || ''}`"
        target="_blank"
        rel="noopener"
      >
        <UButton
          icon="i-simple-icons-linkedin"
          color="white"
          size="xs"
          square
          variant="outline"
        />
      </NuxtLink>
    </UTooltip>
    <UTooltip text="Share to instagram">
      <NuxtLink
        :to="`https://www.instagram.com/?u=${URL}&t=${content?.title || ''}`"
        target="_blank"
        rel="noopener"
      >
        <UButton
          icon="i-simple-icons-instagram"
          color="white"
          size="xs"
          square
          variant="outline"
        />
      </NuxtLink>
    </UTooltip>
    <UTooltip text="Share to facebook">
      <NuxtLink
        :to="`https://www.facebook.com/sharer.php?u=${URL}&t=${content?.title || ''}`"
        target="_blank"
        rel="noopener"
      >
        <UButton
          icon="i-simple-icons-facebook"
          color="white"
          size="xs"
          square
          variant="outline"
        />
      </NuxtLink>
    </UTooltip>
    <UTooltip text="Share to X">
      <NuxtLink
        :to="`https://twitter.com/intent/tweet?u=${URL}&t=${content?.title || ''}`"
        target="_blank"
        rel="noopener"
      >
        <UButton
          icon="i-simple-icons-x"
          color="white"
          size="xs"
          square
          variant="outline"
        />
      </NuxtLink>
    </UTooltip>
    <UtilsCopyURL
      v-if="content._path"
      size="xs"
      :url="content._path"
    />
  </div>
</template>
