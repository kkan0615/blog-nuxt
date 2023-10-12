<script setup lang="ts">
import { CommentSelect } from '~/types/models/comments'
import dayjs from 'dayjs'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  postId: string
  comment: CommentSelect
}>()

const isEdit = ref(false)

const updatedAtFromNow = computed(() => {
  const now = dayjs()
  const targetDate = dayjs(props.comment.createdAt)
  if (now.diff(targetDate, 'days') < 7) {
    return targetDate.fromNow()
  }
  return targetDate.format('lll')
})

const handleEdit = () => {
  isEdit.value = true
}

const handleEditSuccess = () => {
  isEdit.value = false
}

const handleEditCancel = () => {
  isEdit.value = false
}

const handleDelete = () => {
  const password = prompt('Type password')
  console.log('password', password)
}
</script>
<template>
  <div class="border rounded p-3">
    <client-only v-if="isEdit">
      <blogs-detail-comment-form
        :post-id="postId"
        :comment="comment"
        @success="handleEditSuccess"
        @cancel="handleEditCancel"
      />
    </client-only>
    <div v-else>
      <div class="flex">
        <div class="text-lg">
          {{ comment.nickname }}
        </div>
        <div class="mx-auto" />
        <div>
          <div
            class="tooltip"
            data-tip="edit"
          >
            <button
              class="btn btn-sm px-2 btn-ghost"
              @click="handleEdit"
            >
              <Icon
                icon="mdi:pencil"
                class="text-lg"
              />
            </button>
          </div>
          <div
            class="tooltip"
            data-tip="delete"
          >
            <button
              class="btn btn-sm btn-ghost px-2 text-error"
              @click="handleDelete"
            >
              <Icon
                icon="mdi:delete"
                class="text-lg"
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        {{ comment.content }}
      </div>
      <div>
        <div class="text-sm">
          {{ updatedAtFromNow }}
        </div>
      </div>
    </div>
  </div>
</template>
