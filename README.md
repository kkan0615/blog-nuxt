# Nuxt 3 + Tailwind CSS Blog
Personal blog made by [Nuxt 3](https://nuxt.com/)
Click [Link](https://requiem-blog.netlify.app/) to see the page

# Setup
Make sure to install the dependencies:
```bash
yarn install
````
## Development Server
```bash
yarn dev
```
## Production
Build the application for production:
```bash
yarn build
```
Locally preview production build:
```bash
yarn preview
```

# .env
```text
NUXT_PUBLIC_MODE
NUXT_PUBLIC_GOOGLE_ANALYTICS_ID
NUXT_PUBLIC_BASE_URL
```

# Packages
- [tailwindcss](https://tailwindcss.com/)= Tailwind css
- [daisyui](https://daisyui.com/) - Tailwind based UI Framework
- [theme-change](https://github.com/saadeghi/theme-change) - Change theme with daisyui
- [pinia](https://nuxt.com/modules/pinia) - Client side State management
- [@nuxtjs/i18n]() - Nuxt i18n
- [@vueuse/nuxt]() - vueuse nuxt version
- [dayjs]() 
- [fast-glob]() - Find all files under specific directory
- ~~[vue-gtag]()~~
- [vue-gtag-next]()
## Content part
- [highlight.js]() - Add highlight for code section
- [rehype-highlight]() - Add highlight for code section (not working)
- [remark-reading-time]() - Add reading time

# :file_folder: Folder structure
```text
├─ assets/                      # Assets (Videos, fonts ...)
├─ components/                  # Components
├─ content/                     # Content ( .md, .mdx ...)
├─ layouts/                     # Layouts
├─ locales/                     # i18n locales files
├─ node_modules/                # node modules
├─ pages/                       # Pages
├─ plugins/                     # Vue Plugins (Server, Client), Automatically adjust
├─ public/                      # Assets (images ...)
├─ server/                      # Server files
│  ├─ api/                      # API, File name will be path
│  ├─ routes/                   # Generate sitemaps
├─ .eslintrc.js                 # Eslint.
├─ .gitignore                   # gitignore.
├─ app.vue                      # App vue file
├─ app.config.ts                # App config
├─ nuxt.config.ts               # Nuxt 3 config
├─ package.json                 # Pacakge json
├─ README.md                    # README.md
├─ tailwind.config.js           # Tailwind CSS Config.
├─ tsconfig.json                # Typescript config
```

# Contributors
Thank you for helping me to make better blog

# Sites
- [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)
- [deployment documentation](https://nuxt.com/docs/getting-started/deployment)

# TODO
- Google 애널리틱스 계속 테스트 해보기
- Theme changer
- Home
  - Content 추가하기
- Order page
- Advertisement 추가
  - EN - fiverr
  - Ko - 크몽
- Move to Next 13 After Next 13 is stable
## Known Issues

# ref
- [harlan-zw/harlanzw.com](https://github.com/harlan-zw/harlanzw.com)
