<template>
  <div>
    <div v-if="isMobile" class="music-bars">
      <span v-for="i in 13" key="i"></span>
      <!-- 可继续添加更多 span -->
    </div>

    <footer class="footer">
      <div class="footer-left">
        <div class="logo-section">
          <img src="../../public/assets/IMG/logos/jiutu_logo_white.png" alt="Logo" class="footer-logo"/>
          <h2 class="company-name">九途</h2>
        </div>
        <div class="core-values-flex">
          <div class="core-values">
            <p>九途核心价值：</p>
            <p>降低上云成本 &nbsp;&nbsp;专业技术支持</p>
            <p>提供贴心服务 &nbsp;&nbsp;拓展行业人脉</p>
          </div>
          <button class="contact-button"><a :href="contactLinks.CustomerService" target="_blank">联系我们</a></button>
        </div>
      </div>

      <div class="footer-middle">
        <div class="footer-column">
          <h3>热门产品</h3>
          <ul>
            <li>轻量云服务器</li>
            <li>大带宽服务器</li>
            <li>EC2服务器</li>
            <li>站群服务器</li>
            <li>高防服务器</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>成功案例</h3>
          <ul>
            <li>Amused-group</li>
            <li>蔚蓝地图</li>
            <li>小鱼办公</li>
            <li>云派网络</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>使用指南</h3>
          <ul class="__border_bottom">
            <li>创建EC2与宝塔部署</li>
            <li>边缘网络加速</li>
            <li>轻量应用服务器</li>
            <li>域名购买及解析</li>
            <li>云服务器ECS</li>
            <li>专有宿主机LDDH</li>
          </ul>
        </div>
      </div>

      <div v-if="!isMobile" class="footer-right">
        <div class="footer-column-flex">
          <div>关于我们</div>
          <div>联系我们</div>
        </div>
        <div class="footer-column-flex">
          <div>站点地图</div>
          <div>标签地图</div>
          <div>隐私政策</div>
        </div>
        <div class="icon-list">
          <img src="../../public/assets/IMG/icons/wechat_white_bg.png" alt="WeChat"/>
          <img src="../../public/assets/IMG/icons/phone_white_bg.png" alt="Phone"/>
          <img src="../../public/assets/IMG/icons/tg_white_bg.png" alt="Mail"/>
          <img class="imgW2" src="../../public/assets/IMG/icons/CustomerS2.png" alt="Support"/>
        </div>
      </div>

      <div v-if="isMobile" class="footer-right">
        <div class="footer-column-flex">
          <div>关于我们</div>
          <div>联系我们</div>
        </div>
        <div class="footer-column-flex">
          <div>站点地图</div>
          <div>标签地图</div>
          <div>隐私政策</div>
        </div>

      </div>
      <div v-if="isMobile" class="icon-list">
        <a :href="contactLinks.CustomerService" target="_blank">
          <img class="imgW2" src="../../public/assets/IMG/icons/CustomerS2.png" alt="Support"/>
        </a>
        <a :href="contactLinks.wechat" target="_blank">
          <img src="../../public/assets/IMG/icons/wechat_white_bg.png" alt="WeChat"/>
        </a>
        <a :href="contactLinks.phone" target="_blank">
          <img src="../../public/assets/IMG/icons/phone_white_bg.png" alt="Phone"/>
        </a>
        <a :href="contactLinks.telegram" target="_blank">
          <img src="../../public/assets/IMG/icons/tg_white_bg.png" alt="Mail"/>
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.footer {
  background-color: #ffe5b2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
  font-family: sans-serif;
  height: 400px;
}

