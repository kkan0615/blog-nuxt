<script setup lang="ts">
interface Props {
  error: any
}

const props = defineProps<Props>()
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
        <p class="py-6">
          {{ t(`commons.messages.errors.${error.statusCode.toString()}`) }}
        </p>
        <!-- Display full message if it's dev mode -->
        <DevOnly>
          <p class="py-6">
            {{ error.message }}
          </p>
        </DevOnly>
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
