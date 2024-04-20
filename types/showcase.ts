import dayjs from '@/utils/libs/dayjs'
// export interface ShowcaseParsedContent extends ParsedContent {
//   date: string
//   description: string
//   categories: string[]
//   tags: string[]
//   links?: {
//     showcase?: string
//     download?: string
//     github?: string
//   }
//   readingTime: {
//     minutes: number
//     text: string
//     time: number
//     words: number
//   }
// }

export type Showcase = {
  id: number
  title: string
  description?: string
  lastUpdatedAt: string
  image: {
    path: string
  }
  links?: {
    website?: string
    download?: string
    github?: string
  }
}

export const Showcases = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description',
    lastUpdatedAt: dayjs().format('lll'),
    image: {
      path: '',
    },
    links: {
      website: 'http://localhost:3005/showcases',
    }
  }
]
