<script setup lang="ts">

defineProps<{
  url: string
}>()

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
      <NuxtLink to="/" target="_blank">
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
      <NuxtLink to="/" target="_blank">
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
      <NuxtLink to="/" target="_blank">
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
      <NuxtLink to="/" target="_blank">
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
      size="xs"
      :url="url"
    />
  </div>
</template>
