# Blog - Nuxt
Move to Next 13 After Next 13 is stable

# Setup
Make sure to install the dependencies:
```bash
# yarn
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
NUXT_PUBLIC_MODE=development
NUXT_PUBLIC_API_BASE="/api"
```

# Packages
- [daisyui](https://daisyui.com/) - Tailwind based UI Framework
- [theme-change](https://github.com/saadeghi/theme-change): Change theme with daisyui
- [Pinia](https://nuxt.com/modules/pinia)

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
  - Blog detail 페이지 active 작동 안하는 버그 수정
- Home
  - Contact redirect
  - Content 추가하기
- Blog Detail
  - 크기 맞추기
  - TOC 추가
  - 이미지 추가
  - 변경 날짜, Reading time 추가
- Showcase List
- Showcases Detail
- Contact page
- Order page
- 도네이션 기능 추가
- Advertisement 추가
  - EN - fiverr
  - Ko - 크몽
## Errors
### Uncaught ReferenceError: defineAppConfig is not defined at defu.mjs:45:2
- Plugin 이랑 같이 쓰면 에러남
