<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { CommentSelect } from '~/types/models/comments'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const props = defineProps<{
  postId: CommentSelect['postId']
  commentId: CommentSelect['id']
}>()

const emits = defineEmits<{
  (e: 'success'): void
}>()

const { t } = useI18n()
const validationSchema = toTypedSchema(
  z.object({
    password: z.string({
      required_error: 'Password required'
    })
      .max(255, {
        message: 'Maximum for Password is 255'
      })
      .trim().min(1, {
        message: 'Password required'
      }),
  })
)

const { handleSubmit, errors, isSubmitting, resetForm } = useForm({
  validationSchema,
})

const modalRef = ref<HTMLDialogElement | undefined>(undefined)
const inputRef = ref<HTMLInputElement | null>(null)
const isVisiblePassword = ref(false)

const toggleOpen = () => {
  if (modalRef.value)
    modalRef.value.open ? modalRef.value.close() : modalRef.value.showModal()

  resetForm()
  nextTick(() => {
    inputRef.value?.focus()
  })
}

const { value: password } = useField('password')

// Create new post
const onSubmit = handleSubmit(async (values) => {
  try {
    await $fetch(`/api/posts/${props.postId}/comments/${props.commentId}/delete`, {
      method: 'POST',
      body: {
        password: values.password,
      }
    })

    emits('success')
    toggleOpen()
  } catch (e) {
    console.error(e)
  }
})
</script>
<template>
  <div
    class="tooltip"
    data-tip="delete"
  >
    <button
      class="btn btn-sm btn-ghost px-2 text-error"
      @click="toggleOpen"
    >
      <Icon
        icon="mdi:delete"
        class="text-lg"
      />
    </button>
  </div>
  <dialog
    ref="modalRef"
    class="animate__animated animate__faster animate__fadeInDown bg-base-100 text-base-content rounded p-0 w-full max-w-sm"
  >
    <div class="flex items-center bg-primary text-white px-2 py-3 rounded-t">
      <h3 class="text-xl">
        {{ t('components.donations.dialogTitle') }}
      </h3>
      <button
        type="button"
        class="btn btn-sm btn-circle btn-ghost ml-auto"
        @click="toggleOpen"
      >
        <Icon
          class="text-2xl"
          icon="material-symbols:close-rounded"
        />
      </button>
    </div>
    <div class="card w-full">
      <form @submit.prevent="onSubmit">
        <div class="card-body p-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text-alt">Password</span>
            </label>
            <div class="join">
              <input
                ref="inputRef"
                v-model="password"
                :type="isVisiblePassword ? 'text' : 'password'"
                class="input input-bordered join-item grow"
                :class="{
                  'input-error': !!errors.password
                }"
              >
              <button
                type="button"
                class="btn join-item"
                @click="isVisiblePassword = !isVisiblePassword"
              >
                <Icon
                  v-if="isVisiblePassword"
                  icon="material-symbols:visibility-off"
                  class="text-xl"
                />
                <Icon
                  v-else
                  icon="material-symbols:visibility"
                  class="text-xl"
                />
              </button>
            </div>
            <label
              v-if="!!errors.password"
              class="label"
            >
              <span class="label-text-alt text-error">{{ errors.password }}</span>
            </label>
          </div>
        </div>
        <hr>
        <div class="card-actions justify-end px-4 py-2">
          <button
            type="submit"
            class="btn btn-primary"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  </dialog>
</template>
