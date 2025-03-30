# 🐳 Docker 安装与运行指南

本指南将引导您使用 Docker 快速部署和运行 BiliuP。

> [!IMPORTANT]
> **前提条件**
> *   **Docker 环境**: 确保您的系统已成功安装 Docker。如果尚未安装，请参照 [Docker 官方安装文档](https://docs.docker.com/get-started/get-docker/)。
> *   **端口开放**: BiliuP 默认使用端口 `19159`。请确保在您的服务器防火墙、云服务商安全组、或宝塔/1Panel 等管理面板中开放此 TCP 端口。
> *   **WebUI 凭证**: 如果您在启动时设置了密码（通过 `--password` 参数），WebUI 的默认用户名是 `biliup`。
> *   **端口独占**: 每个 BiliuP Docker 容器都需要映射一个独立的主机端口。不允许将多个容器映射到同一个主机端口。

-------

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
