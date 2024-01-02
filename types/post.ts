import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface CustomParsedContent extends ParsedContent {
  date: string
  description: string
  categories: string[]
  tags: string[]
}
