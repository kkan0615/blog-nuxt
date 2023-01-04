import { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ShowcaseFrontMatterImage {
  path: string
  alt: string
  height: number
  width: number
  caption?: string
}

export interface ShowcaseFrontMatter {
  title?: string
  description: string
  lastUpdated: string
  categories: string[]
  tags: string[]
  locale: string
  image?: ShowcaseFrontMatterImage
  github?: string // Github link
  downloads?: {
    title: string
    link: string
  }[] // Download link
  website?: string // If demo website is existed
}

export interface ShowcaseList extends ParsedContent, ShowcaseFrontMatter{
  // id: string
  // excerpt: string
  slug: string
  readingTime: {
    minutes: number
    text: string
    time: number
    words: number
  }
}

export interface ShowcaseListFilter {
  search?: string
  tags?: string[]
  categories?: string[]
  locales?: string[]
}

export interface ShowcaseDetail {
  frontmatter: ShowcaseFrontMatter,
  //
  readingTime: {
    minutes: number
    text: string
    time: number
    words: number
  },
  lastUpdated: string
}
