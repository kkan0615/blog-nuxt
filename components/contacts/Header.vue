<script lang="ts" setup>
defineOptions({
  name: 'ContactHeader'
})

const { t } = useI18n()

</script>
<template>
  <div class="w-full bg-primary text-primary-content flex items-center lg:h-44 h-32 px-4">
    <div>
      <div class="lg:text-4xl text-2xl font-bold mb-2">
        {{ t('views.contact.header.title') }}
      </div>
      <div class="text-xl">
        {{ t('views.contact.header.description') }}
      </div>
    </div>
    <div class="mx-auto" />
    <div class="h-full pt-4 pb-1">
      <nuxt-img
        src="/assets/headers/contact.png"
        alt="header"
        class="h-full w-auto"
        :height="814"
        :width="577"
        preload
      />
    </div>
  </div>
</template>
