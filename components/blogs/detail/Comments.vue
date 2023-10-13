<script setup lang="ts">
import { CommentSelect } from '~/types/models/comments'

defineProps<{
  postId: string
  comments: CommentSelect[]
}>()

const emits = defineEmits<{
  (e: 'refresh'): void
}>()

const handleRefresh = () => {
  emits('refresh')
}

</script>
<template>
  <div class="mt-4">
    <client-only>
      <blogs-detail-comment-form
        :post-id="postId"
        @success="handleRefresh"
      />
    </client-only>
    <div class="space-y-3">
      <blogs-detail-comment
        v-for="commentEl in comments"
        :key="commentEl.id"
        :post-id="postId"
        :comment="commentEl"
        @refresh="handleRefresh"
      />
    </div>
  </div>
</template>
