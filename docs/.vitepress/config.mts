import mdItCustomAttrs from "markdown-it-custom-attrs";
import { defineConfig } from "vitepress";
import { set_sidebar } from "../guide/set_sidebar.mjs";

export default defineConfig({
  base: "/",
  title: "BiliuP文档站",
  lang: "zh-CN",
  description: "高性能客户端丨命令行丨WebUi交互",
  head: [
    ["meta", { name: "author", content: "BiliuP开发团队" }],
    ["meta", { name: "keywords", content: "BiliuP" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }]
  ],
  markdown: { config: (md) => md.use(mdItCustomAttrs, "image", { "data-fancybox": "gallery" }) },
  lastUpdated: true,
  themeConfig: {
    logo: "/icon.png",
    search: { provider: "local" },
    outline: { level: [2, 4], label: '当前页大纲' },
    // 已删除编辑链接配置
    editLink: false, // [!code --]
    socialLinks: [{ icon: "github", link: "https://github.com/viondw/viondw.github.io" }],
    footer: {
      message: "MIT License.",
      copyright: "Copyright © BiliuP开发团队"
    },
    nav: [
      { text: "指引", link: "/guide/introduce/introduce/introduce", activeMatch: "/guide/introduce/" },
      { text: "文档", link: "/guide/docs/doc", activeMatch: "/guide/docs/" },
      {
        text: "相关链接",
        items: [
          { text: "Github 仓库", link: "https://github.com/biliup/biliup" },
          { text: "Gitee 仓库", link: "https://github.com/biliup/biliup" }
        ]
      },
      // 已删除赞助导航项 // [!code --]
      // { text: "🍵 赞助", link: "/sponsor/index" }, // [!code --]
    ],
    sidebar: {
      "/guide/introduce/": set_sidebar('/guide/introduce', false),
      "/guide/introduce/live/": set_sidebar('/guide/introduce/live', false),
      "/guide/docs/": set_sidebar('/guide/docs', false),
      "/guide/introduce/Config/": set_sidebar('/guide/introduce/Config', false),
    }
  },
  vite: { plugins: [] }
});
