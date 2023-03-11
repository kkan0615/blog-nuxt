<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const nodeEnv = process.env.NODE_ENV

</script>
<template>
  <div>
    <h1 class="text-xl">
      Playground page for test
    </h1>
    <div>
      {{ nodeEnv }}
    </div>
    <div>
      {{ runtimeConfig.public.NUXT_PUBLIC_BASE_URL }}
    </div>
  </div>
</template>
