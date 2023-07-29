// import { enMessage } from '~/locales/en/en'
// import { koMessage } from '~/locales/ko/ko'

import { DefaultLocale } from '~/types/locale'
import enCommon from '~/locales/en/common.json'
import enMain from '~/locales/en/index.json'
import koCommon from '~/locales/ko/common.json'
import koMain from '~/locales/ko/index.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: DefaultLocale,
  fallbackLocale: DefaultLocale,
  // messages: {
  //   en: enMessage,
  //   ko: koMessage,
  // },
  messages: {
    en: {
      ...enCommon,
      ...enMain,
    },
    ko: {
      ...koCommon,
      ...koMain,
    },
  },
}))
