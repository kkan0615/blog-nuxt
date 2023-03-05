import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  preset: process.env.PRESET,
  serverAssets: [
    {
      baseName: 'public',
      dir: './public'
    }
  ],
  prerender: {
    routes: [
      '/sitemap.xml'
    ]
  }
})
