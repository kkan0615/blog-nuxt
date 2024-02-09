<script setup lang="ts">
import { capitalCase } from 'change-case'

const { t } = useI18n()
const OrderBys = computed(() => [
  {
    label: capitalCase(t('labels.orders.new')),
    value: 'new',
  },
  {
    label: capitalCase(t('labels.orders.old')),
    value: 'old',
  },
  {
    label: capitalCase(t('labels.orders.titleAsc')),
    value: 'titleAsc',
  },
  {
    label: capitalCase(t('labels.orders.titleDesc')),
    value: 'titleDesc',
  },
])

// Detect when router query is changed
onBeforeRouteUpdate((to, from) => {
  if (to.query.search !== from.query.search) { search.value = to.query.search as string || '' }
  if (to.query.orderBy !== from.query.orderBy) { orderBy.value = to.query.orderBy || OrderBys.value[0].value }
})

const router = useRouter()
const route = useRoute()
const search = ref(route.query.search as string || '')
const orderBy = ref(route.query.orderBy || OrderBys.value[0].value)

const refreshData = async () => {
  const newQuery: Record<string, string> = {}
  if (search.value) { newQuery.search = search.value }
  if (orderBy.value) { newQuery.orderBy = orderBy.value as string }
  await router.replace({
    path: route.path,
    query: {
      ...route.query,
      ...newQuery,
    },
  })
  await refreshNuxtData('counts')
  await refreshNuxtData('contents')
}
</script>
<template>
  <div class="flex justify-between">
    <UInput
      v-model="search"
      class="max-w-xs"
      color="white"
      variant="outline"
      placeholder="Search..."
      @update:model-value="refreshData"
    />
    <USelect
      v-model="orderBy"
      :options="OrderBys"
      @update:model-value="refreshData"
    />
  </div>
</template>
