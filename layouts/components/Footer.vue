<script lang="ts" setup>
const appConfig = useAppConfig()

</script>
<template>
  <footer class="footer md:px-0 px-0 py-4">
    <p class="text-base inline text-wrap">
      Copyright © 2023 - All right reserved...? It's
      <a
        :href="appConfig.github"
        rel="noopener noreferrer"
        target="_blank"
        class="link hover:text-primary transition duration-200 ease-in-out"
      >
        Open source
      </a>
      🤣
    </p>
  </footer>
</template>
