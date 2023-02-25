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
          class="tooltip"
          :data-tip="t('tooltips.indeed')"
        >
          <a
            href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-homepage&_ga=2.229680351.2145071738.1672341480-1054300716.1666887722"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="simple-icons:indeed"
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
  </div>
</template>
