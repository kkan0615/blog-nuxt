<script setup lang="ts">
import { CommentSelect } from '~/types/models/comments'

defineProps<{
  postId: string
  comments: CommentSelect[]
}>()

</script>
<template>
  <div class="mt-4">
    <client-only>
      <blogs-detail-comment-form
        :post-id="postId"
      />
    </client-only>
    <div
      v-for="commentEl in comments"
      :key="commentEl.id"
    >
      {{ commentEl }}
    </div>
  </div>
</template>
