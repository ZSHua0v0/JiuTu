---
title: 创建EC2与宝塔部署
description:
_path: /zh/guide/ec2-bt
order: 6
---

<div>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: center;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <span style="font-family: '微软雅黑'; font-weight: bold"
          >创建EC2与宝塔部署</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <span style="font-family: '微软雅黑'">1、</span
        ><span style="font-family: '微软雅黑'; font-size: 14pt"
          >自动分配共有IP改成禁用，禁用自动分配IP，为最后分配弹性IP，将IP固定死</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="_AQl-1691742845168"></a
        ><img
          src="/assets/IMG/guide/ec2-bt1.png"
          width="553"
          height="381"
          alt="截图.png"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: column;
            -aw-rel-vpos: paragraph;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <a name="mAzn-1691742845187"></a
        ><span style="font-family: '微软雅黑'">2、安全组环境</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="_LQS-1691743009709"></a
        ><span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="t2Px-1691743011233"></a
        ><img
          src="/assets/IMG/guide/ec2-bt2.png"
          width="553"
          height="312"
          alt="截图.png"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: column;
            -aw-rel-vpos: paragraph;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 12pt;
        "
      >
        <a name="MTih-1691743011239"></a
        ><span style="font-family: '微软雅黑'"
          >添加安全规则，添加HTTP端口号</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="ATm0-1691743059229"></a
        ><img
          src="/assets/IMG/guide/ec2-bt3.png"
          width="553"
          height="257"
          alt="截图.png"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: column;
            -aw-rel-vpos: paragraph;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 6pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="dyHH-1691743059234"></a
        ><span style="font-family: '微软雅黑'">对于</span
        ><span style="font-family: '微软雅黑'">t</span
        ><span style="font-family: '微软雅黑'">系列的机器再开</span
        ><span style="font-family: '微软雅黑'">ec2</span
        ><span style="font-family: '微软雅黑'"
          >时，在高级选项里将积分规范改为标准</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <img
          src="/assets/IMG/guide/ec2-bt4.png"
          width="554"
          height="500"
          alt=""
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: column;
            -aw-rel-vpos: paragraph;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <span style="font-family: '微软雅黑'"
          >3、在高级详细信息里面，最后添加一段代码</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="tfOE-1691978666028"></a
        ><img
          src="/assets/IMG/guide/ec2-bt5.png"
          width="553"
          height="258"
          alt="截图.png"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: column;
            -aw-rel-vpos: paragraph;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-left: 21pt;
          margin-bottom: 6pt;
          text-indent: 21pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <span
          style="
            height: 0pt;
            text-align: left;
            display: block;
            position: absolute;
            z-index: 0;
          "
          ><img
            src="/assets/IMG/guide/ec2-bt3-1.png"
            width="500"
            height="154"
            alt=""
            style="
              margin-top: 4.53pt;
              margin-left: -18.02pt;
              -aw-left-pos: 24.35pt;
              -aw-rel-hpos: column;
              -aw-rel-vpos: paragraph;
              -aw-top-pos: 4.9pt;
              -aw-wrap-type: none;
              position: absolute;
            " /></span
        ><span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <a name="EFtr-1691746343161"></a><a name="nCMe-1691979206334"></a
        ><span style="font-family: '微软雅黑'; font-weight: bold">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <span style="font-family: '微软雅黑'; font-weight: bold">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <span style="font-family: '微软雅黑'; font-weight: bold">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <span style="font-family: '微软雅黑'; font-weight: bold">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <span style="font-family: '微软雅黑'">4、创建弹性IP</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="vxPr-1691748939098"></a
        ><img
          src="/assets/IMG/guide/ec2-bt6.png"
          width="553"
          height="257"
          alt="截图.png"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: column;
            -aw-rel-vpos: paragraph;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <a name="hIS0-1691748967402"></a
        ><span style="font-family: '微软雅黑'">5、关联分配弹性IP</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="Y3xA-1691749008336"></a
        ><img
          src="/assets/IMG/guide/ec2-bt7.png"
          width="553"
          height="257"
          alt="截图.png"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: column;
            -aw-rel-vpos: paragraph;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 12pt;
        "
      >
        <a name="ChoY-1691749050280"></a
        ><span style="font-family: '微软雅黑'">关联创建好的实例</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="xJ1n-1691749046359"></a
        ><img
          src="/assets/IMG/guide/ec2-bt8.png"
          width="553"
          height="307"
          alt="截图.png"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: column;
            -aw-rel-vpos: paragraph;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="ecyD-1691749043784"></a
        ><span style="font-family: '微软雅黑'">创建好的</span
        ><span style="font-family: '微软雅黑'">ec2</span
        ><span style="font-family: '微软雅黑'">命名规范：客户</span
        ><span style="font-family: '微软雅黑'">-</span
        ><span style="font-family: '微软雅黑'">地区</span
        ><span style="font-family: '微软雅黑'">-</span
        ><span style="font-family: '微软雅黑'">时间</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <span style="font-family: '微软雅黑'">标签：键：</span
        ><span style="font-family: '微软雅黑'">Name </span
        ><span style="font-family: '微软雅黑'">值：客户</span
        ><span style="font-family: '微软雅黑'">-</span
        ><span style="font-family: '微软雅黑'">地区</span
        ><span style="font-family: '微软雅黑'">-</span
        ><span style="font-family: '微软雅黑'">时间</span
        ><span style="font-family: '微软雅黑'">-</span
        ><span style="font-family: '微软雅黑'">处理人</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 6pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <span style="font-family: '微软雅黑'">卷标签：键：</span
        ><span style="font-family: '微软雅黑'">Name </span
        ><span style="font-family: '微软雅黑'">值：客户</span
        ><span style="font-family: '微软雅黑'">-</span
        ><span style="font-family: '微软雅黑'">地区</span
        ><span style="font-family: '微软雅黑'">-</span
        ><span style="font-family: '微软雅黑'">时间</span
        ><span style="font-family: '微软雅黑'">-</span
        ><span style="font-family: '微软雅黑'">处理人</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <span style="font-family: '微软雅黑'">对于</span
        ><span style="font-family: '微软雅黑'">Lightsail</span
        ><span style="font-family: '微软雅黑'">机器：键：</span
        ><span style="font-family: '微软雅黑'">client </span
        ><span style="font-family: '微软雅黑'">值：客户</span
        ><span style="font-family: '微软雅黑'">-</span
        ><span style="font-family: '微软雅黑'">地区</span
        ><span style="font-family: '微软雅黑'">-</span
        ><span style="font-family: '微软雅黑'">时间</span
        ><span style="font-family: '微软雅黑'">-</span
        ><span style="font-family: '微软雅黑'">处理人</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <span style="font-family: '微软雅黑'">6、在服务器安装宝塔</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 14pt;
        "
      >
        <a name="Yfvv-1691979567025"></a
        ><span style="font-family: '微软雅黑'">脚本网站：</span
        ><a
          href="https://www.bt.cn/new/download.html"
          style="text-decoration: none"
          ><span style="font-family: '微软雅黑'; color: #003884"
            >https://www.bt.cn/new/download.html</span
          ></a
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="Dilp-1691979559118"></a
        ><span style="font-family: '微软雅黑'">宝塔账号：</span
        ><span style="font-family: '微软雅黑'">18856672250</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="_ljF-1692079391153"></a
        ><span style="font-family: '微软雅黑'">密码：</span
        ><span style="font-family: '微软雅黑'">q12547788</span
        ><span style="font-family: '微软雅黑'">！</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="h6cn-1692079391155"></a
        ><span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="Ttwq-1692079387787"></a
        ><span style="font-family: '微软雅黑'">Centos</span
        ><span style="font-family: '微软雅黑'">安装脚本</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="_La8-1691980232730"></a
        ><span style="font-family: '微软雅黑'"
          >yum install -y wget &amp;&amp; wget -O install.sh </span
        ><a
          href="https://download.bt.cn/install/install_6.0.sh"
          style="text-decoration: none"
          ><span style="font-family: '微软雅黑'; color: #003884"
            >https://download.bt.cn/install/install_6.0.sh</span
          ></a
        ><span style="font-family: '微软雅黑'">
          &amp;&amp; sh install.sh ed8484bec
        </span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="_Ex7-1691980232732"></a
        ><span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="ZKMQ-1691980232734"></a
        ><span style="font-family: '微软雅黑'">Ubuntu/Deepin</span
        ><span style="font-family: '微软雅黑'">安装脚本</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="Zo0V-1691980232736"></a
        ><span style="font-family: '微软雅黑'">wget -O install.sh </span
        ><a
          href="https://download.bt.cn/install/install-ubuntu_6.0.sh"
          style="text-decoration: none"
          ><span style="font-family: '微软雅黑'; color: #003884"
            >https://download.bt.cn/install/install-ubuntu_6.0.sh</span
          ></a
        ><span style="font-family: '微软雅黑'">
          &amp;&amp; sudo bash install.sh ed8484bec
        </span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="GxNX-1691980232740"></a
        ><span style="font-family: '微软雅黑'">Debian</span
        ><span style="font-family: '微软雅黑'">安装脚本</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="DtEn-1691980232742"></a
        ><span style="font-family: '微软雅黑'">wget -O install.sh </span
        ><a
          href="https://download.bt.cn/install/install-ubuntu_6.0.sh"
          style="text-decoration: none"
          ><span style="font-family: '微软雅黑'; color: #003884"
            >https://download.bt.cn/install/install-ubuntu_6.0.sh</span
          ></a
        ><span style="font-family: '微软雅黑'">
          &amp;&amp; bash install.sh ed8484bec
        </span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="_kCY-1691980232744"></a
        ><span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="bJ7b-1691980232746"></a
        ><span style="font-family: '微软雅黑'">万能安装脚本</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="nMLb-1691980232748"></a
        ><span style="font-family: '微软雅黑'"
          >if [ -f /usr/bin/curl ];then curl -sSO </span
        ><a
          href="https://download.bt.cn/install/install_panel.sh;else"
          style="text-decoration: none"
          ><span style="font-family: '微软雅黑'; color: #003884"
            >https://download.bt.cn/install/install_panel.sh;else</span
          ></a
        ><span style="font-family: '微软雅黑'"> wget -O install_panel.sh </span
        ><a
          href="https://download.bt.cn/install/install_panel.sh;fi;bash"
          style="text-decoration: none"
          ><span style="font-family: '微软雅黑'; color: #003884"
            >https://download.bt.cn/install/install_panel.sh;fi;bash</span
          ></a
        ><span style="font-family: '微软雅黑'"> install_panel.sh ed8484bec </span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="_IlE-1691980232750"></a
        ><span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="wsrs-1691980232752"></a
        ><span style="font-family: '微软雅黑'">国产龙芯架构安装脚本</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="HeYZ-1691980232754"></a
        ><span style="font-family: '微软雅黑'">（其他</span
        ><span style="font-family: '微软雅黑'">CPU</span
        ><span style="font-family: '微软雅黑'">请勿使用）</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="r1Mp-1691980232756"></a
        ><span style="font-family: '微软雅黑'">wget -O install_panel.sh </span
        ><a
          href="https://download.bt.cn/install/0/loongarch64/loongarch64_install_panel.sh"
          style="text-decoration: none"
          ><span style="font-family: '微软雅黑'; color: #003884"
            >https://download.bt.cn/install/0/loongarch64/loongarch64_install_panel.sh</span
          ></a
        ><span style="font-family: '微软雅黑'">
          &amp;&amp; bash install_panel.sh ed8484bec</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="MGYS-1691978906743"></a
        ><span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 15pt;
        "
      >
        <a name="s7S5-1691978907229"></a
        ><span style="font-family: '微软雅黑'"
          >7、安装完成之后进入外网面板</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="xagF-1692079190860"></a
        ><span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="_DHt-1692079381912"></a
        ><span style="font-family: '微软雅黑'"
          >使用安装好显示的信息进入外网面板，输入信息里的账号密码</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="_5oN-1694051488993"></a
        ><span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="_pQa-1694051489847"></a
        ><span style="font-family: '微软雅黑'">如果忘记面板密码</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="Y5HL-1694051518137"></a
        ><span style="font-family: '微软雅黑'"
          >cd /www/server/panel &amp;&amp; btpython tools.py panel
          testpasswd</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="Nlo7-1694051531912"></a
        ><span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="_AtL-1694051539760"></a
        ><span style="font-family: '微软雅黑'">进入</span
        ><span style="font-family: '微软雅黑'">ssh</span
        ><span style="font-family: '微软雅黑'">，推荐先安装 堡塔</span
        ><span style="font-family: '微软雅黑'">SSH</span
        ><span style="font-family: '微软雅黑'">客户端 </span
        ><span style="font-family: '微软雅黑'">(</span
        ><span style="font-family: '微软雅黑'">免费</span
        ><span style="font-family: '微软雅黑'">/</span
        ><span style="font-family: '微软雅黑'">简单</span
        ><span style="font-family: '微软雅黑'">/</span
        ><span style="font-family: '微软雅黑'">中文</span
        ><span style="font-family: '微软雅黑'">/</span
        ><span style="font-family: '微软雅黑'">多屏</span
        ><span style="font-family: '微软雅黑'">) </span
        ><span style="font-family: '微软雅黑'"
          >，输入以下命令重置密码（把命令最后面的 </span
        ><span style="font-family: '微软雅黑'">“testpasswd” </span
        ><span style="font-family: '微软雅黑'">替换成你要改的新密码）</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 12pt;
        "
      >
        <a name="oeRr-1694051594801"></a
        ><span
          style="font-family: '微软雅黑'; color: #333333; background-color: #ffffff"
          >如果提示多次登录失败，暂时禁止登录 请输入以下命令 清除登录限制</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <a name="cs8W-1694051600431"></a
        ><span style="font-family: '微软雅黑'"
          >rm -f /www/server/panel/data/.login</span
        >
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-left: 21pt;
          margin-bottom: 6pt;
          text-indent: 21pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-left: 21pt;
          margin-bottom: 6pt;
          text-indent: 21pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
      <p
        style="
          margin-top: 0pt;
          margin-bottom: 0pt;
          text-align: justify;
          widows: 0;
          orphans: 0;
          font-size: 10.5pt;
        "
      >
        <span style="font-family: '微软雅黑'">&#xa0;</span>
      </p>
    </div>

