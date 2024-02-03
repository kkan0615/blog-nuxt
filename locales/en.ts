// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineI18nLocale((locale) => {
  return {
    seo: {
      homes: {
        title: 'Home',
        menuName: 'Home',
        description: '',
      },
      blogs: {
        title: 'Blog',
        menuName: 'Blog',
        description: '',
      },
      aboutMe: {
        title: 'About me',
        menuName: 'About me',
        description: '',
      }
    },
    me: {
      name: 'Youngjin Kwak',
      position: 'Full Stack Developer',
      description: `
        Hello, my name is Youngjin Kwak.
        I am a professional Full Stack Developer with 4 years of experience in designing and implementing software solutions. My technical expertise spans both front-end and back-end development,
        where I have successfully utilized a range of programming languages and frameworks.
        Throughout my career, I have been involved in the complete software development life cycle, from conceptualization and system architecture to coding, testing, and deployment.
      `
    },
    labels: {
      more: 'more',
      categories: 'categories',
      tags: 'tags',
      pause: 'pause',
      play: 'play'
    },
    categories: {
      programming: 'Programming'
    },
    tags: {
      html: 'HTML',
      javaScript: 'JavaScript',
      node: 'Node.js',
      vue: 'Vue',
      nuxt: 'Nuxt',
      css: 'CSS',
      typescript: 'Typescript',
      getStarted: 'Get Started',
      next: 'Next.js',
      react: 'React',
      php: 'PHP',
      laravel: 'Laravel',
      algorithm: 'Algorithm',
      tech: 'Technical',
    },
    welcome: 'Welcome',
  }
})
