<script lang="ts" setup>
interface Props {
  text: string
}

defineProps<Props>()

</script>
<template>
  <div class="typewriter">
    <h1 class="text-white text-5xl font-bold">
      {{ text }}
    </h1>
  </div>
</template>
<style lang="scss">
.typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #F25C05; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation:
      typing 2s steps(40, end),
      blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #F25C05; }
}
</style>
