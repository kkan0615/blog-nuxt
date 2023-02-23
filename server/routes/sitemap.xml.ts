import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import { LocaleCodeList } from '~/types/locale'

const paths = [
  '/',
  '/blogs',
  '/showcases',
  '/contact',
  '/contact/requests'
]

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  // Fetch all documents
  const sitemap = new SitemapStream({
    hostname: runtimeConfig.NUXT_PUBLIC_BASE_URL
  })
  LocaleCodeList.map(localeCodeEl => {
    paths.map(pathEl => {
      sitemap.write({
        url: `${localeCodeEl}${pathEl}`
      })
    })
  })
  // Add documents about blog and showcase
  const docs = await serverQueryContent(event).find()
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    })
  }

  sitemap.end()
  return streamToPromise(sitemap)
})
