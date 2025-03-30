# BiliUP 安装与使用指南 (Linux 平台)

## 🛠 系统要求与兼容性
### ✅ 已验证系统
- Debian 10/11/12
- Ubuntu 20.04/22.04

### ⚠️ 注意事项
> ​**不兼容系统警告**  
> CentOS 等未经测试的系统可能产生未知错误，建议使用已验证系统

---

## 📥 基础安装流程   


### 1. 更新软件源
```bash
sudo apt update
```
- 2.安装 必要组件
```
sudo apt install python3-pip -y
```
- 3.验证安装
```
pip3 --version
```
## 📦pip安装
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
## ⚡一键脚本安装
- 该脚本由[biliup社区](https://biliup.me)提供。
- 确保已安装wget,curl`sudo apt install wget curl -y`

```
wget -O install.sh https://image.biliup.me/install.sh && chmod +x install.sh && bash install.sh
```
