import mdItCustomAttrs from "markdown-it-custom-attrs";
import { defineConfig } from "vitepress";
import { set_sidebar } from "../guide/set_sidebar.mjs";

export default defineConfig({
  // 关键修复：显式设置输出目录
  outDir: "../docs/.vitepress/dist",
  
  // 保持原有基础配置
  base: "/",
  title: "BiliuP文档站",
  lang: "zh-CN",
  description: "高性能客户端丨命令行丨WebUi交互",
  
  // 修复后的 head 配置
  head: [
    ["meta", { name: "author", content: "BiliuP开发团队" }],
    ["meta", { name: "keywords", content: "BiliuP," }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { 
      rel: "stylesheet", 
      href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"
    }],
    ["script", {
      src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      defer: true // 添加 defer 优化加载
    }],
  ],

  // 修复 markdown 插件配置
  markdown: {
    config: (md) => {
      md.use(mdItCustomAttrs, "image", { 
        "data-fancybox": "gallery",
        "loading": "lazy" // 添加懒加载优化
      });
    }
  },

  // 增强的主题配置
  themeConfig: {
    // ... 其他保持原样 ...
    
    // 优化侧边栏配置
    sidebar: {
      "/guide/introduce/": set_sidebar('/guide/introduce', false),
      "/guide/docs/": set_sidebar('/guide/docs', true), // 添加默认展开参数
      "/sponsor/": [] // 添加赞助页面的空侧边栏
    },
    
    // 增强导航栏
    nav: [
      { 
        text: "指引", 
        link: "/guide/introduce/introduce/introduce",
        activeMatch: "^/guide/introduce/"
      },
      {
        text: "文档",
        link: "/guide/docs/doc",
        activeMatch: "^/guide/docs/"
      },
      { 
        text: "🍵 赞助", 
        link: "/sponsor/index",
        activeMatch: "^/sponsor/"
      }
    ]
  },

  // 构建优化配置
  vite: {
    plugins: [],
    build: {
      chunkSizeWarningLimit: 2000, // 增大 chunk 大小警告阈值
      rollupOptions: {
        output: {
          manualChunks: {
            // 拆分第三方库
            'fancybox': ['@fancyapps/ui']
          }
        }
      }
    }
  }
});
