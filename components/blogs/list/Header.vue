<script lang="ts" setup>
defineOptions({
  name: 'BlogListHeader'
})

const { t } = useI18n()

</script>
<template>
  <div class="w-full bg-primary text-primary-content flex items-center lg:h-44 h-32 px-4">
    <div>
      <div class="lg:text-4xl text-2xl font-bold mb-2">
        {{ t('views.blogs.header.title') }}
      </div>
      <div class="text-xl">
        {{ t('views.blogs.header.description') }}
      </div>
    </div>
    <div class="mx-auto" />
    <div class="h-full pt-4 pb-1">
      <nuxt-img
        src="/assets/headers/blog-list.png"
        alt="header"
        class="h-full w-auto"
        :height="814"
        :width="577"
        preload
      />
    </div>
  </div>
</template>
