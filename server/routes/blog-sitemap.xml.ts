import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  // Fetch all documents
  const sitemap = new SitemapStream({
    hostname: runtimeConfig.NUXT_PUBLIC_SITE_URL,
  })
  // Add documents about blog and showcase
  const docs = await serverQueryContent(event).find()
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'daily'
    }, error => {
      if (error) {
        console.error(error)
        throw new Error(error?.message)
      }
    })
  }

  sitemap.end()
  return streamToPromise(sitemap)
})
