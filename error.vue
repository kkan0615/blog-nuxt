<script setup lang="ts">
interface Props {
  error: any
}

const props = defineProps<Props>()
const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()

const handleError = () => clearError({ redirect: '/' })
</script>
<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-7xl font-bold">
          {{ error.statusCode }}
        </h1>
        <p
          v-if="runtimeConfig.NUXT_PUBLIC_MODE === 'production'"
          class="py-6"
        >
          {{ t(`commons.messages.errors.${error.statusCode.toString()}`) }}
        </p>
        <p
          v-else
          class="py-6"
        >
          {{ error.message }}
        </p>
        <button
          type="button"
          class="btn btn-primary"
          @click="handleError"
        >
          {{ t(`commons.btns.backHome`) }}
        </button>
      </div>
    </div>
  </div>
</template>
