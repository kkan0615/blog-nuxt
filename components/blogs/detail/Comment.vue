<script setup lang="ts">
import dayjs from 'dayjs'
import { Icon } from '@iconify/vue'
import { CommentSelect } from '~/types/models/comments'

const props = defineProps<{
  postId: string
  comment: CommentSelect & { children?: CommentSelect[] }
}>()

const emits = defineEmits<{
  (e: 'refresh'): void
}>()

const isEdit = ref(false)
const isReplyOpen = ref(false)

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
  emits('refresh')
}

const handleEditCancel = () => {
  isEdit.value = false
}

const handleDeleteSuccess = () => {
  emits('refresh')
}

const handleReply = () => {
  isReplyOpen.value = !isReplyOpen.value
}

const handleReplaySuccess = () => {
  isReplyOpen.value = false
  emits('refresh')
}

const handleReplyCancel = () => {
  isReplyOpen.value = false
}

const handleRefresh = () => {
  emits('refresh')
}
</script>
<template>
  <client-only v-if="isEdit">
    <blogs-detail-comment-form
      :post-id="postId"
      :comment="comment"
      @success="handleEditSuccess"
      @cancel="handleEditCancel"
    />
  </client-only>
  <div
    v-else
    class="card bg-base-100"
  >
    <div class="card-body p-2">
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
          <blogs-detail-delete-comment-dialog
            :post-id="postId"
            :comment-id="comment.id"
            @success="handleDeleteSuccess"
          />
        </div>
      </div>
      <div>
        {{ comment.content }}
      </div>
      <div class="flex">
        <div class="text-sm">
          {{ updatedAtFromNow }}
        </div>
        <button
          class="ml-2 btn btn-xs btn-ghost"
          @click="handleReply"
        >
          Reply
        </button>
      </div>
      <div class="pl-2">
        <blogs-detail-comment-form
          v-if="isReplyOpen"
          :post-id="postId"
          :parent-id="comment.id"
          @success="handleReplaySuccess"
          @cancel="handleReplyCancel"
        />
        <blogs-detail-comments
          v-if="comment.children && !!comment.children.length"
          :post-id="postId"
          :comments="comment.children"
          @refresh="handleRefresh"
        />
      </div>
    </div>
  </div>
</template>
