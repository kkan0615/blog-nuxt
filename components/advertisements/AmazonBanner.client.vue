<script setup lang="ts">
// https://affiliate-program.amazon.com/home/bannerlinks?ac-ms-src=ac-nav
// https://affiliate-program.amazon.com/home/bannerlinks/detail?category=homegarden
interface Props {
  width?: string
  height?: string
  category?: 'grocery' | 'homegarden'
  linkId?: string
  banner?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '728',
  height: '90',
  category: 'homegarden',
  linkId: '944a72bd20583fea60ef9be33c4290a1',
  // 0YX1CCZ4AVME9GG71E82
  banner: '0VVTXDP4HR01SDK92282'
})
const runtimeConfig = useRuntimeConfig()

const src = computed(() =>
// eslint-disable-next-line max-len
  `//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=${props.category}&banner=${props.banner}&f=ifr&linkID=${props.linkId}&t=${runtimeConfig.public.NUXT_PUBLIC_AMZN_ASSOC_TARCKING_ID}&tracking_id=${runtimeConfig.public.NUXT_PUBLIC_AMZN_ASSOC_TARCKING_ID}`

)
</script>
<template>
  <div class="w-full overflow-x-auto">
    <iframe
      class="md:max-w-full max-w-none"
      loading="lazy"
      :src="src"
      :width="width"
      :height="height"
      scrolling="no"
      border="0"
      marginwidth="0"
      style="border:none;"
      frameborder="0"
      sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    />
  </div>
<!--  <div class="alignleft">-->
<!--    <Script type="text/javascript">-->
<!--      amzn_assoc_ad_type = "banner";-->
<!--      amzn_assoc_marketplace = "amazon";-->
<!--      amzn_assoc_region = "US";-->
<!--      amzn_assoc_placement = "assoc_banner_placement_default";-->
<!--      amzn_assoc_campaigns = "grocery";-->
<!--      amzn_assoc_banner_type = "category";-->
<!--      amzn_assoc_isresponsive = "true";-->
<!--      amzn_assoc_banner_id = "0YX1CCZ4AVME9GG71E82";-->
<!--      amzn_assoc_tracking_id = "requiemblog-20";-->
<!--      amzn_assoc_linkid = "9571f1d23c63d129084d6a3ea6da8358";-->
<!--    </Script>-->
<!--    <Script src="//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1" />-->
<!--  </div>-->
</template>
