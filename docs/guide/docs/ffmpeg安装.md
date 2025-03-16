# ffmpeg安装
- **用于使用对应下载器，默认不下载ffmpeg需要额外安装**
---
## 1. 简介

- FFmpeg是什么？
开源的音视频处理工具集，支持转码、流媒体、滤镜等多媒体操作。
- 典型用途
视频格式转换、提取音频、录制屏幕、流媒体处理等。
---
## 2. 安装前准备
- 确保系统已更新至最新状态。
- 管理员权限（Windows的管理员命令提示符、Linux/macOS的sudo）。
---
## 3. 各系统安装方法
### Windows
- 方法一：使用**winget**(推荐)
使用管理员身份运行cmd，然后输入`winget install BtbN.FFmpeg.GPL` 
- 方法二：官方预编译二进制：<br />
①访问 [FFmpeg仓库release页面](https://github.com/BtbN/FFmpeg-Builds/releases)<br /> 
②下载ffmpeg-master-latest-win64-gpl.zip并解压。<br />
③配置环境变量：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将bin文件夹路径（如D:\ffmpeg\bin）添加到系统PATH。
### macOS
- 使用Homebrew（推荐）<br />
① 安装Homebrew（如未安装）：
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;② 安装FFmpeg：
```
brew install ffmpeg
```
### Linux
#### Debian/Ubuntu系
```
sudo apt update && sudo apt install -y ffmpeg 
```
#### RHEL/CentOS/Fedora系
```
sudo dnf install -y ffmpeg
```
#### Arch/Manjaro系
```
sudo pacman -S ffmpeg
```
### 通用方案：使用二进制文件并配置环境变量
1. 下载ffmpeg release
```shell
wget https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-linux64-gpl.tar.xz
```
2. 解压
```shell
tar Jxvf ffmpeg-master-latest-linux64-gpl.tar.xz
```

3. 添加到系统默认指令
```
nano ~/.bashrc
```
到最下面 添加ffmpeg路径后保存
```
export PATH="/root/ffmpeg-master-latest-linux64-gpl/bin:$PATH"
```
保存文件并运行以下命令使更改生效：
```
source ~/.bashrc
```
使用ffmpeg指令验证是否成功
```
ffmpeg -version
```
---
## 4. 验证安装
- 所有系统通用命令：
```
ffmpeg -version
```
输出应显示版本号及编解码器支持列表。


## 6. 常见问题
“Command not found”错误 → 检查环境变量配置。
