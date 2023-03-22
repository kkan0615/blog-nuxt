# Nuxt 3 + Tailwind CSS + DaisyUI Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/1fcf26af-7f44-4e56-abe5-94ae4073f109/deploy-status)](https://app.netlify.com/sites/requiem-blog/deploys)

Personal blog made by [Nuxt 3](https://nuxt.com/)
Click [Link](https://requiem-blog.netlify.app/) to see the page

## Setup
### Install dependencies
```bash
yarn install
````

### Development
```bash
yarn dev
```
The website will run on port 3005

### Production
Build the application for production:
```bash
yarn build
```

### Preview build:
```bash
yarn preview
```

## config
### .env
```text
NUXT_PUBLIC_GOOGLE_ANALYTICS_ID="GOOGLE ANALYTICS KEY"
NUXT_PUBLIC_BASE_URL="PUBLIC URL"
NUXT_PUBLIC_CA_PUB="GOOGLE CONSOLE KEY"
NUXT_PUBLIC_AMZN_ASSOC_TARCKING_ID="AMAZON ASSOCIATE TRAKING ID"
```
### app.config.ts
| Name                 | Description         |
|----------------------|---------------------|
| github               | github links        |
| blogCategories       | blog categories     |
| blogTags.programming | Programming tags    |
| showcaseCategories   | Showcase categories |
| showcaseTags         | Showcase tags       |


## Packages
### Nuxt Modules
- [@nuxt/content](https://content.nuxtjs.org/): Content made easy for Vue Developers
- [@pinia/nuxt]() - Pinia module for Nuxt
  - [pinia](https://nuxt.com/modules/pinia) - Client side State management
- [@nuxtjs/i18n]() - vueI18n module for Nuxt 3
- [@vueuse/nuxt]() - vueuse module for Nuxt 3
- [@nuxtjs/tailwindcss](https://tailwindcss.nuxt.dev/) - Tailwind module for Nuxt 3

### Relative with Content
- [highlight.js]() - Add highlight for code section
- [rehype-highlight]() - Add highlight for code section (not working)
- [remark-reading-time]() - Add reading time

### ETC
- [tailwindcss](https://tailwindcss.com/)= Tailwind css
  - [postcss-custom-properties](https://www.npmjs.com/package/postcss-custom-properties) - Fix ```nuxt Cannot start nuxt: Cannot find module 'postcss-custom-properties'``` error
- [daisyui](https://daisyui.com/) - Tailwind based UI Framework
- [theme-change](https://github.com/saadeghi/theme-change) - Change theme with daisyui
- [dayjs](https://day.js.org/): 
- [fast-glob]() - Find all files under specific directory
- ~~[vue-gtag]()~~
- [vue-gtag-next]()
- [animate.css]() - Animation list
- [sitemap](https://github.com/ekalinin/sitemap.js) - Generate sitemap
- ~~[vite-pwa](https://github.com/vite-pwa/nuxt)~~

## :file_folder: Folder structure
See more detail to click the [Link](https://nuxt.com/docs/guide/directory-structure/nuxt)
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
│  ├─ public/                   # Data for server
│  ├─ routes/                   # Generate page from serverside
├─ .eslintrc.js                 # Eslint config.
├─ .gitignore                   # gitignore.
├─ nitro.config.ts              # Nitro build config.
├─ app.vue                      # App vue file
├─ app.config.ts                # App config
├─ nuxt.config.ts               # Nuxt 3 config
├─ package.json                 # Package.json
├─ README.md                    # README.md
├─ tailwind.config.js           # Tailwind CSS config.
├─ tsconfig.json                # Typescript config
```

## Contributors
Thank you for helping me to make better blog.

## Supports
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/youngjinkwak)

## Reference Sites
- [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)
- [deployment documentation](https://nuxt.com/docs/getting-started/deployment)
- [Github - Nuxt](https://github.com/nuxt/nuxt)
