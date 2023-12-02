<script setup lang="ts">
interface Props {
  max: number
  activeNumber: number
  displayCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  displayCount: 5
})

const emit = defineEmits<{
  (e: 'click', pageNum: number): void
}>()

const enterNum = ref(props.activeNumber)
const inputError = ref('')

const pageNums = computed(() => {
  let result: number[] = []
  let minLoop = props.activeNumber - Math.floor((props.displayCount || 0) / 2)
  let maxLoop = props.activeNumber + Math.floor((props.displayCount || 0) / 2)

  // If it's smaller than 0, set to 1 (page starts 1)
  if (minLoop <= 0) minLoop = 1
  // If it's bigger than maximum page number, set to maximum page number (last)
  if (maxLoop > props.max) maxLoop = props.max

  for (let i = minLoop; i <= maxLoop; i++) {result.push(i)}

  return result
})


const handleClick = (newPageNum: number) => {
  emit('click', newPageNum)
}

const handleGo = () => {
  if (enterNum.value <= 0 || enterNum.value > props.max) {
    inputError.value = 'Invalid number'
    return
  }
  inputError.value = ''
  handleClick(enterNum.value)
}

</script>
<template>
  <div class="md:flex md:items-center mr-4 gap-4 text-center">
    <div class="btn-group">
      <button
        class="btn btn-sm bg-base-100"
        :class="{
          'btn-disabled': activeNumber === 1
        }"
        @click="() => handleClick(1)"
      >
        «
      </button>
      <button
        v-for="pageNum in pageNums"
        :key="pageNum"
        class="btn btn-sm bg-base-100"
        :class="{
          'btn-active': activeNumber === pageNum
        }"
        @click="() => handleClick(pageNum)"
      >
        {{ pageNum }}
      </button>
      <button
        v-if="!pageNums.includes(max)"
        class="btn btn-sm bg-base-100"
        @click="() => handleClick(max)"
      >
        ...{{ max }}
      </button>
      <button
        class="btn btn-sm bg-base-100"
        :class="{
          'btn-disabled': activeNumber === max
        }"
        @click="() => handleClick(max)"
      >
        »
      </button>
    </div>
    <div class="join mt-4 md:mt-0">
      <input
        v-model.number="enterNum"
        class="input input-bordered join-item input-sm"
        :class="{
          'input-error': !!inputError
        }"
        placeholder="Page"
        type="number"
        @focus="($event.target as HTMLInputElement)?.select()"
        @update:model-value="() => inputError = ''"
      >
      <button
        class="btn btn-sm btn-primary join-item"
        @click="handleGo"
      >
        Go
      </button>
    </div>
  </div>
</template>
