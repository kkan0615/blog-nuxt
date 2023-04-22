<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  sm?: boolean
}
withDefaults(defineProps<Props>(), {
  sm: false
})

const { t } = useI18n()

const modalRef = ref<HTMLDialogElement | undefined>(undefined)

const toggleOpen = () => {
  if (modalRef.value)
    modalRef.value.open ? modalRef.value.close() : modalRef.value.showModal()
}
</script>
<template>
  <button
    class="bg-[#FF813F] text-white py-2.5 px-2 rounded w-full font-bold"
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
        height="24"
      />
      <span class="ml-2">
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
      <span class="ml-4 text-2xl">
        {{ t('components.donations.title') }}
      </span>
    </div>
  </button>
  <dialog
    ref="modalRef"
    class="animate__animated animate__faster animate__fadeInDown bg-base-100 text-base-content rounded p-0"
  >
    <div>
      <div class="flex items-center bg-primary text-white px-2 py-3">
        <h3 class="text-xl">
          {{ t('components.donations.dialogTitle') }}
        </h3>
        <button
          class="btn btn-sm btn-circle btn-ghost ml-auto"
          @click="toggleOpen"
        >
          <Icon
            class="text-2xl"
            icon="material-symbols:close-rounded"
          />
        </button>
      </div>
      <div class="card">
        <div class="card-body pt-4">
          <p class="text-center mb-4">
            {{ t('components.donations.dialogDescription') }}
          </p>
          <ul class="flex flex-col space-y-4">
            <li class="text-center">
              <LazyAdvertisementsBuyMeACoffee />
            </li>
            <li>
              <span class="text-lg">
                Paypal
              </span>
              <NuxtImg
                class="mt-2"
                src="/donations/paypal-qrcode.png"
                alt="paypal-qrcode"
                :width="250"
                :height="250"
              />
            </li>
            <li>
              <a
                href="https://www.patreon.com/youngjin_kwak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://c5.patreon.com/external/logo/become_a_patron_button.png"
                  alt="Become a Patron!"
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </dialog>
</template>
