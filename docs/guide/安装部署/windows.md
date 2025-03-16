⚠ 请注意，该项目仅在win10+进行测试，win7或winserver等安装会产生意料之外的报错。

### pip安装

- pip安装方式与Linux相同，请根据文档侧边栏的Linux安装页来进行安装。

### exe运行

- biliup默认编译了基于windows可直接运行的exe文件，该方式不需要安装环境即可运行。

- 1.首先，打开biliup项目release页面：[点我快速跳转](https://github.com/biliup/biliup/releases)
- 2.在Assets里下载最新版的biliup.exe文件，放在一个文件夹内双击运行`exe文件在哪，录播文件就下载在哪`

#### 代理配置

- biliup支持国外平台录制，但windows终端默认不走代理，你可能要在代理软件中开启`tun`或`VPN`模式来运行。
- 你也可以单独配置windows终端代理环境，参考[Windows如何设置终端代理？](https://blog.csdn.net/zhu6201976/article/details/132763545)

#### 参数运行

- biliup虽然编译了exe一键运行，但仍支持参数启动，以下是一个使用参数启动的例子
```
D:\软件\biliup\biliup_v0.4.84.exe --password password123
```
- 以上是一个添加网页参数密码的启动过程，设置了一个密码为`password123`的前端密码，用户名为`biliup`.
- 在终端中请以绝对路径来运行并添加参数。




