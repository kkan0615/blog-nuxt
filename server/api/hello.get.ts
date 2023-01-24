import { defineEventHandler } from 'h3'
import fg from 'fast-glob'
import dayjs from 'dayjs'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const cookies = parseCookies(event)

  return {
    msg: 'Hello world ' + dayjs().format('YYYY-MM-DD HH:mm:ss'),
    query,
    cookies,
    cwd:  process.cwd(),
    folders: fg.sync('./**/*.??')
  }
})
