import type { RouteLocationRaw } from 'vue-router'

export type Menu = {
  key: string
  to: RouteLocationRaw
}

export const Menus: Menu[] = [
  {
    key: 'blogs',
    to: '/blogs'
  },
  {
    key: 'aboutMe',
    to: '/about-me'
  },
]