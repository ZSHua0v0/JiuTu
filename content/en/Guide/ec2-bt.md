---
title: Create EC2 and Deploy BT Panel
description:
_path: /en/guide/ec2-bt
order: 6
---

<div>
  <p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; widows: 0; orphans: 0; font-size: 15pt;">
    <span style="font-family: '微软雅黑'; font-weight: bold">Create EC2 and BT Deployment</span>
  </p>
  <p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; widows: 0; orphans: 0; font-size: 15pt;">
    <span style="font-family: '微软雅黑'">1. </span>
    <span style="font-family: '微软雅黑'; font-size: 14pt">Disable auto-assign public IP. Allocate an Elastic IP at the end and bind it for a fixed address.</span>
  </p>
  <p style="font-size: 10.5pt;"><img src="/assets/IMG/guide/ec2-bt1.png" width="553" height="381" alt="Screenshot.png" /></p>
  <p style="font-size: 15pt;"><span style="font-family: '微软雅黑'">2. Security Group Settings</span></p>
  <p style="font-size: 10.5pt;"><img src="/assets/IMG/guide/ec2-bt2.png" width="553" height="312" alt="Screenshot.png" /></p>
  <p style="font-size: 12pt;"><span style="font-family: '微软雅黑'">Add security rule to allow HTTP port</span></p>
  <p style="font-size: 10.5pt;"><img src="/assets/IMG/guide/ec2-bt3.png" width="553" height="257" alt="Screenshot.png" /></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">For T-series machines, change CPU Credit specification to "Standard" in advanced settings when launching EC2</span></p>
  <p style="font-size: 15pt;"><img src="/assets/IMG/guide/ec2-bt4.png" width="554" height="500" alt="" /></p>
  <p style="font-size: 15pt;"><span style="font-family: '微软雅黑'">3. In Advanced Details, add the following code snippet at the end</span></p>
  <p style="font-size: 10.5pt;"><img src="/assets/IMG/guide/ec2-bt5.png" width="553" height="258" alt="Screenshot.png" /></p>
  <p style="font-size: 15pt;"><span style="font-family: '微软雅黑'">4. Create an Elastic IP</span></p>
  <p style="font-size: 10.5pt;"><img src="/assets/IMG/guide/ec2-bt6.png" width="553" height="257" alt="Screenshot.png" /></p>
  <p style="font-size: 15pt;"><span style="font-family: '微软雅黑'">5. Associate Elastic IP</span></p>
  <p style="font-size: 10.5pt;"><img src="/assets/IMG/guide/ec2-bt7.png" width="553" height="257" alt="Screenshot.png" /></p>
  <p style="font-size: 12pt;"><span style="font-family: '微软雅黑'">Associate with the created instance</span></p>
  <p style="font-size: 10.5pt;"><img src="/assets/IMG/guide/ec2-bt8.png" width="553" height="307" alt="Screenshot.png" /></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">Naming rule for created EC2: Client-Region-Time</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">Tag: Key: Name Value: Client-Region-Time-Operator</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">Volume Tag: Key: Name Value: Client-Region-Time-Operator</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">For Lightsail: Key: client Value: Client-Region-Time-Operator</span></p>
  <p style="font-size: 15pt;"><span style="font-family: '微软雅黑'">6. Install BT Panel on the Server</span></p>
  <p style="font-size: 14pt;"><span style="font-family: '微软雅黑'">Script website: </span><a href="https://www.bt.cn/new/download.html" style="text-decoration: none"><span style="color: #003884">https://www.bt.cn/new/download.html</span></a></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">BT Account: 18856672250</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">Password: q12547788!</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">CentOS Installation Script</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">yum install -y wget && wget -O install.sh </span><a href="https://download.bt.cn/install/install_6.0.sh"><span style="color: #003884">https://download.bt.cn/install/install_6.0.sh</span></a><span style="font-family: '微软雅黑'"> && sh install.sh ed8484bec</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">Ubuntu/Deepin Installation Script</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">wget -O install.sh </span><a href="https://download.bt.cn/install/install-ubuntu_6.0.sh"><span style="color: #003884">https://download.bt.cn/install/install-ubuntu_6.0.sh</span></a><span style="font-family: '微软雅黑'"> && sudo bash install.sh ed8484bec</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">Debian Installation Script</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">wget -O install.sh </span><a href="https://download.bt.cn/install/install-ubuntu_6.0.sh"><span style="color: #003884">https://download.bt.cn/install/install-ubuntu_6.0.sh</span></a><span style="font-family: '微软雅黑'"> && bash install.sh ed8484bec</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">Universal Installation Script</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">if [ -f /usr/bin/curl ]; then curl -sSO </span><a href="https://download.bt.cn/install/install_panel.sh;else"><span style="color: #003884">https://download.bt.cn/install/install_panel.sh;else</span></a><span style="font-family: '微软雅黑'"> wget -O install_panel.sh </span><a href="https://download.bt.cn/install/install_panel.sh;fi;bash"><span style="color: #003884">https://download.bt.cn/install/install_panel.sh;fi;bash</span></a><span style="font-family: '微软雅黑'"> install_panel.sh ed8484bec</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">LoongArch Installation Script (Do not use for other CPUs)</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">wget -O install_panel.sh </span><a href="https://download.bt.cn/install/0/loongarch64/loongarch64_install_panel.sh"><span style="color: #003884">https://download.bt.cn/install/0/loongarch64/loongarch64_install_panel.sh</span></a><span style="font-family: '微软雅黑'"> && bash install_panel.sh ed8484bec</span></p>
  <p style="font-size: 15pt;"><span style="font-family: '微软雅黑'">7. After installation, access the BT Panel externally</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">Use the output information after installation to access the external panel and log in using the provided credentials</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">If you forgot the panel password</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">cd /www/server/panel && btpython tools.py panel testpasswd</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">Access via SSH. It's recommended to install BT SSH Client (Free / Simple / Chinese / Multi-tab). To reset the password, enter the following command (replace “testpasswd” with your new password)</span></p>
  <p style="font-size: 12pt;"><span style="color: #333333; background-color: #ffffff">If login fails multiple times and is temporarily blocked, run this command to clear the restriction</span></p>
  <p style="font-size: 10.5pt;"><span style="font-family: '微软雅黑'">rm -f /www/server/panel/data/.login</span></p>
</div>
