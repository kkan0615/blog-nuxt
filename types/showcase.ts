export interface ShowcaseFrontMatterImage {
  path: string
  alt: string
  height: number
  width: number
  caption?: string
}

export interface ShowcaseFrontMatter {
  slug: string
  title: string
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

