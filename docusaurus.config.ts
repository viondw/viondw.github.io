import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BiliUP',
  tagline: '🚀 跨平台 Bilibili 视频上传/下载工具 | 高性能命令行客户端',
  favicon: 'img/tubiao.png',

  // 生产环境 URL
  url: 'https://viondw.github.io',
  baseUrl: '/',

  // GitHub Pages 部署配置
  organizationName: 'viondw', // 替换为你的 GitHub 用户名或组织名
  projectName: 'viondw.github.io', // 替换为你的仓库名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 国际化配置
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/viondw/viondw.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/viondw/viondw.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'BiliUP',
      logo: {
        alt: 'BiliUP Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        { to: '/blog', label: '更新日志', position: 'left' },
        {
          href: 'https://github.com/biliup/biliup', // 替换为实际仓库地址
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
