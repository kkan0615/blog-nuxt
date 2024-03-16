<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('seo.donations.title')
})
</script>
<template>
  <UContainer class="mt-14 py-3">
    <div class="text-xl mb-8">
      <div>
        {{ $t('pages.donations.thanks1') }}
      </div>
      <div>
        {{ $t('pages.donations.thanks2') }}
      </div>
    </div>
    <section>
      <h6 class="text-2xl mb-4 font-semibold">
        Buy me a coffee
      </h6>
      <div class="lg:flex space-x-4">
        <NuxtImg class="w-52 h-52" src="/donations/bmc-qr.png" />
        <a href="https://www.buymeacoffee.com/youngjinkwak" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;"></a>
      </div>
    </section>
  </UContainer>
</template>
