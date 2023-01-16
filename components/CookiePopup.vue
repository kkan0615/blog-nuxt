<script setup lang="ts">
import Cookies from 'js-cookie'

const acceptCookie = useCookie('accept')
const { t } = useI18n()

const visible = ref(!acceptCookie.value)

const handleAccept = () => {
  Cookies.set('accept', 'Y')
  visible.value = false
}
</script>
<template>
  <div
    v-if="visible"
    class="fixed bottom-2 right-0 z-50 alert shadow-lg max-w-lg"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-info flex-shrink-0 w-6 h-6"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg>
      <span>
        {{ t('commons.messages.cookieAccept') }}
      </span>
    </div>
    <div class="flex-none">
      <button
        class="btn btn-sm btn-primary"
        @click="handleAccept"
      >
        {{ t('commons.btns.accept') }}
      </button>
    </div>
  </div>
</template>
