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
    key: 'about-me',
    to: '/about-me'
  },
  // {
  //   key: 'thanks',
  //   to: '/thanks'
  // },
]
