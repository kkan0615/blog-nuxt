<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { PriceCard, PriceCardExtraPrices } from '~/types/PriceCard'

interface Props {
  readonly data: PriceCard
}

const props = defineProps<Props>()
const { t } = useI18n()

const pricesWithCurrency = computed(() => {
  const formatter = new Intl.NumberFormat(props.data.startPrice.locales, {
    style: 'currency',
    currency: props.data.startPrice.currency,
  })

  return formatter.format(props.data.startPrice.price)
})

const getExtraPriceWithCurrency = ({ price, currency, locales }: PriceCardExtraPrices) => {
  const formatter = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
  })

  return formatter.format(price)
}

</script>
<template>
  <div class="card bg-base-200">
    <div class="card-body">
      <h1 class="card-title">
        {{ data.name }}
      </h1>
      <p class="opacity-80">
        {{ data.description }}
      </p>
      <div class="mt-2">
        <div class="capitalize">
          start
        </div>
        <span class="text-3xl font-bold text-primary">
          {{ pricesWithCurrency }}
        </span>
      </div>
      <ul>
        <li
          v-for="extraPrice in data.extraPrices"
          :key="extraPrice.content"
        >
          <span
            v-if="extraPrice.optional"
            class="text-secondary mr-2"
          >
            ({{ t('commons.labels.option') }})
          </span>
          <span>
            {{ extraPrice.content }}
          </span>
          <span class="ml-2">
            {{ getExtraPriceWithCurrency(extraPrice) }}
          </span>
          <span
            v-if="extraPrice.period"
            class="text-sm"
          >
            / {{ t(`labels.periods.${extraPrice.period}`) }}
          </span>
        </li>
      </ul>
      <ul
        class="mt-4"
      >
        <li
          v-for="detail in data.details"
          :key="detail"
          class="flex items-center"
        >
          <Icon icon="ph:circle-wavy-check" />
          <span class="ml-2">
            {{ detail }}
          </span>
        </li>
      </ul>
      <div class="flex gap-2 mt-2">
        <a
          v-for="link in data.links"
          :key="link.link"
          rel="noopener noreferrer"
          target="_blank"
          class="btn btn-sm btn-accent"
          :href="link.link"
        >
          {{ link.title }}
        </a>
      </div>
    </div>
  </div>
</template>
