import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: runtimeConfig.NUXT_PUBLIC_BASE_URL
  })
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    })
  }
  sitemap.end()
  return streamToPromise(sitemap)
})
