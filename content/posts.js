const posts = [
       {
    title: '测试',
    description: '这是一篇文章',
    image: '/posts/post1.jpg',
    link: '/blog/test',
    categories: ['main'], // specifies where it will be rendered
    date: 'September 28 2026' // optional
  },
    {
    title: '稀奇古怪的中国经济',
    description: '这是一篇文章',
    image: '/posts/post2.jpg',
    link: '/blog/ce',
    categories: ['main'], // specifies where it will be rendered
    date: 'December 28 2025' // optional
  },
    {
    title: '战马',
    description: '这是一篇文章',
    image: '/posts/post1.jpg',
    link: '/blog/fh',
    categories: ['main'], // specifies where it will be rendered
    date: 'June 07 2026' // optional
  },
  {
    title: 'My New Blog',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...',
    image: '/posts/post1.jpg',
    link: '/blog/first_post',
    categories: ['main'], // specifies where it will be rendered
    date: 'March 10 2022' // optional
  },
  {
    title: 'This is written in Markdown',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...',
    image: '/posts/post2.jpg',
    link: '/blog/second_post',
    categories: ['main', 'category'],
    date: 'February 28 2022'
  },
  {
    title: 'Check out the GitHub Repo',
    description: 'This is an external link to GitHub. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...',
    image: '/posts/post3.jpg',
    link: 'https://github.com/wwebdev/nextjs-blog-template',
    date: 'February 09 2022',
    categories: ['main']
  },
  {
    title: 'Simple Layout',
    description: 'This is the layout option "simple". Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...',
    image: '/posts/post3.jpg',
    link: '/blog/second_post',
    date: 'February 09 2022',
    categories: ['category']
  }
]

module.exports = posts
