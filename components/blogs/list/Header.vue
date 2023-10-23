<script lang="ts" setup>
defineOptions({
  name: 'BlogListHeader'
})

</script>
<template>
  <div class="w-full bg-primary text-primary-content flex items-center lg:h-44 h-32">
    <div class="px-4">
      <div class="lg:text-4xl text-2xl font-bold mb-2">
        Blogs
      </div>
      <div class="text-lg">
        Look around all posts
      </div>
    </div>
    <div class="mx-auto" />
    <div class="h-full pt-4">
      <nuxt-img
        src="/assets/blog-header.png"
        alt="header"
        class="h-full w-auto"
        :height="814"
        :width="577"
        preload
      />
    </div>
  </div>
</template>
