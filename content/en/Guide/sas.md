---
title: Simple Application Server
description: Simple Application Server is a lightweight cloud server for quick setup and easy management, suitable for deploying simple applications.
_path: /en/guide/sas
order: 3
lang: en
tags:
  - nuxt
  - seo
---

<div>
  <h1 style="margin-top: 0pt; margin-bottom: 0pt; line-height: 33pt; background-color: #ffffff;">
    <span style="font-family: '微软雅黑'; font-size: 18pt; color: #181818; background-color: #ffffff;">
      What is Simple Application Server
    </span>
  </h1>
  <div style="margin-bottom: 12pt; clear: both;">
    <h2 style="margin-top: 0pt; margin-bottom: 0pt; line-height: 24pt; padding-top: 18pt; padding-bottom: 12pt;">
      <a href="https://www.alibabacloud.com/product/swas" target="https://www.alibabacloud.com/help/zh/simple-application-server/product-overview/_blank" style="text-decoration: none">
        <span style="font-family: '微软雅黑'; font-size: 14pt; color: #000; background-color: #ffffff;">Simple Application Server</span>
      </a>
      <span style="font-family: '微软雅黑'; font-size: 14pt; color: #181818; background-color: #ffffff;">
        (Simple Application Server) is a lightweight cloud server that can be quickly set up and easily managed. It provides one-click application deployment, one-stop domain resolution, security management, and O&M monitoring services for single-server scenarios. Simple Application Server is easy and convenient to operate, enabling you to quickly get started with deploying simple applications.
      </span>
    </h2>
    <h2 style="margin-top: 0pt; margin-bottom: 0pt; line-height: 24pt;">
      <span style="font-family: '微软雅黑'; font-size: 18pt; color: #181818;">Product Overview</span>
    </h2>
  </div>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt;">
      Simple Application Server is based on ECS compute, storage, and network resources, combined with Alibaba Cloud public images and Marketplace images to provide an efficient application deployment solution. If you are a beginner learning about cloud computing services or a personal developer or SME deploying simple applications, Simple Application Server is recommended.
    </span>
  </p>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt; color: #181818; background-color: #ffffff;">
      By choosing Simple Application Server, you can enjoy the following features:
    </span>
  </p>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 25pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt;">
      No need to build physical hosts locally, and no need to purchase or configure hardware equipment.
    </span>
  </p>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 25pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt;">
      One-stop operation experience, minute-level delivery, and quick deployment.
    </span>
  </p>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 25pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt;">
      Cloud computing resources are provided in packages, with favorable pricing and stable performance.
    </span>
  </p>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 25pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt;">
      Provides security features such as firewall, HTTPS encrypted access, internal network isolation, and data backup.
    </span>
  </p>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 25pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt;">
      Provides O&M features such as resource monitoring, self-diagnosis, and operation logs.
    </span>
  </p>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 25pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt;">
      Integrates Alibaba Cloud public images (system images) and Marketplace images (application images), and offers application management features for application images.
    </span>
  </p>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 25pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt;">
      Provides industry-standard APIs to improve usability and applicability.
    </span>
  </p>
  <h2 style="margin-top: 18pt; margin-bottom: 12pt; line-height: 24pt; border-top: 0.75pt solid #e9e9e9; padding-top: 18pt;">
    <span style="font-family: '微软雅黑'; font-size: 18pt; color: #181818;">
      Product Architecture
    </span>
  </h2>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 18pt;">
    <span style="font-family: '微软雅黑'; font-size: 10.5pt;">
      The product architecture is shown below. You can choose the application or system image that suits your business, specify server performance through packages, and use other Alibaba Cloud services to efficiently build development environments or applications.
    </span>
    <img src="/assets/IMG/guide/sas.png" width="562" height="419" alt="IMG_256" style="-aw-left-pos: 0pt; -aw-rel-hpos: column; -aw-rel-vpos: paragraph; -aw-top-pos: 0pt; -aw-wrap-type: inline;" />
  </p>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt;"> </span>
  </p>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt;">
      Simple Application Server is mainly composed of the following components:
    </span>
  </p>
  <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt;">
    <span style="font-family: '微软雅黑'; font-size: 14pt; font-weight: bold; color: #181818; background-color: #ffffff;">
      1. Package Configuration
    </span>
  </p>
