<!-- introduce.md -->

<div style="text-align: center; margin-bottom: 1.5em;">
  <img src="/home.png" alt="BiliuP Logo" width="250" height="250"/>
</div>

## 什么是 BiliuP?

BiliuP 是一个活跃在 [GitHub](https://github.com/biliup) 的团队，专注于开发与 Bilibili 平台相关的工具。

### 核心项目

我们目前主要维护以下项目：

| 项目名称    | 功能定位                  | 技术特性与兼容性说明                                  |
| :---------- | :------------------------ | :---------------------------------------------------- |
| Biliup-rs   | 高性能 CLI 视频上传工具   | 基于 Rust 构建，提供跨语言 API (Python/Java/C++)，异步 IO |
| Biliup-app  | 跨平台 GUI 投稿客户端     | 支持 Windows/macOS/Linux，可视化任务队列，高级编辑功能   |
| biliup      | 自动化直播录制与上传工具  | 多平台录制，智能上传，多账号管理，元数据定制             |

---

### 项目详情

::: details biliup-rs
基于 Rust 构建的命令行视频上传工具。设计上可作为 `lib` 被其他语言调用，例如通过 PyO3 提供给 Python，或通过 napi-rs 提供给 Node.js。支持异步 IO 与多线程，性能优越。
[➡️ 查看 biliup-rs 项目](https://github.com/biliup/biliup-rs)
:::

::: details biliup-app
功能丰富的 Bilibili 投稿客户端，兼容 Windows、Linux 和 macOS。

*   **多 P 上传**：支持批量上传视频分 P，可切换上传线路和控制并发数。
*   **高级编辑**：支持稿件编辑追加多 P，可修改网页端限制的“是否转载”、“投稿分区”等选项。
*   **大文件支持**：即便是低电磁力等级用户，也可上传最大 32G 的视频文件（大于 16G）。
*   **多种登录**：支持账号密码、短信验证、扫码登录及浏览器 Cookie 登录。
*   **多账号管理**：方便地在多个 Bilibili 账号间快速切换。
[➡️ 查看 biliup-app 项目](https://github.com/biliup/biliup-app)
:::

::: details biliup
强大的自动化工具，用于录制直播并上传。

*   **多平台录制**：支持录制来自主流直播平台的内容。
*   **灵活存储**：可选择上传至 Bilibili 或保存到本地。
*   **智能上传**：自动选择最优 Bilibili 上传线路，支持手动调整并发数。
*   **线路配置**：允许手动配置直播源下载线路，减少断流风险。
*   **多账号支持**：支持使用多个 Bilibili 账号进行上传，可同时操作。
*   **元数据定制**：上传时可自定义视频的标题、标签、简介等信息。
[➡️ 查看 biliup 项目](https://github.com/biliup/biliup)
:::

---

### 了解更多

*   <a href="./supportedLivePlatforms.html" class="custom-link">
      <span class="link-icon">📘</span>
      <span>支持的直播平台</span>
    </a>
*   <a href="./demo.html" class="custom-link">
      <span class="link-icon">❓</span>
      <span>Q&A 常见问题</span>
    </a>
*   <a href="https://biliup.me" class="custom-link">
      <span class="link-icon">💬</span>
      <span>社区与支持</span>
    </a>

---

## 快速开始

> [!WARNING]
> 不建议在已配置好重要开发环境或生产环境的企业服务器上直接运行本项目，请考虑使用隔离环境（如 Docker、虚拟机或专用机器）。

> [!IMPORTANT]
> 本项目具有较高的功能扩展性，相应地也带来了一定的学习曲线。我们已尽力通过详尽的文档和注释来降低使用门槛。

> [!TIP]
> 若需上传至哔哩哔哩，上传速度主要取决于您的上行带宽。对于国内用户，使用境外服务器进行上传通常能获得更好的速度体验（请遵守相关法律法规）。

### 安装指南

请根据您的操作系统选择合适的安装教程：

*   <a href="./Linux.html" class="custom-link">
      <span class="link-icon">🐧</span>
      <span>Linux 安装教程</span>
    </a>
*   <a href="./windows.html" class="custom-link">
      <span class="link-icon">🪟</span>
      <span>Windows 安装教程</span>
    </a>
*   <a href="./docker.html" class="custom-link">
      <span class="link-icon">🐳</span>
      <span>Docker 安装教程</span>
    </a>

---

## 问题反馈

*   我们欢迎`友好且有建设性`的反馈。请尊重开发者的付出，避免将我们视为`全天候客服`。
*   我们主要活跃在 `GitHub`，提交 *Issues* 是最高效的反馈方式。
*   我们也提供了 `QQ群 / Telegram群` 作为即时交流渠道。但在提问前，强烈建议您阅读 [提问的艺术](/guide/help.html)，这将有助于您更快地获得有效帮助。

<div style="text-align: center; margin-top: 1.5em;">
  <img src="/help.png" alt="Diagram illustrating effective communication" width="80%" style="max-width: 500px;"/>
</div>

<!-- Consolidated Styles -->
<style>
.custom-link {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  margin: 4px; /* Added margin for spacing between buttons */
  background: var(--vp-c-brand-soft);
  border-radius: 8px; /* Slightly more rounded corners */
  color: var(--vp-c-brand);
  text-decoration: none; /* Ensure no underline */
  transition: all 0.2s ease-in-out; /* Smoother transition */
  box-shadow: 0 1px 3px rgba(0,0,0,0.1); /* Subtle shadow */
}
.custom-link:hover {
  transform: translateY(-2px);
  background: var(--vp-c-brand-soft-hover);
  color: var(--vp-c-brand-hover); /* Ensure text color changes on hover if theme supports it */
  box-shadow: 0 4px 8px rgba(0,0,0,0.15); /* Enhanced shadow on hover */
}
.link-icon {
  margin-right: 8px;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
}

/* Ensure table text is readable */
table {
  width: 100%;
  margin-bottom: 1em;
}
th, td {
  padding: 0.5em 0.75em;
  text-align: left; /* Align text left for better readability in description columns */
}
th:nth-child(2), td:nth-child(2) {
  text-align: center; /* Keep Functionality centered if desired */
}
th:nth-child(3), td:nth-child(3) {
  text-align: left; /* Align tech specs left */
}

/* Center images within the centered divs */
div[style*="text-align: center"] img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
