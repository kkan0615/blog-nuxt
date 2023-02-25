<script setup lang="ts">
import { Icon } from '@iconify/vue'

const appConfig = useAppConfig()
const { t } = useI18n()

</script>
<template>
  <div class="flex items-center justify-center mb-4">
    <div class="mt-2 flex text-3xl space-x-2">
      <div
        v-if="appConfig.profile.email"
        class="tooltip"
        :data-tip="appConfig.profile.email"
      >
        <a
          :href="`mailto:${appConfig.profile.email}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="ic:outline-email"
            class="hover:-rotate-45 transition ease-in-out duration-300"
          />
        </a>
      </div>
      <div
        v-if="appConfig.profile.socials.linkedIn"
        class="tooltip"
        :data-tip="t('tooltips.linkedIn')"
      >
        <a
          :href="appConfig.profile.socials.linkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="mdi:linkedin"
            class="hover:-rotate-45 transition ease-in-out duration-300"
          />
        </a>
      </div>
      <div
        v-if="appConfig.profile.socials.github"
        class="tooltip"
        :data-tip="t('tooltips.github')"
      >
        <a
          :href="appConfig.profile.socials.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="ri:github-fill"
            class="hover:-rotate-45 transition ease-in-out duration-300"
          />
        </a>
      </div>
    </div>
  </div>
</template>
