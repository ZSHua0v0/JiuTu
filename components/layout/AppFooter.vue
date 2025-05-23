<template>
  <div>
    <div v-if="isMobile" class="music-bars">
      <span v-for="i in 13" key="i"></span>
    </div>

    <footer class="footer">
      <div :class="[
      'footer-left',
      locale === 'en' ? 'footer-left_en' : ''
    ]">
        <div class="logo-section">
          <img src="/assets/IMG/logos/jiutu_logo_white.png" alt="Logo" class="footer-logo"/>
          <h2 class="company-name">{{ $t('Footer.company.name') }}</h2>
        </div>
        <div class="core-values-flex">
          <div :class="[
      'core-values',
      locale === 'en' ? 'core-values_en' : ''
    ]">
            <p>{{ $t('Footer.company.coreTitle') }}</p>
            <p>{{ $t('Footer.company.core1') }} &nbsp;&nbsp;{{ $t('Footer.company.core2') }}</p>
            <p>{{ $t('Footer.company.core3') }} &nbsp;&nbsp;{{ $t('Footer.company.core4') }}</p>
          </div>
          <button class="contact-button">
            <a :href="contactLinks.CustomerService" target="_blank">{{ $t('Footer.company.contact') }}</a>
          </button>
        </div>
      </div>

      <div class="footer-middle">
        <div class="footer-column">
          <h3>{{ $t('Footer.product.title') }}</h3>
          <ul>
            <li><nuxt-link to="/ProductDeals" style="color: #333">{{ $t('Footer.product.items[0]') }}</nuxt-link></li>
            <li><nuxt-link to="/ProductDeals" style="color: #333">{{ $t('Footer.product.items[1]') }}</nuxt-link></li>
            <li><nuxt-link to="/ProductDeals" style="color: #333">{{ $t('Footer.product.items[2]') }}</nuxt-link></li>
            <li><nuxt-link to="/ProductDeals" style="color: #333">{{ $t('Footer.product.items[3]') }}</nuxt-link></li>
            <li><nuxt-link to="/ProductDeals" style="color: #333">{{ $t('Footer.product.items[4]') }}</nuxt-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>{{ $t('Footer.cases.title') }}</h3>
          <ul>
            <li><nuxt-link to="/CaseStudies/amused-group" style="color: #333">{{ $t('Footer.cases.items[0]') }}</nuxt-link></li>
            <li><nuxt-link to="/CaseStudies/bluemap" style="color: #333">{{ $t('Footer.cases.items[1]') }}</nuxt-link></li>
            <li><nuxt-link to="/CaseStudies/nemo" style="color: #333">{{ $t('Footer.cases.items[2]') }}</nuxt-link></li>
            <li><nuxt-link to="/CaseStudies/yunpai" style="color: #333">{{ $t('Footer.cases.items[3]') }}</nuxt-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>{{ $t('Footer.guide.title') }}</h3>
          <ul class="__border_bottom">
            <li><nuxt-link to="/guide/ec2-bt" style="color: #333">{{ $t('Footer.guide.items[0]') }}</nuxt-link></li>
            <li><nuxt-link to="/guide/ena" style="color: #333">{{ $t('Footer.guide.items[1]') }}</nuxt-link></li>
            <li><nuxt-link to="/guide/sas" style="color: #333">{{ $t('Footer.guide.items[2]') }}</nuxt-link></li>
            <li><nuxt-link to="/guide/domain" style="color: #333">{{ $t('Footer.guide.items[3]') }}</nuxt-link></li>
            <li><nuxt-link to="/guide/ecs" style="color: #333">{{ $t('Footer.guide.items[4]') }}</nuxt-link></li>
            <li><nuxt-link to="/guide/ddh" style="color: #333">{{ $t('Footer.guide.items[5]') }}</nuxt-link></li>
          </ul>
        </div>
      </div>

      <div v-if="!isMobile" class="footer-right">
        <div class="footer-column-flex">
          <div><nuxt-link to="/FastRegister" style="color: #333">{{ $t('Footer.right.row1[0]') }}</nuxt-link></div>
          <div><nuxt-link to="/FastRegister" style="color: #333">{{ $t('Footer.right.row1[1]') }}</nuxt-link></div>
        </div>
        <div class="footer-column-flex">
          <div><a href="/sitemap_index.xml" target="_blank" style="color: #333">{{ $t('Footer.right.row2[0]') }}</a></div>
          <div><nuxt-link to="/tags" style="color: #333">{{ $t('Footer.right.row2[1]') }}</nuxt-link></div>
          <div><nuxt-link to="/privacy" style="color: #333">{{ $t('Footer.right.row2[2]') }}</nuxt-link></div>
        </div>
        <div class="icon-list">
          <img src="/assets/IMG/icons/wechat_white_bg.png" alt="WeChat"/>
          <img src="/assets/IMG/icons/phone_white_bg.png" alt="Phone"/>
          <img src="/assets/IMG/icons/tg_white_bg.png" alt="Mail"/>
          <img class="imgW2" src="/assets/IMG/icons/CustomerS2.png" alt="Support"/>
        </div>
      </div>

      <div v-if="isMobile" class="footer-right">
        <div class="footer-column-flex">
          <div><nuxt-link to="/FastRegister" style="color: #333">{{ $t('Footer.right.row1[0]') }}</nuxt-link></div>
          <div><nuxt-link to="/FastRegister" style="color: #333">{{ $t('Footer.right.row1[1]') }}</nuxt-link></div>
        </div>
        <div class="footer-column-flex">
          <div><a href="/sitemap_index.xml" target="_blank" style="color: #333">{{ $t('Footer.right.row2[0]') }}</a></div>
          <div><nuxt-link to="/tags" style="color: #333">{{ $t('Footer.right.row2[1]') }}</nuxt-link></div>
          <div><nuxt-link to="/privacy" style="color: #333">{{ $t('Footer.right.row2[2]') }}</nuxt-link></div>
        </div>
      </div>

      <div v-if="isMobile" class="icon-list">
        <a :href="contactLinks.CustomerService" target="_blank">
          <img class="imgW2" src="/assets/IMG/icons/CustomerS2.png" alt="Support"/>
        </a>
        <a :href="contactLinks.wechat" target="_blank">
          <img src="/assets/IMG/icons/wechat_white_bg.png" alt="WeChat"/>
        </a>
        <a :href="contactLinks.phone" target="_blank">
          <img src="/assets/IMG/icons/phone_white_bg.png" alt="Phone"/>
        </a>
        <a :href="contactLinks.telegram" target="_blank">
          <img src="/assets/IMG/icons/tg_white_bg.png" alt="Mail"/>
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.footer-left_en {
  flex: 0.4 1 230px !important;
  display: flex
;
  flex-direction: column;
  gap: 1rem;
  margin-right: 8%;
}
.core-values_en{
  margin-top: 1rem;
  background-color: #ffb12b;
  padding: 0;
  line-height: 1.8;
  font-size: clamp(1rem, 0vw, 1.2rem);
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
import { getContactLinks } from '~/utils/ts/contact_link'

const contactLinks = ref({})

onMounted(async () => {
  contactLinks.value = await getContactLinks()
})

const {locale} = useI18n()

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