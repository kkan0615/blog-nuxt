<script setup lang="ts">
interface Props {
  max: number
  activeNumber: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'click', pageNum: number): void
}>()

const pageNums = computed(() => {
  let result: number[] = []
  let minLoop = props.activeNumber - 2
  let maxLoop = props.activeNumber + 2

  while (minLoop <= 0) {
    ++minLoop
  }
  while (maxLoop > props.max) {
    --maxLoop
  }

  for (let i = minLoop; i <= maxLoop; i++) {
    result.push(i)
  }

  return result
})


</script>
<template>
  <div class="btn-group mt-4">
    <button
      class="btn btn-sm bg-base-300"
      :class="{
        'btn-disabled': activeNumber === 1
      }"
    >
      «
    </button>
    <button
      v-for="pageNum in pageNums"
      :key="pageNum"
      class="btn btn-sm bg-base-300"
      :class="{
        'btn-active': activeNumber === pageNum
      }"
    >
      {{ pageNum }}
    </button>
    <button
      class="btn btn-sm bg-base-300"
      :class="{
        'btn-disabled': activeNumber === max
      }"
    >
      »
    </button>
  </div>
</template>
