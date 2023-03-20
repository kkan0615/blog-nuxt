# Nuxt 3 + Tailwind CSS + DaisyUI Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/422d41c6-02f0-4ebd-a502-1b1881433080/deploy-status)](https://app.netlify.com/sites/requiem-blog/deploys)

Personal blog made by [Nuxt 3](https://nuxt.com/)
Click [Link](https://requiem-blog.netlify.app/) to see the page

## Setup
### Install dependencies
```bash
yarn install
````

### Nuxt DevTools
```bash
npx nuxi@latest devtools enable
```

### Development Server
```bash
yarn dev
```
The website will be opened with port 3005

### Production
Build the application for production:
```bash
yarn build
```

### Locally preview production build:
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
## Features
- Nuxt pinia store
- Nuxt Content
- Nuxt devtools

### app.config.ts
| Name                 | Description         |
|----------------------|---------------------|
| github               | github links        |
| blogCategories       | blog categories     |
| blogTags.programming | Programming tags    |
| showcaseCategories   | Showcase categories |
| showcaseTags         | Showcase tags       |


## Packages
- [tailwindcss](https://tailwindcss.com/)= Tailwind css
- [daisyui](https://daisyui.com/) - Tailwind based UI Framework
- [theme-change](https://github.com/saadeghi/theme-change) - Change theme with daisyui
- [pinia](https://nuxt.com/modules/pinia) - Client side State management
- [@nuxtjs/i18n]() - vueI18n for Nuxt 3
- [@vueuse/nuxt]() - vueuse for Nuxt 3
- [@nuxtjs/tailwindcss](https://tailwindcss.nuxt.dev/) - Tailwind setting for Nuxt 3
- [nuxt-security](https://nuxt-security.vercel.app/getting-started/quick-start) - Security config for Nuxt 3
- [@pinia/nuxt]() - Pinia for Nuxt 3
- [dayjs]() 
- [fast-glob]() - Find all files under specific directory
- ~~[vue-gtag]()~~
- [vue-gtag-next]()
- [animate.css]() - Animation list
- [postcss-custom-properties](https://www.npmjs.com/package/postcss-custom-properties) - Fix ```nuxt Cannot start nuxt: Cannot find module 'postcss-custom-properties'``` error
- [sitemap](https://github.com/ekalinin/sitemap.js) - Generate sitemap
- [vite-pwa](https://github.com/vite-pwa/nuxt)
- [@nuxt/devtools](https://github.com/nuxt/devtools)

### Relative with Content
- [highlight.js]() - Add highlight for code section
- [rehype-highlight]() - Add highlight for code section (not working)
- [remark-reading-time]() - Add reading time

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
│  ├─ routes/                   # Generate sitemaps
├─ .eslintrc.js                 # Eslint.
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
