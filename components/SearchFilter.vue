<script lang="ts" setup>
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'SearchFilter'
})

const props = defineProps<{
  title: string
}>()

const isCollapseOpen = ref(true)
const modalRef = ref<HTMLDialogElement | undefined>(undefined)

const toggleDialog = () => {
  if (modalRef.value)
    modalRef.value.open ? modalRef.value.close() : modalRef.value.showModal()
}
</script>
<template>
  <div
    :tabindex="0"
    class="lg:grid hidden collapse collapse-arrow"
    :class="{
      'mb-4': !isCollapseOpen,
      'overflow-visible': isCollapseOpen,
    }"
  >
    <input
      v-model="isCollapseOpen"
      class="min-h-0"
      type="checkbox"
    >
    <div class="collapse-title text-xl font-medium capitalize px-0 py-2 min-h-0">
      {{ title }}
    </div>
    <div class="collapse-content px-0 overflow-visible">
      <slot />
    </div>
  </div>
  <!-- Open the modal using ID.showModal() method -->
  <button
    class="block lg:hidden btn btn-primary inline-flex items-center"
    @click="toggleDialog"
  >
    <Icon
      class="text-lg mt-1"
      icon="material-symbols:filter-alt-outline"
    />
    <span class="text-lg">
      Filter
    </span>
  </button>
  <dialog
    id="search-filter-modal"
    ref="modalRef"
    class="modal"
  >
    <form
      method="dialog"
      class="modal-box w-full h-full !max-h-full rounded-none flex flex-col"
    >
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
      <h3 class="font-bold text-lg capitalize shrink">
        {{ title }}
      </h3>
      <slot />
    </form>
    <form
      method="dialog"
      class="modal-backdrop"
    >
      <button>close</button>
    </form>
  </dialog>
</template>
