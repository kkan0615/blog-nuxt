<script lang="ts" setup>
interface Props {
  text: string
}

defineProps<Props>()

</script>
<template>
  <div>
    {{ text }}
  </div>
</template>
