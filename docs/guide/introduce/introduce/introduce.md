---
title: BiliuP 介绍
---

<script setup>
import { VPImage } from 'vitepress/theme'
</script>

<div style="text-align: center; margin-bottom: 2em;">
  <VPImage src="/images/home.png" alt="BiliuP Logo" width="200" />
</div>

# 欢迎使用 BiliuP

**BiliuP** 是一个活跃在 [GitHub](https://github.com/biliup) 的开源团队，专注于开发与 Bilibili 平台相关的强大工具。

---

## 我们的项目

探索 BiliuP 团队开发的工具：

::: details biliup-rs (核心上传引擎)
<span style="font-size: 1.1em; font-weight: bold; color: var(--vp-c-brand);">biliup-rs</span>

一个使用 **Rust** 构建的高性能命令行视频上传工具。设计上兼顾效率与灵活性：

*   **跨语言集成：** 可作为库 (`lib`) 被其他语言调用（例如，通过 PyO3 提供给 Python，通过 napi-rs 提供给 Node.js）。
*   **性能卓越：** 利用异步 I/O 和多线程技术，提供优越的上传速度。
*   **核心基础：** 作为其他 BiliuP 应用的底层引擎。

[➡️ 在 GitHub 上访问 biliup-rs](https://github.com/biliup/biliup-rs)
:::

::: details biliup-app (桌面客户端)
<span style="font-size: 1.1em; font-weight: bold; color: var(--vp-c-brand);">biliup-app</span>

一款功能丰富的 Bilibili 投稿客户端，兼容 **Windows、Linux 和 macOS**。

*   **多 P 上传：** 支持批量上传视频分 P，可切换上传线路和控制并发数。
*   **高级编辑：** 支持稿件编辑追加多 P，可修改网页端限制的“是否转载”、“投稿分区”等选项。
*   **大文件支持：** 即便是低电磁力等级用户，也可上传最大 32G 的视频文件（大于 16G）。
*   **多种登录：** 支持账号密码、短信验证、扫码登录及浏览器 Cookie 登录。
*   **多账号管理：** 方便地在多个 Bilibili 账号间快速切换。

[➡️ 在 GitHub 上访问 biliup-app](https://github.com/biliup/biliup-app)
:::

::: details biliup (自动化录播与上传工具)
<span style="font-size: 1.1em; font-weight: bold; color: var(--vp-c-brand);">biliup</span>

一款强大的自动化工具，用于录制直播并上传。

*   **多平台录制：** 支持录制来自多个主流直播平台的内容。
*   **灵活存储：** 可选择将录制内容直接上传至 Bilibili 或保存到本地。
*   **智能上传：** 自动选择最优 Bilibili 上传线路；支持手动调整并发数。
*   **线路配置：** 允许手动配置直播源下载线路，以减少断流风险。
*   **多账号上传：** 支持使用多个 Bilibili 账号同时进行上传操作。
*   **元数据定制：** 上传时可自定义视频的标题、标签、简介等信息。

[➡️ 在 GitHub 上访问 biliup](https://github.com/biliup/biliup)
:::

---

## 了解更多与快速开始

<div class="vp-grid-3">

<div class="grid-item">
  <a href="./supportedLivePlatforms.html" class="vp-card vp-doclink">
    <article>
      <h3 class="title">📘 支持的平台</h3>
      <p class="excerpt">查看 biliup 兼容的直播平台列表。</p>
    </article>
  </a>
</div>

<div class="grid-item">
  <a href="./demo.html" class="vp-card vp-doclink">
    <article>
      <h3 class="title">❓ Q&A 常见问题</h3>
      <p class="excerpt">查找有关 BiliuP 工具的常见问题解答。</p>
    </article>
  </a>
</div>

<div class="grid-item">
  <a href="https://biliup.me" class="vp-card vp-doclink" target="_blank" rel="noopener noreferrer">
    <article>
      <h3 class="title">💬 社区与支持</h3>
      <p class="excerpt">加入我们的社区论坛进行讨论和获取支持。</p>
    </article>
  </a>
</div>

</div>

---

## 安装

> [!WARNING]
> **环境安全：** 请勿在配置有重要开发环境或生产环境的服务器上直接运行 BiliuP。建议使用隔离环境，如 Docker、虚拟机或专用机器。

> [!IMPORTANT]
> **学习曲线：** BiliuP 提供广泛的功能，这也意味着存在一定的学习曲线。我们已尽力通过详尽的文档和代码注释来降低使用门槛。

> [!TIP]
> **上传速度：** 上传至哔哩哔哩的速度主要取决于您的上行带宽。对于中国大陆用户，使用境外服务器（请遵守相关法律法规）通常能获得更佳的上传速度体验。

### 安装指南

请根据您的操作系统或容器化方式选择：

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 1em;">
  <VPButton theme="alt" href="./Linux.html" text="🐧 Linux 指南" />
  <VPButton theme="alt" href="./windows.html" text="🪟 Windows 指南" />
  <VPButton theme="alt" href="./docker.html" text="🐳 Docker 指南" />
</div>

---

## 下一步

安装完成后，准备好运行 BiliuP 了吗？

<VPButton theme="brand" href="../quickstart/get-start.html" text="🚀 尝试首次运行" />

---

## 反馈与贡献

*   我们欢迎**友好且有建设性**的反馈。请尊重开发者的付出，避免将我们视为全天候客服。
*   最有效的反馈方式是在 [GitHub](https://github.com/biliup) 上提交 **Issues**。
*   我们也提供了 `QQ 群 / Telegram 群` 作为即时交流渠道。但在提问前，强烈建议您阅读 [《提问的智慧》](/guide/help.html)，这将有助于您更快地获得有效帮助。

<div style="text-align: center; margin-top: 2em;">
  <VPImage src="/images/help.png" alt="有效沟通指南示意图" style="max-width: 500px; width: 80%; border-radius: 8px;" />
</div>

<!-- 如需自定义 CSS，请添加到 .vitepress/theme/custom.css 文件 -->
<!-- 示例 CSS: .vitepress/theme/custom.css
.vp-grid-3 {
  display: grid;
  gap: 16px;
  margin-top: 1em;
  margin-bottom: 1em;
}

@media (min-width: 640px) {
  .vp-grid-3 { grid-template-columns: repeat(3, 1fr); }
}

.vp-card.vp-doclink {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
  padding: 16px;
  text-decoration: none;
  color: var(--vp-c-text-1);
}

.vp-card.vp-doclink:hover {
  border-color: var(--vp-c-brand);
}

.vp-card.vp-doclink .title {
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 0.5em;
  color: var(--vp-c-brand);
}

.vp-card.vp-doclink .excerpt {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
-->
