import { defineEventHandler } from 'h3'
import dayjs from 'dayjs'

export default defineEventHandler(async (event) => {
  const storage = useStorage()
  const query = getQuery(event)
  const cookies = parseCookies(event)

  return {
    msg: 'Hello world ' + dayjs().format('YYYY-MM-DD HH:mm:ss'),
    query,
    cookies,
    cwd:  process.cwd(),
    keys: await storage.getKeys(),
  }
})
