type Experience = {
  companyName: string
  companyLink: string
  position: string
  location: string
  remote: 'remote' | 'hybrid' | 'on-site'
  date: string
  // contents: string[]
}

export const Experiences: Experience[] = [
  {
    companyName: 'Opticut Technologies Inc.',
    companyLink: 'https://opticut.ca/',
    position: 'Full Stack Developer',
    location: 'Canada',
    remote: 'remote',
    date: 'Mar 2023 - Present',
    // contents: [
    //   'Migrated legacy Davinci360 program to website using Vue.js and reduced 70% of code lines.',
    //   'Resolved more than 10 different modules such as large size File handlers, SMTP, and JWT Authentication with Laravel.',
    //   'Increased user interactions to 60% by supporting fully responsive website on mobile and desktop.',
    //   'Achieved 25% sales growth by adding feature to draw window image on HTML5 Canvas depending on more than 80 user options.',
    // ]
  },
  {
    companyName: 'Artisy',
    companyLink: 'Artisy',
    position: 'Development leader',
    location: 'Canada',
    remote: 'remote',
    date: 'September 2023 - Present',
    // contents: [
    //   'Write 3 type of documents such as Flow charts, Storyboard, Functional specification',
    //   'Lead Next.js Frontend team involved in 4 members with code review',
    //   'Published web, by referring to Figma designed by UI /UX Designer',
    // ]
  },
  {
    companyName: 'Ayon',
    companyLink: 'https://www.ayon.ca/',
    position: 'Mobile Developer',
    location: 'Canada',
    remote: 'remote',
    date: 'Mar 2022 - Dec 2022',
    // contents: [
    //   'Developed Android and IOS mobile app using Flutter to support 30,000 potential customers.',
    //   'Attached CI/CD pipelines with GitHub Actions for automated building and testing, accelerating developing speed by 80%.',
    //   'Mentored 3 team members in development, improving developing performance by 90%.',
    // ]
  },
  {
    companyName: 'UVC',
    companyLink: 'https://uvc.co.kr/',
    position: 'Software DeveloperUVC',
    location: 'South Korea',
    remote: 'hybrid',
    date: 'Jan 2020 – Mar 2022',
    // contents: [
    //   'Developed 3 web-based private applications containing more than 50 pages which has an average of 120 users.',
    //   'Designed Vue.js components based on SOLID principles, enhancing code quality by 80%.',
    //   'Participated in managing 8 microservices including RESTful APIs, MQTT, Socket I.O, Databases and File Storages with Azure and Docker.',
    //   'Collaborated with 2 different development teams to connect MQTT server and embedded devices.',
    // ]
  },
]
