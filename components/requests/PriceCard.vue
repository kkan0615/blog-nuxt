<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface PriceCardData {
  name: string
  description: string
  startPrice: number
  extraPrices: {
    optional: boolean
    content: string
    price: number
  }[],
  details: string[]
  links?: {
    'title': string
    'link': string
  }[]
}

interface Props {
  readonly data: PriceCardData
}

const props = defineProps<Props>()
const { t } = useI18n()

</script>
<template>
  <div
    class="card bg-base-200"
  >
    <div
      class="card-body"
    >
      <h1
        class="card-title"
      >
        {{ data.name }}
      </h1>
      <p
        class="opacity-80"
      >
        {{ data.description }}
      </p>
      <p
        class="mt-4"
      >
        <span
          class="text-3xl font-bold text-primary"
        >
          {{ data.startPrice }}
        </span>
      </p>
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
          <span
            class="ml-2"
          >
            {{ extraPrice.price }}
          </span>
          <span
            class="text-sm"
          >
            /Monthly
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
          <span
            class="ml-2"
          >
            {{ detail }}
          </span>
        </li>
      </ul>
      <div
        class="flex gap-2 mt-2"
      >
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
