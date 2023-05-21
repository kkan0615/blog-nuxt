import common from './ko/common.json'
import main from './ko/index.json'

// export const koMessage = {
//   ...main,
//   ...common,
// }

export default defineI18nLocale(locale => {
  return {
    ...main,
    ...common,
  }
})

// export default koMessage
