import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const storage = useStorage()
  const cookies = parseCookies(event)
  // If there is cookie set to 'en'
  if (!cookies.i18n_redirected) cookies.i18n_redirected = 'en'

  // Get json file by locale
  let filePaths: string[] = await storage.getKeys('assets:public:data:prices')
  // Found filepath by current lang
  let foundFilePath = filePaths.find(filePath => filePath.includes(cookies.i18n_redirected))
  // If no file, return english
  if (!foundFilePath) foundFilePath = 'assets:public:data:prices:en.json'

  const found = await storage.getItem(foundFilePath.replaceAll(':', '/'))

  return found
})
