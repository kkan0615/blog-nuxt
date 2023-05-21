import common from './common.json'
import main from './index.json'

export const koMessage = {
  ...main,
  ...common,
}

export default defineI18nLocale(locale => {
  return koMessage
})

// export default koMessage
