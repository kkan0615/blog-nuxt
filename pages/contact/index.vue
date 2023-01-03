<script setup lang="ts">
import ProfileCard from '~/components/contacts/ProfileCard.vue'
import RequestCard from '~/components/contacts/RequestCard.vue'
import { useLayoutStore } from '~/stores/layout'

const { t } = useI18n()

const layoutStore = useLayoutStore()

layoutStore.setHeaderTitle(t('menus.contact'))

</script>
<template>
  <div class="max-w-4xl">
    <ProfileCard />
    <RequestCard />
  </div>
</template>
