<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

</script>
<template>
  <div>
    <h1 class="text-xl">
      Playground page for test
    </h1>
    <div>
      {{ runtimeConfig.NUXT_PUBLIC_MODE }}
    </div>
    <div>
      {{ runtimeConfig.NUXT_PUBLIC_BASE_URL }}
    </div>
  </div>
</template>