.footer-left {
  flex: 0.4 1 100px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 8%;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-logo {
  width: clamp(2.5rem, 2.5vw, 10rem);
  height: clamp(2.5rem, 4vh, 10rem);
}

.company-name {
  font-size: clamp(1rem, 1.6vw, 10rem);
  font-weight: bold;
  color: #333;
}

.core-values {
  margin-top: 1rem;
  background-color: #ffb12b;
  padding: 1rem;
  line-height: 1.8;
  font-size: clamp(1rem, 1vw, 1.2rem);
}

.contact-button {
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  width: fit-content;
  margin-top: 5%;
}

.footer-middle {
  display: flex;
  justify-content: center;
  gap: 6rem;
}

.footer-column h3 {
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 0.5rem;
  color: #333;
}

.footer-right {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-left: 3%;
  border-left: 2px solid #feb001;
  padding-left: 3%;
}

.icon-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.icon-list img {
  width: clamp(40px, 3vw, 10rem);
  height: clamp(40px, 3vw, 10rem);
  margin-left: 10%;
}

.imgW2 {
  width: clamp(40px, 4vw, 10rem) !important;
  height: clamp(40px, 4vw, 10rem) !important;
  margin-left: 0 !important;
}

.footer-column-flex {
  display: flex;
  flex-direction: column; /* 竖排 */
  gap: 0.7rem;
  font-size: clamp(1rem, 1vw, 1.2rem);
}

.contact-button a {
  color: white;
  text-decoration: none;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    height: auto;
  }

  .company-name {
    display: none;
  }

  .footer-left, .footer-middle, .footer-right {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .footer-left {
    display: flex;
    flex-direction: row; /* ⬅ 横向排列 */
    align-items: flex-start; /* 垂直居中 */
    justify-content: space-between; /* 左对齐 */
  }

  .logo-section {
    //justify-content: flex-start;
    width: 10%;
  }

  .core-values {
    border-radius: 10px;
    background-color: #ffb12b00;
    padding: 10px 0 0 0;
    font-size: 0.8rem;
  }

  .core-values-flex {
    display: flex;
    justify-self: flex-end;
    border-bottom: 0.2rem solid #feb001;
    position: relative;
    width: 83%;
  }

  .contact-button {
    background-color: #ffa500;
    color: white;
    border: none;
    padding: 0 1rem;
    border-radius: 20px;
    cursor: pointer;
    height: 23px;
    width: fit-content;
    position: absolute;
    bottom: 5%;
    right: 0;

  }

  .footer-middle {
    flex-direction: column;
    gap: 0;
    margin-top: 1.5rem;
  }

  .footer-column {
    margin-bottom: 1rem;
  }

  .footer-column h3 {
    font-size: 0.8rem;
    margin-bottom: 0.5rem
  }

  .footer-column ul {
    display: flex;
    width: 83%;
    //justify-content: space-between;
    flex-wrap: wrap;
    gap: 4%;
    margin: 0 auto 0 15%;
    font-size: 0.7rem;
  }

  .footer-right {
    display: flex;
    gap: 1rem;
    border: none;
    padding: 0;
  }

  .__border_bottom {
    border-bottom: 0.2rem solid #feb001;
  }

  .footer-column-flex {
    flex-direction: row;
    gap: 1.2rem;
    font-size: 0.8rem;
  }

  .icon-list {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    width: 100%;
  }

  .icon-list img {
    width: 40px;
    height: 40px;
    margin: 0;
  }

  .imgW2 {
    width: 36px !important;
    height: 36px !important;
    margin: 0 !important;
  }

  .music-bars {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 20px;
    background-color: white;
    overflow: hidden;
  }

  .music-bars span {
    display: block;
    width: 15px;
    background-color: #fcb322; /* 你截图中的橙色 */
    animation: bounce 1.2s infinite ease-in-out;
  }

  /* 给每个柱子不同的动画延迟 */
  .music-bars span:nth-child(1) {
    animation-delay: 0s;
  }

  .music-bars span:nth-child(2) {
    animation-delay: 0.1s;
  }

  .music-bars span:nth-child(3) {
    animation-delay: 0.2s;
  }

  .music-bars span:nth-child(4) {
    animation-delay: 0.3s;
  }

  .music-bars span:nth-child(5) {
    animation-delay: 0.4s;
  }

  .music-bars span:nth-child(6) {
    animation-delay: 0.5s;
  }

  .music-bars span:nth-child(7) {
    animation-delay: 0.6s;
  }

  .music-bars span:nth-child(8) {
    animation-delay: 0.7s;
  }

  .music-bars span:nth-child(9) {
    animation-delay: 0.8s;
  }

  .music-bars span:nth-child(10) {
    animation-delay: 0.9s;
  }

  .music-bars span:nth-child(11) {
    animation-delay: 1s;
  }

  .music-bars span:nth-child(12) {
    animation-delay: 1.1s;
  }

  .music-bars span:nth-child(13) {
    animation-delay: 1.2s;
  }


  @keyframes bounce {
    0%, 100% {
      height: 20%;
    }
    50% {
      height: 100%;
    }
  }

}

</style>
<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {contactLinks as contactLinksRaw} from '../../public/js/contact_link.js'

const contactLinks = contactLinksRaw

const isMobile = ref(false)

function checkIsMobile() {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIsMobile)
})
</script>