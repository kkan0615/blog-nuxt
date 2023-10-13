<script setup lang="ts">
import { CommentInsert, CommentSelect } from '~/types/models/comments'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { useField, useForm } from 'vee-validate'
import { useStorage } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  postId: string
  comment?: CommentSelect
}>()

const emits = defineEmits<{
  (e: 'success'): void
  (e: 'cancel'): void
}>()

const commentName = useStorage('comment-nickName', '')

const validationSchema = toTypedSchema(
  z.object({
    nickName: z.string({
      required_error: 'Name required'
    })
      .max(255, {
        message: 'Maximum for Name is 255'
      })
      .trim().min(1, {
        message: 'Name required'
      }),
    password: z.string({
      required_error: 'Password required'
    })
      .max(255, {
        message: 'Maximum for Password is 255'
      })
      .trim().min(1, {
        message: 'Password required'
      }),
    content: z.string({
      required_error: 'content required'
    })
      .max(255, {
        message: 'Maximum for Content is 255'
      })
      .trim().min(1, {
        message: 'content required'
      }),
    isSecret: z.boolean().default(false)
  })
)

const { handleSubmit, errors, isSubmitting, resetForm } = useForm({
  validationSchema,
})

const { value: nickName } = useField('nickName')
const { value: password } = useField('password')
const { value: content } = useField<string>('content')
const { value: isSecret } = useField('isSecret')

const isVisiblePassword = ref(false)

onMounted(() => {
  console.log(props.comment)
  if (props.comment) {
    nickName.value = props.comment.nickname
    content.value = props.comment.content
    isSecret.value = props.comment.isSecret
  }
})

const onSubmit = handleSubmit(async (values) => {
  console.log(values)

  // Create new post
  if (!props.comment) {
    await $fetch(`/api/posts/${props.postId}/comments`, {
      method: 'POST',
      body: {
        nickname: values.nickName,
        password: values.password,
        content: values.content,
      }
    })
  } else {
    await $fetch(`/api/posts/${props.postId}/comments/${props.comment.id}`, {
      method: 'POST',
      body: {
        nickname: values.nickName,
        password: values.password,
        content: values.content,
      }
    })
  }

  emits('success')
  resetForm()
})

const handleCancel = () => {
  emits('cancel')
}
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div
      v-if="comment"
      class="mb-2 font-bold flex"
    >
      <div>
        Edit
      </div>
      <div class="mx-auto" />
      <div
        class="tooltip"
        data-tip="Cancel"
      >
        <button
          class="btn btn-sm px-2 btn-ghost text-error"
          type="button"
          @click="handleCancel"
        >
          <Icon
            icon="mdi:close"
            class="text-lg"
          />
        </button>
      </div>
    </div>
    <div class="flex gap-x-2 mb-3 w-full">
      <div class="form-control grow">
        <input
          v-model="nickName"
          type="text"
          placeholder="Name"
          class="input input-bordered input-sm"
          :class="{
            'input-error': !!errors.nickName
          }"
        >
        <label
          v-if="!!errors.nickName"
          class="label"
        >
          <span class="label-text-alt text-error">{{ errors.nickName }}</span>
        </label>
      </div>
      <div class="form-control grow">
        <div class="join">
          <input
            v-model="password"
            :type="isVisiblePassword ? 'text' : 'password'"
            class="input input-bordered input-sm join-item grow"
            :class="{
              'input-error': !!errors.password
            }"
          >
          <button
            class="btn btn-sm join-item"
            @click="isVisiblePassword = !isVisiblePassword"
          >
            <Icon
              v-if="isVisiblePassword"
              icon="material-symbols:visibility-off"
              class="text-lg"
            />
            <Icon
              v-else
              icon="material-symbols:visibility"
              class="text-lg"
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
    <div class="form-control">
      <textarea
        v-model="content"
        class="textarea textarea-bordered"
        rows="4"
        :class="{
          'textarea-error': !!errors.content
        }"
        placeholder="Content"
      />
      <label
        v-if="!!errors.content"
        class="label"
      >
        <span class="label-text-alt text-error">{{ errors.content }}</span>
      </label>
    </div>
    <div class="py-2">
      <button
        class="btn btn-sm btn-loading"
        type="submit"
      >
        <span
          v-if="isSubmitting"
          class="loading loading-spinner loading-sm"
        />
        <span v-else>Submit</span>
      </button>
    </div>
  </form>
</template>
