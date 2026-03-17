# Linux


⚠ 请注意，该项目仅在debian12-13,ubuntu22.04-24.04进行测试，Centos等安装会产生意料之外的报错。

## 推荐使用UV安装
- 1.首先，确保你的软件包列表是最新的：
```
sudo apt update && apt install curl -y
```
- 2.安装uv
```
curl -LsSf https://astral.sh/uv/install.sh | sh
```
- 3.使用uv安装biliup
```
uv tool install biliup
```
- 4.前台启动
```
biliup server --auth
```
- 5.访问webui
```
http://your-ip:19159
```


-----------------------------------


## 使用pip安装(不推荐)

- 1.首先，确保你的软件包列表是最新的：
```
sudo apt update
```
- 2.安装 python3-pip
```
sudo apt install python3-pip -y
```
- 3.验证安装
```
pip3 --version
```
- 3.安装biliup
```
# 标准安装
pip3 install biliup

# 国内镜像加速（清华大学源）
pip3 install biliup -i https://pypi.tuna.tsinghua.edu.cn/simple
```
- 安装程序运行根据机器配置时间不等，验证是否安装成功：
```
biliup --version

v0.4.84
```
- 返回版本号即为安装成功。

- 更新与卸载
```bash
#更新版本
pip3 install -U biliup

# 国内镜像更新
pip3 install -U biliup -i https://pypi.tuna.tsinghua.edu.cn/simple

# 卸载工具
pip3 uninstall biliup
```
