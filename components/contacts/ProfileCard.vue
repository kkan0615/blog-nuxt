<script setup lang="ts">
import { Icon } from '@iconify/vue'

const appConfig = useAppConfig()
const { t } = useI18n()

</script>
<template>
  <div class="card bg-base-300 mb-4">
    <div class="card-body">
      <h2 class="card-title">
        {{ t('views.contact.profileCard.title') }}
      </h2>
      <div class="mt-2 flex text-3xl space-x-2">
        <div
          class="tooltip"
          :data-tip="t('tooltips.LinkedIn')"
        >
          <a
            href="https://www.linkedin.com/in/youngjin-kwak-91658323a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:linkedin" />
          </a>
        </div>
        <div
          class="tooltip"
          :data-tip="t('tooltips.indeed')"
        >
          <a
            href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-homepage&_ga=2.229680351.2145071738.1672341480-1054300716.1666887722"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="simple-icons:indeed" />
          </a>
        </div>
        <div
          class="tooltip"
          :data-tip="t('tooltips.github')"
        >
          <a
            :href="appConfig.profile.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="ri:github-fill" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
