module.exports = {
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  title: "Liu的个人主页",
  serviceWorker: true,
  // description: "专注 js 技术栈分享",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      {
        text: "前端",
        link: "/web/",
        items: [
          { text: "html", link: "/web/html/" },
          { text: "css", link: "/web/css/" },
        ],
      },
      { text: "node", link: "/node/" },
      { text: "数据库", link: "/database/" },
      { text: "android", link: "/android/" },
      { text: "面试问题", link: "/interview/" },
    ],
    sidebar: 'auto'
  },
  plugins:[
    ["@vuepress/back-to-top"], // 返回顶部
    ["@vuepress/nprogress"],   // 加载进度条
    // {
    //   name:"page-plugin",
    //   globalUIComponents:["fixed"], 
    // },
    '@vuepress/pwa', 
    {
      serviceWorker: true,
      updatePopup: true
    }
  ],
  markdown: {
    lineNumbers: true
  }
}
