export interface PostFrontMatterImage {
  path: string
  alt: string
  height: number
  width: number
  caption?: string
}

export interface PostFrontMatter {
  title: string
  description: string
  date: string
  locale: string
  categories: string[]
  tags: string[]
  image: PostFrontMatterImage
}
