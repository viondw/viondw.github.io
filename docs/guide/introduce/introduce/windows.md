
> [!IMPORTANT]
> *   理论上是支持`macOS`系统的，但我~~没用过~~，所以等有缘人来补文档吧。
> *   最好用`Windows server`系列来跑，来点~~微软笑话~~：8G内存够用了 一开机就被自家软件吃一半。


---

您可以选择以下两种方式在 Windows 上使用 `biliup`：   

## 方法一：使用 pip 安装 (与 Linux 类似)

此方法需要您先安装 Python 和 pip。安装步骤与 Linux 基本相同，请参考 **[Linux 安装指南](./Linux.html)** 完成 `pip3 install biliup` 操作。

---

## 方法二：直接运行 .exe 文件 (推荐，无需环境)   

`biliup` 提供了预编译的 `.exe` 文件，无需安装 Python 环境即可直接运行，方便快捷。

**下载与运行:**   

1.  访问 `biliup` 项目的 Releases 页面：[点此快速跳转](https://github.com/biliup/biliup/releases)
2.  在最新版本的 "Assets" 部分，下载 `biliup_xxx.exe` 文件（xxx 代表版本号）。
3.  将下载的 `.exe` 文件放置在一个**独立的文件夹**内（例如 `D:\biliup\`）。
4.  **双击运行** 该 `.exe` 文件即可启动。

> [!IMPORTANT]
> *   `.exe` 文件所在的目录 **即为** 录播文件、配置文件等的默认存储目录。建议为其创建一个专用文件夹。
> *   在`windows11`运行`.exe`后系统可能会弹出防火墙窗口，请点击`允许`放行。

---

### `.exe` 进阶配置

#### 代理配置 (录制国外平台)

如果您需要录制国外平台（如 YouTube），由于 Windows 终端默认不走系统代理，您可能需要进行额外配置：

*   **推荐方式：** 在您的代理软件中开启 **TUN 模式** 或 **全局 VPN 模式**，使所有应用（包括 `biliup.exe`）的网络请求通过代理。
*   **备选方式：** 单独为命令行终端配置代理环境。可参考此教程：[Windows如何设置终端代理？](https://blog.csdn.net/zhu6201976/article/details/132763545)

#### 使用参数启动

即使是 `.exe` 文件，也支持通过命令行传递参数来启动，以实现特定配置。

*   **操作步骤：**
 * 1.  打开命令提示符 (CMD) 或 PowerShell。
 * 2.  使用 `cd` 命令切换到 `.exe` 文件所在的目录。
 * 3.  或者，直接使用 `.exe` 文件的 **绝对路径** 来运行。

*   **示例：** 启动 `biliup` 并设置 Web UI 的访问密码。
    ```bash
    # 示例1：先 cd 到目录
    cd D:\biliup\
    .\biliup_v0.4.84.exe --password password123

    # 示例2：使用绝对路径
    D:\biliup\biliup_v0.4.84.exe --password password123
    ```

*   **说明：**
    *   上述命令将启动 `biliup`，并将 Web UI 的登录密码设置为 `password123`，用户名为默认的 `biliup`。
    *   请将命令中的路径和文件名替换为您实际的路径和下载的文件名。

---




