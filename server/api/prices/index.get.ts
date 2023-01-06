import { defineEventHandler, getQuery } from 'h3'
import fsp from 'fs/promises'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const locale = query.locale || 'en'

  // Get json file by locale
  let files = await fsp.readFile(`./data/prices/${locale}.json`)
  // If no data, bring "en"
  if (!files && locale !== 'en') {
    files = await fsp.readFile('./data/prices/en.json')
  }
  return files
})
