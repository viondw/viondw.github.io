### 🚧前提条件🚧
- 在开始之前，请确保您的系统已经安装了 Docker。如果尚未安装，请参考[Docker 官方文档](https://docs.docker.com/get-started/get-docker/)进行安装。
- 安装的默认端口为19159，请在系统防火墙/宝塔面板/1panle等面板开放对应端口，如云服务器要去对应网站开放端口。
- 如添加webui密码，用户名为`biliup`
- 每个容器应对应一个端口，一个端口两个容器是不允许的存在。


## 安装步骤

### 1. 拉取 BiliUP 镜像
- 首先，从 GitHub Container Registry 拉取最新的 BiliUP 镜像：
```
docker pull ghcr.io/biliup/caution:latest
```
### 2. 创建并运行容器
- 使用以下命令创建并运行 BiliUP 容器。请根据您的需求替换以下参数：
- `--name biliup`：容器的名称，您可以自定义。
- `--restart unless-stopped`：设置容器在意外停止时自动重启。
- `-p 0.0.0.0:19159:19159`：将容器的 19159 端口映射到主机的 19159 端口。您可以根据需要更改主机的端口号,例如运行多个程序。
- `-v /path/to/save_folder:/opt`：将主机的`/path/to/save_folder`目录挂载到容器的`/opt`目录，请将`/path/to/save_folder`替换为您希望保存视频的实际路径。
- `--password password123`：设置 WebUI 的访问密码。请将`password123`替换为您自己的密码。
- 以下是一个例子：
```
docker run -d \
  --name biliup \
  --restart unless-stopped \
  -p 0.0.0.0:19159:19159 \
  -v /path/to/save_folder:/opt \
  ghcr.io/biliup/caution:latest \
  --password password123
```
### 3.验证安装/运行
- 运行该命令后请等待容器拉取并启动，运行以下命令验证是否成功启动：
```
docker ps -a
```
- 您应该看到类似以下的输出，表示容器正在运行：
```
CONTAINER ID   IMAGE                          COMMAND                  CREATED        STATUS        PORTS                      NAMES
xxxxxxxxxxxx   ghcr.io/biliup/caution:latest  "/bin/sh -c 'biliup …"   5 seconds ago  Up 4 seconds  0.0.0.0:19159->19159/tcp   biliup
```
### 4. 访问 WebUI
- 在浏览器中访问`http://<your-server-ip>:19159`，密码为`--password`设置的密码。
### 5.管理容器
- 以下是docker容器的基本管理命令，如果你的容器名不是`biliup`请修改为对应的名称。
```
停止容器：
docker stop biliup
重启容器
docker restart biliup
删除容器
docker rm -f biliup
```
