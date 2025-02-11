# ffmpeg安装
- 用于使用对应下载器，默认不下载ffmpeg需要额外安装

- apt直接安装的ffmpeg可能缺斤少两，这里我们直接使用编译好的二进制文件，Ffmpeg-Build

1.下载ffmpeg release
```shell
wget https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-n6.1-latest-linux64-gpl-6.1.tar.xz
```
这里我们选择ffmpeg 6.1（防止版本过低或者过高的问题XD）
2. 解压
```shell
tar Jxvf ffmpeg-n6.1-latest-linux64-gpl-6.1.tar.xz
```

3.添加到系统默认指令
```
nano ~/.bashrc
```
到最下面 添加ffmpeg路径后保存
```
export PATH="/root/ffmpeg-n6.1-latest-linux64-gpl-6.1/bin:$PATH"
```
保存文件并运行以下命令使更改生效：
```
source ~/.bashrc
```
使用ffmpeg指令验证是否成功
```
ffmpeg -version
```