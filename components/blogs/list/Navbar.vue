<script setup lang="ts">
import MultiSelect from '~/components/forms/MultiSelect.vue'
import { LocaleCodeList } from '~/types/locale'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()
const appConfig = useAppConfig()

const emit = defineEmits<{
  (e: 'search',): void
}>()

const search = ref(route.query.search)
const locales = ref<string[]>(((route.query.locales || locale.value) as string).split(',').filter((el) => !!el))
const categories = ref<string[]>(((route.query.categories || '') as string).split(',').filter((el) => !!el))
const tags = ref<string[]>(((route.query.tags || '') as string).split(',').filter((el) => !!el))

const categoryOptions = appConfig.blogCategories.map(category => {
  return {
    label: t(`labels.categories.${category}`),
    value: category,
  }
}).sort((a, b) => a.label.localeCompare(b.label))

const tagOptions = appConfig.blogTags.map(tag => {
  return {
    label: t(`labels.tags.${tag}`),
    value: tag,
  }
}).sort((a, b) => a.label.localeCompare(b.label))

const localeOptions = LocaleCodeList.map(lang => {
  return {
    label: t(`commons.labels.languages.${lang}`),
    value: lang,
  }
})

const handleSubmit = async () => {
  await router.push({
    query: {
      search: search.value || undefined,
      locales: locales.value.length === 0 ? undefined : locales.value.join(','),
      categories: categories.value.length === 0 ? undefined : categories.value.join(','),
      tags: tags.value.length === 0 ? undefined : tags.value.join(','),
    }
  })

  emit('search')
}
</script>

<template>
  <nav
    class="mb-4"
  >
    <form
      @submit.prevent="handleSubmit"
    >
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-2.5 lg:gap-4">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">{{ t('labels.blogFilter.locales') }}</span>
          </label>
          <MultiSelect
            v-model="locales"
            :options="localeOptions"
          />
        </div>
        <div class="hidden lg:flex form-control w-full">
          <label class="label">
            <span class="label-text">{{ t('labels.blogFilter.categories') }}</span>
          </label>
          <MultiSelect
            v-model="categories"
            :options="categoryOptions"
          />
        </div>
        <div class="hidden lg:flex form-control w-full">
          <label class="label">
            <span class="label-text">{{ t('labels.blogFilter.tags') }}</span>
          </label>
          <MultiSelect
            v-model="tags"
            :options="tagOptions"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">{{ t('commons.labels.search') }}</span>
          </label>
          <input
            v-model="search"
            type="text"
            placeholder="search"
            class="input input-bordered input-sm w-full"
          >
        </div>
      </div>
      <div
        class="mt-4"
      >
        <button
          class="btn-sm btn-primary rounded-btn"
          type="submit"
        >
          {{ t('commons.btns.search') }}
        </button>
      </div>
    </form>
  </nav>
</template>
