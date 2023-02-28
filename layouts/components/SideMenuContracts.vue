<script setup lang="ts">
import ContactLink from '~/components/links/ContactLink.vue'

const appConfig = useAppConfig()
const { t } = useI18n()

</script>
<template>
  <div class="flex items-center justify-center mb-4">
    <div class="mt-2 flex text-3xl space-x-2">
      <ContactLink
        v-if="appConfig.profile.email"
        icon="ic:outline-email"
        :tooltip="appConfig.profile.email"
        :href="`mailto:${appConfig.profile.email}`"
      />
      <ContactLink
        v-if="appConfig.profile.socials.linkedIn"
        icon="mdi:linkedin"
        :tooltip="t('tooltips.linkedIn')"

        :href="appConfig.profile.socials.linkedIn"
      />
      <ContactLink
        v-if="appConfig.profile.socials.github"
        icon="ri:github-fill"
        :tooltip="t('tooltips.github')"
        :href="appConfig.profile.socials.linkedIn"
      />
    </div>
  </div>
</template>
