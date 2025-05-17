<template>
  <div>
    <div class="home_01_banner">
      <div class="home_01_banner_background">
        <div class="cover-image__tag">{{ $t('home.banner.tag') }}</div>
        <div class="cover-image__title">{{ $t('home.banner.title_before') }}<span>{{ $t('home.banner.title_span') }}</span></div>
        <div class="cover-image__subtitle">{{ $t('home.banner.subtitle') }}</div>
        <button class="cover-image__button"><a :href="contactLinks.CustomerService" target="_blank">{{ $t('home.banner.button')}}</a>
        </button>
      </div>
    </div>
    <div class="home_tag_icons">
      <div v-for="item in items" :key="item.id">
        <img :src="item.imageUrl" :alt="item.title" class="home_tag_icon__item">
        <p>{{ $t(item.titleKey) }}</p>
      </div>
    </div>
    <div v-if="!isMobile" class="home_02_banner">
      <div class="home_02_banner_background">
        <div class="home_02_banner__tag">
          <div class="home_02_banner__left">
            <div class="home_02_banner__tag__title">
              <div>{{ $t('home.features[0].before') }}<span>{{ $t('home.features[0].highlight') }}</span>{{ $t('home.features[0].after') }}<br/></div>
              <div><span>{{ $t('home.features[1].highlight1') }}</span>{{ $t('home.features[1].mid') }}<span>{{ $t('home.features[1].highlight2') }}</span>{{ $t('home.features[1].after') }}<br/></div>
              <div>{{ $t('home.features[2].before') }}<span>{{ $t('home.features[2].highlight') }}</span>{{ $t('home.features[2].after') }}<br/></div>
              <div>{{ $t('home.features[3].text') }}<br/></div>
              <div><span>{{ $t('home.features[4].highlight') }}</span>{{ $t('home.features[4].after') }}<br/></div>
              <div>{{ $t('home.features[5].text') }}<br/></div>
              <div class="home_02_banner__left__btn">
                <div class="cire"></div>
                <a :href="contactLinks.CustomerService" style="text-decoration: none">
                  <div class="contact_btn">{{ $t('home.features[6].btn') }}</div>
                </a>
              </div>
            </div>
          </div>
          <div class="home_02_banner__right">
            <div class="home_02_banner__tag__icons"><img v-for="i in 5" :key="i"
                                                         src=" /assets/IMG/icons/start.png"
                                                         alt="start"/></div>
          </div>
        </div>
        <div class="home_02_banner_footer__title">
          <div v-if="isMobile==false" class="icon_cloud"><img src=" /assets/IMG/icons/cloud.png" alt=""/></div>
          <div class="content_flex">
            <div>{{ $t('home.features[7].title') }}</div>
            <div>{{ $t('home.features[7].title1') }}</div>
            <div>{{ $t('home.features[7].title2') }}</div>
            <div>{{ $t('home.features[7].title3') }}</div>
          </div>
          <div v-if="isMobile==false" class="icon_cloud"><img src=" /assets/IMG/icons/cloud.png" alt=""/></div>
        </div>
      </div>

    </div>
    <div v-if="isMobile">
      <div class="home_02_banner">
        <div class="home_02_banner_background">
        </div>
      </div>
      <div class="home_02_banner__tag__title">
        <div>{{ $t('home.features[0].before') }}<span>{{ $t('home.features[0].highlight') }}</span>{{ $t('home.features[0].after') }}<br/></div>
        <div><span>{{ $t('home.features[1].highlight1') }}</span>{{ $t('home.features[1].mid') }}<span>{{ $t('home.features[1].highlight2') }}</span>{{ $t('home.features[1].after') }}<br/></div>
        <div>{{ $t('home.features[2].before') }}<span>{{ $t('home.features[2].highlight') }}</span>{{ $t('home.features[2].after') }}<br/></div>
        <div>{{ $t('home.features[3].text') }}<br/></div>
        <div><span>{{ $t('home.features[4].highlight') }}</span>{{ $t('home.features[4].after') }}<br/></div>
        <div>{{ $t('home.features[5].text') }}<br/></div>
        <div class="home_02_banner__left__btn">
          <div class="contact_btn"><a :href="contactLinks.CustomerService" target="_blank">{{ $t('home.features[6].btn') }}</a></div>
          <div class="cire"></div>
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="home_03_register">
      <div class="home_03_register__title">
        {{ $t('home.register.title') }}
        <span>/PROCESS</span></div>
      <div class="home_03_register__bg">
        <div class="h_03_r_b_content">
          <div class="h_03_r_b_content__box">
            <div class="h_03_r_b_content__title__box">
              <div class="h_03_r_b_content__title__icons"><img src=" /assets/IMG/icons/information.png"
                                                               alt="jiutu"/></div>
              <div class="h_03_r_b_content__title__h2">{{ $t('home.register.steps[0].title') }}</div>
            </div>
            <div class="h_03_r_b_content__mini_box">
              <div class="corner top-left"></div>
              <div class="corner bottom-right"></div>
              <div class="mini_box_content">
                <div>{{ $t('home.register.steps[0].desc[0]') }}</div>
                <div>{{ $t('home.register.steps[0].desc[1]') }}</div>
                <div class="connect_icons">
                  <div class="connect_icons__flex">
                    <img src="/assets/IMG/icons/tg_white_bg.png" alt="tg"/>
                    <img src="/assets/IMG/icons/phone_white_bg.png" alt="phone"/>
                    <img src="/assets/IMG/icons/facebook_white_bg.png" alt="facebook"/>
                    <img src="/assets/IMG/icons/wechat_white_bg.png" alt="wechat"/>
                    <img src="/assets/IMG/icons/email_white_bg.png" alt="email"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h_03_r_b_content__box">
            <div class="h_03_r_b_content__title__box">
              <div class="h_03_r_b_content__title__icons"><img src=" /assets/IMG/icons/CustomerS.png"
                                                               alt="jiutu"/></div>
              <div class="h_03_r_b_content__title__h2">{{ $t('home.register.steps[1].title') }}</div>
            </div>
            <div class="h_03_r_b_content__mini_box">
              <div class="corner top-left"></div>
              <div class="corner bottom-right"></div>
              <div class="mini_box_content">
                <div>{{ $t('home.register.steps[1].desc[0]') }}</div>
                <div>{{ $t('home.register.steps[1].desc[1]') }}</div>
              </div>
            </div>
          </div>
          <div class="h_03_r_b_content__box">
            <div class="h_03_r_b_content__title__box">
              <div class="h_03_r_b_content__title__icons"><img style="width: 4.5rem;height: 4.5rem;margin-left: 6px;"
                                                               src=" /assets/IMG/icons/Register.png"
                                                               alt="jiutu"/></div>
              <div class="h_03_r_b_content__title__h2">{{ $t('home.register.steps[2].title') }}</div>
            </div>
            <div class="h_03_r_b_content__mini_box">
              <div class="corner top-left"></div>
              <div class="corner bottom-right"></div>
              <div class="mini_box_content">
                <div>{{ $t('home.register.steps[2].desc[0]') }}</div>
                <div>{{ $t('home.register.steps[2].desc[1]') }}</div>
                <div class="connect_icons">
                  <div class="connect_icons__flex">
                    <img src=" /assets/IMG/icons/wechat_white_bg.png" alt="wechat"/>
                    <img src=" /assets/IMG/icons/paypal.png" alt="paypal"/>
                    <img src=" /assets/IMG/icons/corporate.png" alt="corporate"/>
                    <img src=" /assets/IMG/icons/usd.png" alt="usd"/>
                    <img src=" /assets/IMG/icons/usdt.png" alt="usdt"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="home_03_register_mobile">
      <div class="home_03_register__title">
        {{ $t('home.register.title') }}
        <span>/PROCESS</span></div>
      <div class="home_03_register_mobile__bg">
        <div class="register-section">
          <div class="register-box">
            <div class="register-icon-border">
              <div class="register-icon"><img src="/assets/IMG/icons/information.png" alt="联系客户经理"/></div>
            </div>
            <div>
              <div class="register-title">{{ $t('home.register.steps[0].title') }}</div>
              <div class="register-desc">{{ $t('home.register.steps[0].desc[0]') }}<br/>{{ $t('home.register.steps[0].desc[1]') }}</div>
              <div class="register-icons">
                <img src="/assets/IMG/icons/tg_white_bg.png" alt="Telegram"/>
                <img src="/assets/IMG/icons/phone_white_bg.png" alt="Phone"/>
                <img src="/assets/IMG/icons/facebook_white_bg.png" alt="Facebook"/>
                <img src="/assets/IMG/icons/wechat_white_bg.png" alt="WeChat"/>
                <img src="/assets/IMG/icons/email_white_bg.png" alt="Email"/>
              </div>
            </div>
          </div>
          <div class="register-box2">
            <div class="register-icon-border">
              <div class="register-icon"><img src="/assets/IMG/icons/CustomerS.png" alt="沟通需求配置"/></div>
            </div>
            <div>
              <div class="register-title">{{ $t('home.register.steps[1].title') }}</div>
              <div class="register-desc">{{ $t('home.register.steps[1].desc[0]') }}<br/>{{ $t('home.register.steps[1].desc[1]') }}</div>
              <div class="register-graph">
                <div class="audio-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <!--            <img src="/public/assets/IMG/icons/bar-graph.png" alt="图表" />-->
              </div>
            </div>
          </div>
          <div class="register-box">
            <div class="register-icon-border">
              <div class="register-icon"><img src="/assets/IMG/icons/Register.png" alt="极速开户"/></div>
            </div>
            <div>
              <div class="register-title">{{ $t('home.register.steps[2].title') }}</div>
              <div class="register-desc">{{ $t('home.register.steps[2].desc[0]') }}<br/>{{ $t('home.register.steps[2].desc[1]') }}</div>
              <div class="register-icons">
                <img src="/assets/IMG/icons/wechat_white_bg.png" alt="WeChat"/>
                <img src="/assets/IMG/icons/paypal.png" alt="PayPal"/>
                <img src="/assets/IMG/icons/corporate.png" alt="Corporate"/>
                <img src="/assets/IMG/icons/usd.png" alt="USD"/>
                <img src="/assets/IMG/icons/usdt.png" alt="USDT"/>
              </div>
            </div>
          </div>
        </div>

        <div class="advantages-title">{{ $t('home.advantages.title') }} <span>/ADVANTAGES</span></div>
        <div class="advantages-list">
          <div class="adv-item">
            <img src="/assets/IMG/icons/fast-signup.png" alt="注册"/>
            <div class="adv-text">{{ $t('home.advantages.item[0]') }}</div>
            <div class="bars">
              <span style="height: 10px"></span>
              <span style="height: 20px"></span>
              <span style="height: 30px"></span>
            </div>
          </div>
          <div class="adv-item">
            <img src="/assets/IMG/icons/discount-promo.png" alt="折扣"/>
            <div class="adv-text">{{ $t('home.advantages.item[1]') }}</div>
            <div class="bars">
              <span style="height: 10px"></span>
              <span style="height: 20px"></span>
              <span style="height: 30px"></span>
            </div>
          </div>
          <div class="adv-item">
            <img src="/assets/IMG/icons/instant-payment.png" alt="账单"/>
            <div class="adv-text">{{ $t('home.advantages.item[2]') }}</div>
            <div class="bars">
              <span style="height: 10px"></span>
              <span style="height: 20px"></span>
              <span style="height: 30px"></span>
            </div>
          </div>
          <div class="adv-item">
            <img src="/assets/IMG/icons/oem-tech.png" alt="服务"/>
            <div class="adv-text">{{ $t('home.advantages.item[3]') }}</div>
            <div class="bars">
              <span style="height: 10px"></span>
              <span style="height: 20px"></span>
              <span style="height: 30px"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_04_Advantages">
      <div class="home_03_register__title">
        {{ $t('home.advantages.title') }}
        <span>/ADVANTAGES</span></div>
      <div class="home_04_Advantages__bg">
        <div class="home_04_Advantages__left_box">
          <div class="logo_icon"><img src=" /assets/IMG/logos/jiutu_logo_white.png" alt="jiutu"></div>
          <div class="zhu_icon"><img src=" /assets/IMG/icons/5zhu.png" alt="jiutu"></div>
        </div>
        <div class="home_04_Advantages__right_box">
          <div class="home_04_Advantages__right_mini_box">
            <div class="home_04_Advantages__right_mini_box_h2">
              <div class="home_04_Advantages__right_box_mini_box_icon"><img
                  src=" /assets/IMG/icons/fast-signup.png" alt="jiutu"></div>
              <div class="home_04_Advantages__right_mini_box_title">
                <div class="home_04_Advantages__right_mini_box_title_h2">{{ $t('home.advantages.details[0].title') }}</div>
                <div class="home_04_Advantages__right_mini_box_title_content">{{ $t('home.advantages.details[0].subtitle') }}
                </div>
              </div>
            </div>
            <div class="home_04_Advantages__right_mini_box_content">{{ $t('home.advantages.details[0].desc') }}</div>
            <div class="home_04_Advantages__right_mini_box_h2" style="margin-top:24%">
              <div class="home_04_Advantages__right_box_mini_box_icon"><img
                  src=" /assets/IMG/icons/discount-promo.png" style="margin: 6%" alt="jiutu"></div>
              <div class="home_04_Advantages__right_mini_box_title">
                <div class="home_04_Advantages__right_mini_box_title_h2">{{ $t('home.advantages.details[1].title') }}</div>
                <div class="home_04_Advantages__right_mini_box_title_content">{{ $t('home.advantages.details[1].subtitle') }}
                </div>
              </div>
            </div>
            <div class="home_04_Advantages__right_mini_box_content">{{ $t('home.advantages.details[1].desc') }}</div>

          </div>
          <div class="home_04_Advantages__right_mini_box">
            <div class="home_04_Advantages__right_mini_box_h2" style="margin-top: 1rem;">
              <div class="home_04_Advantages__right_box_mini_box_icon"><img
                  src=" /assets/IMG/icons/instant-payment.png" style="margin-left: 5%" alt="jiutu"></div>
              <div class="home_04_Advantages__right_mini_box_title">
                <div class="home_04_Advantages__right_mini_box_title_h2">{{ $t('home.advantages.details[2].title') }}</div>
                <div class="home_04_Advantages__right_mini_box_title_content">{{ $t('home.advantages.details[2].subtitle') }}
                </div>
              </div>
            </div>
            <div class="home_04_Advantages__right_mini_box_content">{{ $t('home.advantages.details[2].desc') }}</div>
            <div class="home_04_Advantages__right_mini_box_h2" style="margin-top:24%">
              <div class="home_04_Advantages__right_box_mini_box_icon"><img
                  src=" /assets/IMG/icons/oem-tech.png" style="margin: 6%" alt="jiutu"></div>
              <div class="home_04_Advantages__right_mini_box_title">
                <div class="home_04_Advantages__right_mini_box_title_h2">{{ $t('home.advantages.details[3].title') }}</div>
                <div class="home_04_Advantages__right_mini_box_title_content">{{ $t('home.advantages.details[3].subtitle') }}
                  services
                </div>
              </div>
            </div>
            <div class="home_04_Advantages__right_mini_box_content">{{ $t('home.advantages.details[3].desc') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_05_choose">
      <div class="home_03_register__title">
        {{ $t('home.why.title') }}
        <span>/ALIBABA</span></div>
      <div class="features">
        <div class="feature-item">
          <span class="dot"></span>
          <div class="feature-content">
            <h4>{{ $t('home.why.items[0].title') }}</h4>
            <p>{{ $t('home.why.items[0].desc') }}</p>
          </div>
        </div>

        <div class="feature-item">
          <span class="dot"></span>
          <div class="feature-content">
            <h4>{{ $t('home.why.items[1].title') }}</h4>
            <p>{{ $t('home.why.items[1].desc') }}</p>
          </div>
        </div>

        <div class="feature-item">
          <span class="dot"></span>
          <div class="feature-content">
            <h4>{{ $t('home.why.items[2].title') }}</h4>
            <p>{{ $t('home.why.items[2].desc') }}</p>
          </div>
        </div>

        <div class="feature-item">
          <span class="dot"></span>
          <div class="feature-content">
            <h4>{{ $t('home.why.items[3].title') }}</h4>
            <p>{{ $t('home.why.items[3].desc') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home_06_Activity">
      <div class="home_03_register__title">
        {{ $t('home.why.title') }}
        <span>/DISCOUNT</span></div>
      <div class="home_06_Activity__bg">
        <div class="content-wrapper">
          <!-- 左上文案区 -->
          <div class="text-area">
            <h1>{{ $t('home.why.subtitle') }}</h1>
            <div class="tags">
              <span>{{ $t('home.why.tags[0]') }}</span>
              <span>{{ $t('home.why.tags[1]') }}</span>
              <span>{{ $t('home.why.tags[2]') }}</span>
            </div>
            <p>{{ $t('home.why.desc') }}</p>
          </div>

          <!-- 优惠卡片 -->
          <div v-if="!isMobile" class="coupon-area">
            <CouponCard :amount="100" :discount="10"/>
            <CouponCard :amount="500" :discount="50"/>
            <CouponCard :amount="1000" :discount="150"/>
            <CouponCard :amount="2000" :discount="300"/>
          </div>
          <div v-if="isMobile" class="coupon-area">
            <div>
              <CouponCard :amount="100" :discount="10"/>
              <CouponCard :amount="500" :discount="50"/>
            </div>
            <div>
              <CouponCard :amount="1000" :discount="150"/>
              <CouponCard :amount="2000" :discount="300"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_07_Case">
      <div class="home_03_register__title">
        成功案例
        <span>/CASE</span></div>
      <div class="home_07_Case__box">
        <CompanyCard
            v-for="(company, index) in companies"
            :key="index"
            :img-src="company.imgSrc"
            :title="company.title"
            :description="company.description"
            :link="company.link"
        />
      </div>
    </div>

    <!-- 内容会自动嵌入布局 -->
  </div>
</template>
<script setup lang="ts">
import CouponCard from '../components/layout/ui/CouponCard.vue'
import CompanyCard from '../components/layout/ui/CompanyCard.vue'
import {ref, onMounted, onBeforeUnmount} from 'vue'
import {contactLinks as contactLinksRaw} from '../public/js/contact_link.js'

const contactLinks = contactLinksRaw

const companies = [
  {
    imgSrc: '/assets/IMG/logos/amused-logo.jpg',
    title: 'Amused Group',
    description: 'Amused Group 是一家文化创意产业公司。它主要经营两个领域：创意活动和实体产品。Amused Group 旗下共有四家公司，分别是 Amused Style、Amused Life、Amused Art 和 Amused Touch。它的最终目标是成为可与 Disney 匹敌的文化商业帝国。',
    link: '/CaseStudies/amused-group'
  },
  {
    imgSrc: '/assets/IMG/logos/blue-map-logo.jpg',
    title: '蔚蓝地图',
    description: '蔚蓝地图是公众环境研究中心开发的一款环保APP，囊括实时空气信息、全国空气质量地图、水质地图和污染源地图，旨在为公众提供方便快捷的环境信息服务。通过蔚蓝地图APP至今已经推动超过450家污染企业反馈整改。',
    link: '/CaseStudies/bluemap'
  }
]
// 声明响应式数组
const items = computed(() => [
  {
    id: 1,
    imageUrl: '/assets/IMG/icons/fast-signup.png',
    titleKey: 'home.highlights.list.0'
  },
  {
    id: 2,
    imageUrl: '/assets/IMG/icons/instant-payment.png',
    titleKey: 'home.highlights.list.1'
  },
  {
    id: 3,
    imageUrl: '/assets/IMG/icons/discount-promo.png',
    titleKey: 'home.highlights.list.2'
  },
  {
    id: 4,
    imageUrl: '/assets/IMG/icons/oem-tech.png',
    titleKey: 'home.highlights.list.3'
  }
])


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
<style scoped>
a {
  text-decoration: none;
}

.home_01_banner {
  display: flex;
  justify-content: center;
  width: clamp(65%, 65%, 75%);
  height: clamp(100px, calc(400px + 10vh), 600px);
  margin: 0 auto;
}

.home_01_banner_background {
  margin-top: 1px;
  width: 100%;
  height: 100%;
  background: url(" /assets/IMG/backgrounds/home_01.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.cover-image__tag {
  border-top: 5px solid white;
  color: #fff;
  position: absolute;
  width: 28%;
  font-size: 1.5rem;
  font-weight: 550;
  letter-spacing: 0.1em;
  top: 10%;
  left: 5%;
}

.cover-image__title {
  width: 100%;
  position: absolute;
  color: black;
  font-size: clamp(30px, 3vw, 3rem);
  font-weight: bold;
  top: 45%;
  left: 5%;
}

.cover-image__title span {
  margin-left: 3%;
}

.cover-image__subtitle {
  width: 100%;
  position: absolute;
  top: 59%;
  left: 5%;
  color: #525b64;
}

.cover-image__button {
  position: absolute;
  top: 70%;
  left: 5%;
  background: #fff;
  color: #feb001;
  border: none;
  width: 12%;
  height: 35px;
  cursor: pointer;
  font-size: 1rem;
}

.cover-image__button a {
  color: #feb001;
}

.cover-image__button:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  box-sizing: border-box;
  transform: translateX(100%);
}

.cover-image__button:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  box-sizing: border-box;
  transform: translateX(-100%);
}

.cover-image__button:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.cover-image__button:hover:before {
  border-color: #666;
  height: 100%;
  transform: translateX(0);
  transition: .3s transform linear, .3s height linear .3s;
}

.cover-image__button:hover:after {
  border-color: #666;
  height: 100%;
  transform: translateX(0);
  transition: .3s transform linear, .3s height linear .5s;
}

.home_tag_icons {
  display: flex;
  justify-content: center;
  margin-top: 2%;
  gap: clamp(1rem, 6vw, 10em);
}

.home_tag_icon__item {
  background: #feb001;
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  padding: 5px;
}

.home_02_banner {
  display: flex;
  justify-content: center;
  width: clamp(65%, 65%, 65%);
  height: clamp(300px, calc(350px + 10vh), 600px);
  margin: 0 auto;
}

.home_02_banner_background {
  background: url(" /assets/IMG/backgrounds/home_02.jpg") no-repeat;
  width: 100%;
  height: 100%;
  margin-top: 7%;
  background-size: 100% 100%;
  position: relative;

}

.home_02_banner__tag {
  color: #f7f7f6;
  text-align: right;
  display: flex;
  width: 100%;
}

.home_02_banner__left {
  border-right: 2px solid white;
  padding-right: 2%;
  position: absolute;
  right: 5%;
  top: 20%;
  bottom: 20%;
}

.home_02_banner__tag__title {
  display: flex;
  flex-direction: column; /* 竖排 */
  justify-content: space-between; /* 均分间距 */
  height: 100%;
}

.home_02_banner__tag__title span {
  color: #feb001;
}

.home_02_banner__right {
  position: absolute;
  right: 1.5%;
  top: 20%;
  bottom: 20%;
}

.home_02_banner__tag__icons {
  display: flex;
  flex-direction: column; /* 竖排 */
  justify-content: space-between; /* 均分间距 */
  height: 100%;
}

.home_02_banner__tag__icons img {
  width: 2rem;
  height: 2rem;
}

.home_02_banner__left__btn {
  display: flex;
  gap: 1rem;
  justify-content: right;
  height: 20%;
  margin-top: 10%;
}

.cire {
  background: #feb001;
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
}

.contact_btn {
  background: #feb001;
  color: #fff;
  width: 7rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  border-radius: 2rem;
  cursor: pointer;
}

.contact_btn a {
  color: #fff;
}

.home_02_banner_footer__title {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2.5rem;
  color: white;
  font-size: 1.2rem;
  position: absolute;
  bottom: 2%;
}

.icon_cloud img {
  width: 2rem;
  height: 2rem;
}

.content_flex {
  display: flex;
  justify-content: center;
  gap: 1.7rem;
}

.home_03_register {
  margin: 12% auto 0 auto;
  width: clamp(65%, 65%, 65%);
  height: clamp(200px, calc(200px + 10vh), 300px);
}

.home_03_register__title {
  font-size: clamp(22px, 2.2vw, 3rem);
  font-weight: 550;
}

.home_03_register__title span {
  margin-left: 2%;
  font-size: clamp(14px, 1.5vw, 3rem);
  color: #feb001;
  letter-spacing: 2px;
}

.home_03_register__bg {
  background: #feb001;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.h_03_r_b_content {
  display: flex;
  justify-content: center;
  gap: clamp(0rem, 5vw, 8rem);
}

.h_03_r_b_content__title__box {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.h_03_r_b_content__title__icons {
  background: white;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
}

.h_03_r_b_content__title__icons img {
  width: 100%;
  height: 100%;
}

.h_03_r_b_content__title__h2 {
  font-size: clamp(14px, 1.3vw, 2rem);
  height: 5rem;
  line-height: 5rem;
}

.h_03_r_b_content__mini_box {
  display: flex;
  flex-direction: column; /* 竖排 */
  position: relative;
  padding: 15px;
  margin: 14% auto 0 auto;
  height: 53%;
  width: 105%;
}

.corner {
  position: absolute;
  width: 2rem;
  height: 2rem;
  border: 2px solid white;
}

.top-left {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.bottom-right {
  bottom: 0;
  right: 0;
  border-top: none;
  border-left: none;
}

.mini_box_content {
  text-align: center;
}

.connect_icons__flex {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
}

.connect_icons__flex img {
  width: 3rem;
  height: 3rem;
  color: white;
}

.home_04_Advantages {
  margin: 12% auto 0 auto;
  width: clamp(65%, 65%, 65%);
  height: 500px;
}

.home_04_Advantages__bg {
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: #feb001;
  display: flex;
  justify-content: center;
  gap: 5rem;
}

.logo_icon img {
  width: 8rem;
  height: 8rem;
  margin-left: 20%;
}

.home_04_Advantages__right_box {
  background: white;
  border-radius: 25px;
  width: 70%;
  height: 100%;
  //padding: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2% 0 6%;
}

.zhu_icon img {
  width: 14rem;
  height: 14rem;
  margin-top: 40%;
}

.home_04_Advantages__right_mini_box {

}

.home_04_Advantages__right_mini_box_h2 {
  display: flex;
  height: 4rem;
}

.home_04_Advantages__right_box_mini_box_icon {
  width: 4rem;
  height: 4rem;
  background: #feb001;
  border-radius: 100%;
}

.home_04_Advantages__right_box_mini_box_icon img {
  width: 90%;
  height: 90%;
  margin-left: 7%;
}

.home_04_Advantages__right_mini_box_title {
  padding-top: 4%;
  padding-left: 5%;
}

.home_04_Advantages__right_mini_box_title_content {
  font-size: clamp(10px, 0.55vw, 1rem);
  color: #585555fc;
}

.home_04_Advantages__right_mini_box_title_h2 {
  font-size: clamp(14px, 1vw, 2rem);
}

.home_04_Advantages__right_mini_box_content {
  margin-top: 3%;
  width: 90%;
  font-size: clamp(10px, 0.8vw, 2rem);
  color: #585555fc;
}

.home_05_choose {
  margin: 12% auto 0 auto;
  width: clamp(65%, 65%, 65%);
}

.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 72px;
  padding: 0 0 0 5%;
  width: 100%;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-top: 10%;
  width: 80%;
}

.dot {
  width: clamp(0.7rem, 1.2vw, 2rem);
  height: clamp(0.7rem, 1.2vw, 2rem);
  background-color: orange;
  border-radius: 50%;
  margin-top: 6px;
  margin-right: 12px;
  flex-shrink: 0;
}

.feature-content h4 {
  margin: 0 0 8px;
  font-size: clamp(1rem, 1.2vw, 2rem);
  font-weight: 500;
}

.feature-content p {
  margin: 0;
  font-size: clamp(12px, 0.9vw, 1rem);

  color: #555;
  line-height: 1.6;
}

.home_06_Activity {
  margin: 9% auto 0 auto;
  width: clamp(65%, 65%, 65%);
  height: 400px;
}

.home_06_Activity__bg {
  width: 100%;
  height: 100%;
  background: url(' /assets/IMG/backgrounds/home_06.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  position: absolute;
  top: 10%;
  left: 0;
  padding: 40px;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 左上角文本 */
.text-area h1 {
  font-size: clamp(1.6rem, 3vw, 3rem);
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
}

.text-area .tags {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.text-area .tags span {
  background-color: #000;
  color: #a8a7a7;
  padding: 4px 10px;
  border-radius: 16px;
  font-size: clamp(13px, 1vw, 1rem);
  width: 3.5rem;
  height: 2rem;
}

.text-area p {
  font-size: 14px;
  color: #f0f0f0;
}

/* 优惠券区域 */
.coupon-area {
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3%;
}

.home_07_Case {
  margin: 12% auto 12% auto;
  width: clamp(65%, 65%, 65%);
  height: 500px;
}

.home_07_Case__box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 2%;
}

@media (max-width: 768px) {
  .features {
    grid-template-columns: 1fr;
  }

  .home_01_banner {
    width: 100%;
    height: 383px;
  }

  .home_01_banner_background {
    margin-top: 1px;
    width: 100%;
    height: 383px;
    background: url(" /assets/IMG/backgrounds/home_01_Android.jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
    padding-left: 5%;
  }

  .cover-image__title {
    position: relative;
    left: 0;
  }

  .cover-image__title span {
    display: block;
    margin-left: 0;
  }

  .cover-image__subtitle {
    position: relative;
    left: 0;
    top: 50%;
    font-size: 0.7rem;
  }

  .cover-image__tag {
    border-top: 2px solid white;
    color: #fff;
    position: absolute;
    width: 51%;
    font-size: 1rem;
  }

  .cover-image__button {
    position: absolute;
    top: 79%;
    left: 5%;
    background: #fff;
    color: #feb001;
    border: none;
    width: 20%;
    height: 21px;
    font-size: 0.7rem;
  }

  .home_tag_icons {
    margin: 8% 0 14% 0;
  }

  .home_tag_icons p {
    font-size: 0.8rem;
  }

  .home_tag_icon__item {
    background: #feb001;
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
  }

  .home_02_banner {
    display: block;
    width: 100%;
    height: 210px;
  }

  .home_02_banner_background {
    background-size: 170% 100%;
    background-position: 16% center; /* 向左偏移画面焦点 */
  }

  .home_02_banner_footer__title {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 2.5rem;
    color: white;
    position: absolute;
    bottom: 5%;
  }

  .home_02_banner__tag__title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 15% 5%;
  }

  .home_02_banner__tag__title div {
    line-height: 2;
    font-size: 0.9rem;
    ont-weight: 400;
  }

  .home_02_banner__tag__title span {
    font-size: 1rem;
    font-weight: 500;
  }

  .home_02_banner__left__btn {
    display: flex;
    gap: 1rem;
    justify-content: left;
    height: 20%;
    margin-top: 6%;
  }

  .contact_btn {
    background: #feb001;
    color: #fff;
    width: 6rem;
    height: 2rem;
    text-align: center;
    line-height: 3rem;
    border-radius: 2rem;
    cursor: pointer;
  }

  .content_flex {
    display: flex;
    justify-content: center;
    gap: 0.7rem;
    font-size: 0.7rem;
  }

  .cire {
    background: #feb001;
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
  }

  .home_03_register {
    display: none;
  }

  .home_03_register_mobile__bg {
    background: #feb001;
    padding: 1rem;
  }

  .register-box {
    background: #feb001;
    border: 2px solid white;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #000;
    display: flex;
    justify-content: left;
    gap: 10%;
  }


  .register-title {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  .register-desc {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .register-icon-border {
    width: 6rem;
    height: 6rem;
    border: 2px dashed white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    //margin: 0 auto 0.5rem;
  }

  .register-icon {
    width: 5rem;
    height: 5rem;
    background: white;
    border-radius: 50%;
    display: flex; /* 居中图标 */
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .register-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .audio-bars {
    display: flex;
    align-items: flex-end;
    height: 40px;
    gap: 15px;
  }

  .register-box2 {
    background: #feb001;
    border: 2px solid white;
    border-radius: 12px;
    padding: 1rem 1rem 0 1rem;
    margin-bottom: 1rem;
    color: #000;
    display: flex;
    justify-content: left;
    gap: 10%;
  }

  .audio-bars span {
    display: block;
    width: 7px;
    background: white;
    animation: bounce 1s infinite ease-in-out;
  }

  .audio-bars span:nth-child(1) {
    animation-delay: 0s;
  }

  .audio-bars span:nth-child(2) {
    animation-delay: 0.1s;
  }

  .audio-bars span:nth-child(3) {
    animation-delay: 0.2s;
  }

  .audio-bars span:nth-child(4) {
    animation-delay: 0.3s;
  }

  .audio-bars span:nth-child(5) {
    animation-delay: 0.4s;
  }

  .audio-bars span:nth-child(6) {
    animation-delay: 0.5s;
  }

  .audio-bars span:nth-child(7) {
    animation-delay: 0.6s;
  }

  .audio-bars span:nth-child(8) {
    animation-delay: 0.7s;
  }

  @keyframes bounce {
    0%, 100% {
      height: 20%;
    }
    50% {
      height: 100%;
    }
  }


  .register-icons {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
  }

  .register-icons img {
    width: 35px;
    height: 35px;
  }

  .advantages-title {
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1.3rem;
    padding-left: 0.5rem;
    letter-spacing: 2px;
  }

  .advantages-title span {
    color: white;
    margin-left: 0.5rem;
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: 400;
  }

  .advantages-list {
    margin-top: 1rem;
    background: white;
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .adv-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.6rem;
  }

  .adv-item img {
    width: 45px;
    height: 45px;
    background: orange;
    border-radius: 100%;
    padding: 5px;
  }

  .adv-text {
    font-size: 1.1rem;
    color: #333;
  }

  .bars {
    display: flex;
    align-items: flex-end;
    gap: 0.7rem;
    height: 40px;
    margin-bottom: 16px;
  }

  .bars span {
    width: 15px;
    background-color: orange;
    display: inline-block;
  }

  .home_03_register__title {
    font-weight: 550;
    margin-left: 5%;
  }

  .home_04_Advantages {
    display: none;
  }

  .home_05_choose {
    width: 95%;
  }

  .features {
    gap: 0;
  }

  .dot {
    margin-right: 10px;
  }

  .feature-item {
    width: 100%;
  }

  .feature-content h4 {
    margin: 0 0 8px;
    font-size: clamp(1rem, 1.2vw, 2rem);
    font-weight: 400;
  }

  .home_06_Activity {
    margin: 12% auto 25% auto;
    width: 100%;
    height: 250px;
  }

  .home_06_Activity__bg {
    background: url(' /assets/IMG/backgrounds/home_06_2.jpg') no-repeat center center;
    background-size: 100% 100%;
  }

  .tags {
    display: none !important;
  }

  .content-wrapper {
    top: 0;
    padding: 20px;
  }

  .text-area h1 {
    font-size: clamp(1.6rem, 3vw, 3rem);
    font-weight: bold;
    margin-bottom: 0;
    color: black;
  }

  .text-area p {
    font-size: 11px;
    color: #f0f0f0a8;
  }

  .home_07_Case {
    display: none;
  }
}
</style>