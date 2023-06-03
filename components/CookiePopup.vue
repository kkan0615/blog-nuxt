<script setup lang="ts">
const acceptCookie = useCookie('accept')
const { t } = useI18n()

const visible = ref(!acceptCookie.value)

const handleAccept = () => {
  acceptCookie.value = 'Y'
  visible.value = false
}
</script>
<template>
  <div
    v-if="visible"
    class="animate__animated animate__fadeIn fixed bottom-2 right-2 z-50 alert shadow-lg max-w-2xl"
  >
    <div class="flex items-center">
      <NuxtImg
        class="mr-4"
        src="/assets/cookie-32x32.png"
        width="32px"
        height="32px"
      />
      <div>
        {{ t('commons.messages.cookieAccept') }}
      </div>
    </div>
    <div>
      <button
        class="btn btn-sm btn-primary"
        @click="handleAccept"
      >
        {{ t('commons.btns.accept') }}
      </button>
    </div>
  </div>
</template>
