<script setup lang="ts">
interface Props {
  filepath: string
}

defineProps<Props>()
const { t } = useI18n()
const appConfig = useAppConfig()
</script>
<template>
  <a
    :href="`${appConfig.github}/edit/main/content/${filepath}`"
    rel="noopener noreferrer"
    target="_blank"
    class="link hover:text-primary transition duration-200 ease-in-out"
  >
    {{ t('commons.labels.editOnGithub') }}
  </a>
</template>
