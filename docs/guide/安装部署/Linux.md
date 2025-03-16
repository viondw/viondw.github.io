# Linux


⚠ 请注意，该项目仅在debian10-12,ubuntu20.04-22.04进行测试，Centos等安装会产生意料之外的报错。



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
## pip安装
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
## 一键脚本安装
- 该脚本由[biliup社区](https://biliup.me)提供。
- 确保已安装wget,curl`sudo apt install wget curl -y`

```
wget -O install.sh https://image.biliup.me/install.sh && chmod +x install.sh && bash install.sh
```
