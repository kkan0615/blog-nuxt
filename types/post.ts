import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface CustomParsedContent extends ParsedContent {
  date: string
  description: string
  categories: string[]
  tags: string[]
  readingTime: {
    minutes: number
    text: string
    time: number
    words: number
  }
}

export const DefaultLimit = 18 // (6 * 3)
