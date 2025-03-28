<!-- 介绍 -->   


<div style="display: flex; justify-content: center;">
  <img src="/home.png" alt="description" width="300" height="300"/>
</div>

## 什么是BiliuP?

* BiliuP是一个活跃在[github](https://github.com/biliup)的团队   
* 目前团队正在维护的项目：   

| 项目名称        |      功能定位      |  技术特性与兼容性说明 |
| ----------------- | :-------------------: | -----------------------------: |
| Biliup-rs      | 基于Rust构建的CLI视频上传工具 | 提供跨语言API接口（Python/Java/C++），支持异步IO与多线程 |
| Biliup-app      |   跨平台GUI客户端    |   支持Windows/macOS/Linux平台，提供可视化任务队列 |
| biliup |   自动化下载与上传    |  还没想到？   |   

   


::: details biliup-rs
可以作为 lib 被调用，理论上可以通过 PyO3 作为库提供给 Python 和 napi-rs 给 Node.js 等进行调用。
[项目地址](https://github.com/biliup/biliup-rs)
:::   

::: details biliup-app
bilibili投稿客户端，支持Windows，Linux，macOS。

* 支持多p上传，支持线路切换、并发数控制。
* 支持稿件编辑追加多p，可编辑网页端不能编辑的"是否转载"、"投稿分区"等。
* 低电磁力等级也可上传大于16G视频，最大32G。
* 支持多种登录方式，账号密码，短信，扫码，浏览器登录。
* 支持多用户账号快速切换   
[项目地址](https://github.com/biliup/biliup-app)
:::   

::: details biliup
*  多平台支持：录制主流直播平台内容并上传至 B 站/本地存储
*  智能上传：自动选择最优上传线路，支持手动调整并发
*  线路配置：手动配置平台下载线路，避免画面断流
*  多账号管理：支持多账号切换上传，同时上传多账号
*  元数据定制：自定义视频标题、标签、简介等信息   
[项目地址](https://github.com/biliup/biliup)
:::   

   
<a href="./supportedLivePlatforms.html" class="custom-link">
  <span class="link-icon">📘</span> 
  <span>查看 支持的直播平台 </span>
</a>

<style>
.custom-link {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: var(--vp-c-brand-soft);
  border-radius: 6px;
  color: var(--vp-c-brand);
  transition: transform 0.2s;
}
.custom-link:hover {
  transform: translateY(-2px);
  background: var(--vp-c-brand-soft-hover);
}
.link-icon {
  margin-right: 8px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}
</style>   

<a href="./demo.html" class="custom-link">
  <span class="link-icon">📘</span> 
  <span>Q&A 常见问题 </span>
</a>

<style>
.custom-link {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: var(--vp-c-brand-soft);
  border-radius: 6px;
  color: var(--vp-c-brand);
  transition: transform 0.2s;
}
.custom-link:hover {
  transform: translateY(-2px);
  background: var(--vp-c-brand-soft-hover);
}
.link-icon {
  margin-right: 8px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}
</style>   

<a href="https://biliup.me" class="custom-link">
  <span class="link-icon">📘</span> 
  <span>社区支持 </span>
</a>

<style>
.custom-link {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: var(--vp-c-brand-soft);
  border-radius: 6px;
  color: var(--vp-c-brand);
  transition: transform 0.2s;
}
.custom-link:hover {
  transform: translateY(-2px);
  background: var(--vp-c-brand-soft-hover);
}
.link-icon {
  margin-right: 8px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}
</style>
   

## 开始     

> [!WARNING]
> 在已存在开发环境or企业机器上运行该项目，是不推荐的行为。      

> [!IMPORTANT]
> 本项目功能扩展性较高，因此在复杂度上存在一定学习门槛。尽管开发者通过详尽的文档注释来规避这个问题。   


> [!TIP]
> 如需上传至哔哩哔哩，那么上行决定了速度，因此最好使用境外机器进行。   


<a href="./Linux.html" class="custom-link">
  <span class="link-icon">📘</span> 
  <span>查看 Linux 安装教程</span>
</a>

<style>
.custom-link {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: var(--vp-c-brand-soft);
  border-radius: 6px;
  color: var(--vp-c-brand);
  transition: transform 0.2s;
}
.custom-link:hover {
  transform: translateY(-2px);
  background: var(--vp-c-brand-soft-hover);
}
.link-icon {
  margin-right: 8px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}
</style>   

<a href="./windows.html" class="custom-link">
  <span class="link-icon">📘</span> 
  <span>查看 windows 安装教程</span>
</a>

<style>
.custom-link {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: var(--vp-c-brand-soft);
  border-radius: 6px;
  color: var(--vp-c-brand);
  transition: transform 0.2s;
}
.custom-link:hover {
  transform: translateY(-2px);
  background: var(--vp-c-brand-soft-hover);
}
.link-icon {
  margin-right: 8px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}
</style>   


<a href="./docker.html" class="custom-link">
  <span class="link-icon">📘</span> 
  <span>查看 docker 安装教程</span>
</a>

<style>
.custom-link {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: var(--vp-c-brand-soft);
  border-radius: 6px;
  color: var(--vp-c-brand);
  transition: transform 0.2s;
}
.custom-link:hover {
  transform: translateY(-2px);
  background: var(--vp-c-brand-soft-hover);
}
.link-icon {
  margin-right: 8px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}
</style>   

## 反馈

* 我们很乐意接受`友好优质`的反馈内容，但请不要把我们当做`牛马`。
* 我们大部分时间都活跃在`github`上，所以*issues*是最快的反馈渠道。
* 我们提供了`QQ/telegram`可供面对面交流的渠道，**但是**在此之前你可能需要了解[提问的艺术](/guide/help.html)   


<div style="display: flex; justify-content: center;">
  <img src="/help.png" />
</div>


