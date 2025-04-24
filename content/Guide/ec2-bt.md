---
title: 创建EC2与宝塔部署
description: 
_path: /guide/ec2-bt
order: 6
---

本指南介绍在 AWS 上创建 EC2 实例并部署宝塔面板。

## 核心步骤

- 关闭自动分配公有 IP，改用弹性 IP；
- 添加 HTTP 端口安全组规则；
- 使用云用户数据设置 root 密码和开启 SSH 登录；
- 安装宝塔面板脚本：
```bash
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```

如需在其他系统安装，请使用 BT 官网提供的对应脚本。

[宝塔官网](https://www.bt.cn/)