<table cellspacing="0" cellpadding="0" style="width: 906.9pt; margin-right: 9pt; margin-left: 9pt; border-collapse: collapse; float: left;">
  <tr>
    <td style="width: 83.5pt; border: 0.75pt solid #d8d8d8; padding: 7.12pt 9.38pt; vertical-align: middle; background-color: #ffffff;">
      <p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">Resource Type</span>
      </p>
    </td>
    <td style="border: 0.75pt solid #d8d8d8; padding: 7.12pt 9.38pt; vertical-align: middle; background-color: #ffffff;">
      <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
        <span style="font-family: '微软雅黑';">Description</span>
      </p>
    </td>
  </tr>
  <tr>
    <td style="width: 83.5pt; border: 0.75pt solid #d8d8d8; padding: 7.12pt 9.38pt; vertical-align: middle; background-color: #ffffff;">
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt">
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">Compute Resources</span>
      </p>
    </td>
    <td style="border: 0.75pt solid #d8d8d8; padding: 7.12pt 9.38pt; vertical-align: middle; background-color: #ffffff;">
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt">
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">Simple Application Server is based on stable ECS instance specifications, suitable for small</span>
        <span style="font-family: Calibri; font-size: 10.5pt;"> Web </span>
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">applications and other lightweight low-load scenarios. If you need other instance types</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt">
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">or instances with higher</span>
        <span style="font-family: Calibri; font-size: 10.5pt;"> CPU </span>
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">performance requirements (e.g., large applications, video encoding), please use ECS.</span>
      </p>
    </td>
  </tr>
  <tr>
    <td style="width: 83.5pt; border: 0.75pt solid #d8d8d8; padding: 7.12pt 9.38pt; vertical-align: middle; background-color: #ffffff;">
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt">
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">Storage Resources</span>
      </p>
    </td>
    <td style="border: 0.75pt solid #d8d8d8; padding: 7.12pt 9.38pt; vertical-align: middle; background-color: #ffffff;">
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt">
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">Simple Application Server uses cost-effective system disks that meet mainstream application needs,</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt">
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">with relatively stable read/write performance.</span>
      </p>
    </td>
  </tr>
  <tr>
    <td style="width: 83.5pt; border: 0.75pt solid #d8d8d8; padding: 7.12pt 9.38pt; vertical-align: middle; background-color: #ffffff;">
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt">
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">Network Resources</span>
      </p>
    </td>
    <td style="border: 0.75pt solid #d8d8d8; padding: 7.12pt 9.38pt; vertical-align: middle; background-color: #ffffff;">
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt">
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">Simple Application Server packages provide fixed traffic quotas and public bandwidth,</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt">
        <span style="font-family: '微软雅黑'; font-size: 10.5pt;">allowing public access. Upon creation, the server is assigned a fixed public</span>
      </p>
      <p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt">
        <span style="font-family: Calibri; font-size: 10.5pt;">IP</span><span style="font-family: '微软雅黑'; font-size: 10.5pt;"> by default.</span>
      </p>
    </td>
  </tr>
</table>

<p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt;">
  <span style="font-family: '微软雅黑'; font-size: 14pt;">
    Simple Application Server packages compute, storage, and network resources into plans for easy configuration. See the table above for details.
  </span>
</p>
<p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt; font-weight: bold; color: #181818; background-color: #ffffff;">
    2. Images
  </span>
</p>
<p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt;">
    Simple Application Server provides the following two image types for you to choose from:
  </span>
</p>
<p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt;">
    Application Images: These contain applications and related initialization data, required runtime environments, and operating systems. After creating a server using an application image, you can directly use the pre-installed application or customize the configuration according to your business needs. This reduces steps like uploading and installing applications and achieves out-of-the-box usability.
  </span>
</p>
<p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt;">
    System Images: These contain only the initial operating system, without any application data or environment configuration. After creating a server using a system image, it will be a clean OS environment. You can install applications based on your actual business needs.
  </span>
</p>
<p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 18pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt;">
    In addition, Simple Application Server supports custom image creation.
  </span>
</p>

<p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt; font-weight: bold; color: #181818; background-color: #ffffff;">
    3. Related Services
  </span>
</p>
<p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt;">
    Simple Application Server integrates the following Alibaba Cloud services to help you build and manage applications.
  </span>
</p>
<p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt;">
    VPC (Virtual Private Cloud): Under the same account and region, multiple Simple Application Servers are by default in the same VPC private network. Communication between servers can be achieved through the internal network. Note that internal bandwidth is shared, so its speed is not guaranteed.
  </span>
</p>
<p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt;">
    Domain Name Resolution: You can bind a domain name and resolve it to the current server’s IP address.
  </span>
</p>
<p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt;">
    HTTPS Encrypted Access (CA Certificate): By specifying a purchased CA certificate, you can configure HTTPS encrypted access for your Simple Application Server.
  </span>
</p>

<h2 style="margin-top: 18pt; margin-bottom: 12pt; line-height: 24pt; border-top: 0.75pt solid #e9e9e9; padding-top: 18pt;">
  <span style="font-family: '微软雅黑'; font-size: 19.5pt; color: #181818;">
    Billing
  </span>
</h2>
<p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt;">
    The packages and data disks of Simple Application Server are billed on a subscription basis (monthly or yearly). Excess traffic beyond the package is billed on a pay-as-you-go basis.
  </span>
</p>

<h2 style="margin-top: 18pt; margin-bottom: 12pt; line-height: 24pt; border-top: 0.75pt solid #e9e9e9; padding-top: 18pt;">
  <span style="font-family: '微软雅黑'; font-size: 19.5pt; color: #181818;">
    Product Comparison
  </span>
</h2>
<p style="margin-top: 0pt; margin-bottom: 12pt; line-height: 30pt">
  <span style="font-family: '微软雅黑'; font-size: 14pt;">
    Compared to ECS, Simple Application Server has a lower usage barrier and simpler configuration. It enables you to quickly get started and deploy simple applications or websites, making it more suitable for individual developers, students, and similar users.
  </span>
</p>
</div>