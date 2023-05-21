import { DefaultLocale } from '~/types/locale'
import { enMessage } from '~/locales/en'
import { koMessage } from '~/locales/ko'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: DefaultLocale,
  messages: {
    en: enMessage,
    ko: koMessage,
  },
}))
