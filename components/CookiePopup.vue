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
    class="animate__animated animate__fadeIn fixed bottom-2 right-2 z-50 alert shadow-lg max-w-4xl"
  >
    <div>
      <NuxtImg
        class="mr-2"
        src="/assets/cookie-32x32.png"
        width="32px"
        height="32px"
      />
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
