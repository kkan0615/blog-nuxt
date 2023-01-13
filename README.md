# Blog - Nuxt
Personal blog made by [Nuxt](https://nuxt.com/)
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
├─ assets/                      #
├─ components/                  #
├─ content/                     #
├─ layouts/                     #
├─ locales/                     #
├─ node_modules/                # node modules
├─ pages/                       #
├─ plugins/                     #
├─ public/                      #
│  ├─ logo/                     #
│  ├─ assets/                   #
├─ server/
│  ├─ api/                      # Assets for renderer.
├─ .eslintrc.js                 # Eslint.
├─ .gitignore                   # gitignore.
├─ app.vue                      # App vue file
├─ nuxt.config.ts               # config for nuxt.
├─ package.json                 #
├─ README.md                    #
├─ tailwind.config.js           # Eslint.
├─ tsconfig.json                # .
```

# Supports

## Sponsors

# Sites
[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)
[deployment documentation](https://nuxt.com/docs/getting-started/deployment)

# TODO
- Google 애널리틱스 계속 테스트 해보기
  - Public 에서 그냥으로 가져오는걸로 변경했는데 되지는 계속 테스트
- Theme changer
- Side bar content 추가하기
- Home
  - Content 추가하기
- Order page
- Advertisement 추가
  - EN - fiverr
  - Ko - 크몽
- Move to Next 13 After Next 13 is stable
## Known Issues
### Uncaught ReferenceError: defineAppConfig is not defined at defu.mjs:45:2
- Plugin 이랑 같이 쓰면 에러남
- .server.ts 로 변경했더니 현재는 괜찮음

# ref
- [harlan-zw/harlanzw.com](https://github.com/harlan-zw/harlanzw.com)
