> [!IMPORTANT]
> * 推荐Python版本`3.11`及更高，因为一些依赖项也许在低版本不适用。
> * 测试系统为`Debian10/11/12`、`Ubuntu20.04/22.04`,CentOS 等未经测试的系统可能产生未知错误，建议使用已验证系统


---

## 📥 基础安装流程   

```bash
更新软件源

sudo apt update

安装 必要组件

sudo apt install python3-pip -y

验证安装

pip3 --version
```
## 📦pip安装
```
# 标准安装
pip3 install biliup

# 国内镜像加速（清华大学源）
pip3 install biliup -i https://pypi.tuna.tsinghua.edu.cn/simple

安装程序运行根据机器配置时间不等，验证是否安装成功：

biliup --version
返回以下内容即安装成功
v0.4.xxx
```

## 🛎️更新与卸载
```bash
# 版本更新
pip3 install -U biliup

# 国内镜像源更新(针对国内拉取官方源速度过慢）
pip3 install -U biliup -i https://pypi.tuna.tsinghua.edu.cn/simple

# 卸载
pip3 uninstall biliup
```
## ⚡一键脚本安装
- 该脚本由[biliup社区](https://biliup.me)提供。
- 确保已安装wget,curl`sudo apt install wget curl -y`

```
wget -O install.sh https://image.biliup.me/install.sh && chmod +x install.sh && bash install.sh
```
