import common from './en/common.json'
import main from './en/index.json'

export const enMessage = {
  ...main,
  ...common,
}

export default defineI18nLocale(locale => {
  return {
    ...main,
    ...common,
  }
})

// export default enMessage
