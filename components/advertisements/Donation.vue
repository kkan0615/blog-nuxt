<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { t } = useI18n()

const modalRef = ref<HTMLDialogElement | undefined>(undefined)

const toggleOpen = () => {
  if (modalRef.value)
    modalRef.value.open ? modalRef.value.close() : modalRef.value.showModal()
}
</script>
<template>
  <button
    class="btn w-full btn-outline hover:bg-red-500 hover:text-white group"
    @click="toggleOpen"
  >
    <Icon
      class="text-2xl text-red-500 group-hover:text-white ease-in duration-150"
      icon="mdi:heart"
    />
    <span class="ml-2">
      {{ t('components.donations.titleSm') }}
    </span>
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
