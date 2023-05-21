import common from './common.json'
import main from './index.json'

export const enMessage = {
  ...main,
  ...common,
}

export default defineI18nLocale(locale => {
  return enMessage
})

// export default enMessage
