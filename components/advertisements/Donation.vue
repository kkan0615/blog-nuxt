<script setup lang="ts">
import BuyMeACoffee from '~/components/advertisements/BuyMeACoffee.vue'

interface Props {
  sm?: boolean
}
withDefaults(defineProps<Props>(), {
  sm: false
})

const { t } =useI18n()

const modalRef = ref<HTMLDialogElement | undefined>(undefined)

const toggleOpen = () => {
  if (modalRef.value)
    modalRef.value.open ? modalRef.value.close() : modalRef.value.showModal()
}
</script>
<template>
  <button
    class="bg-amber-500 text-white py-2.5 px-2 rounded w-full"
    @click="toggleOpen"
  >
    <div
      v-if="sm"
      class="flex items-center justify-center"
    >
      <NuxtImg
        src="/assets/donation-64px.png"
        alt="Donation"
        width="24"
        height="24&quot;"
      />
      <span
        class="ml-2"
      >
        {{ t('components.donations.titleSm') }}
      </span>
    </div>
    <div
      v-else
      class="flex items-center justify-center"
    >
      <NuxtImg
        src="/assets/donation-64px.png"
        alt="Donation"
        width="32"
        height="32"
      />
      <span
        class="ml-4 text-2xl"
      >
        {{ t('components.donations.title') }}
      </span>
    </div>
  </button>
  <dialog
    ref="modalRef"
    class="bg-base-100 text-base-content rounded p-0"
  >
    <div>
      <div
        class="flex items-center bg-primary text-white px-2 py-3"
      >
        <h3
          class="text-2xl"
        >
          {{ t('components.donations.dialogTitle') }}
        </h3>
        <button
          class="btn btn-sm btn-circle btn-ghost ml-auto"
          @click="toggleOpen"
        >
          ✕
        </button>
      </div>
      <div class="card">
        <div
          class="card-body pt-4"
        >
          <p class="text-center mb-4">
            {{ t('components.donations.dialogDescription') }}
          </p>
          <ul class="text-center">
            <li>
              <BuyMeACoffee />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </dialog>
</template>
