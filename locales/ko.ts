// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineI18nLocale((locale) => {
  return {
    seo: {
      homes: {
        title: '홈',
        menuName: '홈',
        description: '',
      },
      blogs: {
        title: '블로그',
        menuName: '블로그',
        description: '',
      },
      aboutMe: {
        title: 'About me',
        menuName: 'About me',
        description: '',
      }
    },
    me: {
      name: '곽영진',
      position: '풀스택 개발자',
      description: `
        Hello, my name is Youngjin Kwak.
        I am a professional Full Stack Developer with 4 years of experience in designing and implementing software solutions. My technical expertise spans both front-end and back-end development,
        where I have successfully utilized a range of programming languages and frameworks.
        Throughout my career, I have been involved in the complete software development life cycle, from conceptualization and system architecture to coding, testing, and deployment.
      `
    },
    labels: {
      more: '더보기',
    },
    welcome: '안녕하세요',
    categories: '카테고리',
  }
})
