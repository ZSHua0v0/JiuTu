<template>
  <div>
    <div v-if="!isMobile" class="home_06_Activity">
      <div class="home_06_Activity__bg">
        <div :class="[
      'content-wrapper',
      locale === 'en' ? 'content-wrapper_en' : ''
    ]">
          <!-- 左上文案区 -->
          <div class="text-area">
            <h1>{{ $t('ProductPage.activity.title') }}</h1>
            <div class="tags">
              <span :class="locale === 'en' ? 'tags_span_en' : ''">{{ $t('ProductPage.activity.tags[0]') }}</span>
              <span :class="locale === 'en' ? 'tags_span_en' : ''">{{ $t('ProductPage.activity.tags[1]') }}</span>
              <span :class="locale === 'en' ? 'tags_span_en' : ''">{{ $t('ProductPage.activity.tags[2]') }}</span>
            </div>
            <p>{{ $t('ProductPage.activity.desc') }}</p>
          </div>

          <!-- 优惠卡片 -->
          <div class="coupon-area">
            <CouponCard :amount="100" :discount="10"/>
            <CouponCard :amount="500" :discount="50"/>
            <CouponCard :amount="1000" :discount="150"/>
            <CouponCard :amount="2000" :discount="300"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="home_01_banner">
      <div class="home_01_banner_background">
        <div class="cover-image__tag">{{ $t('ProductPage.banner.tag') }}</div>
        <div class="cover-image__title">
          {{ $t('ProductPage.banner.title_before') }}
          <span>{{ $t('ProductPage.banner.title_span') }}</span>
        </div>
        <div class="cover-image__subtitle">{{ $t('ProductPage.banner.subtitle') }}</div>
        <button class="cover-image__button">
          <a :href="contactLinks.CustomerService" target="_blank">
            {{ $t('ProductPage.banner.button') }}
          </a>
        </button>
      </div>
    </div>

    <div class="ProductDetail_02_box">
      <div class="ProductDetail_02_box__title">
        {{ $t('ProductPage.process.title') }}
        <span>{{ $t('ProductPage.process.slash') }}</span>
      </div>
      <div class="ProductDetail_02_box_content">
        <div class="ProductDetail_02_box_content_mini">
          <div class="ProductDetail_02_box_content_mini_box">
            <div class="ProductDetail_02_box_content_mini_box_mini">
              <div class="ProductDetail_02_box_content_mini_box_mini_title">{{ $t('ProductPage.process.steps[0].title') }}</div>
              <div>{{ $t('ProductPage.process.steps[0].desc_cn') }}</div>
              <div>{{ $t('ProductPage.process.steps[0].desc_en') }}</div>
            </div>
          </div>
          <div class="ProductDetail_02_box_content_mini_box __margin_top">
            <div class="ProductDetail_02_box_content_mini_box_mini">
              <div class="ProductDetail_02_box_content_mini_box_mini_title">{{ $t('ProductPage.process.steps[1].title') }}</div>
              <div>{{ $t('ProductPage.process.steps[1].desc_cn') }}</div>
              <div>{{ $t('ProductPage.process.steps[1].desc_en') }}</div>
            </div>
          </div>
          <div class="ProductDetail_02_box_content_mini_box __margin_top">
            <div class="ProductDetail_02_box_content_mini_box_mini">
              <div class="ProductDetail_02_box_content_mini_box_mini_title">{{ $t('ProductPage.process.steps[2].title') }}</div>
              <div>{{ $t('ProductPage.process.steps[2].desc_cn') }}</div>
              <div style="width: 100%">{{ $t('ProductPage.process.steps[2].desc_en') }}</div>
            </div>
          </div>
        </div>
        <div class="ProductDetail_02_box_content_mini2">
          <div class="ProductDetail_02_box_content_mini_box2">
            <div class="ProductDetail_02_box_content_mini_box_mini">
              <div class="ProductDetail_02_box_content_mini_box_mini_title">{{ $t('ProductPage.process.steps[3].title') }}</div>
              <div>{{ $t('ProductPage.process.steps[3].desc_cn') }}</div>
              <div>{{ $t('ProductPage.process.steps[3].desc_en') }}</div>
            </div>
          </div>
          <div class="ProductDetail_02_box_content_mini_box2 __margin_top">
            <div class="ProductDetail_02_box_content_mini_box_mini">
              <div class="ProductDetail_02_box_content_mini_box_mini_title">{{ $t('ProductPage.process.steps[4].title') }}</div>
              <div>{{ $t('ProductPage.process.steps[4].desc_cn') }}</div>
              <div>{{ $t('ProductPage.process.steps[4].desc_en') }}</div>
            </div>
          </div>
          <div class="ProductDetail_02_box_content_mini_box2 __margin_top">
            <div class="ProductDetail_02_box_content_mini_box_mini">
              <div class="ProductDetail_02_box_content_mini_box_mini_title">{{ $t('ProductPage.process.steps[5].title') }}</div>
              <div>{{ $t('ProductPage.process.steps[5].desc_cn') }}</div>
              <div>{{ $t('ProductPage.process.steps[5].desc_en') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!isMobile" class="ProductDetail_03_box">
      <div class="ProductDetail_02_box__title __border_bottom">
        {{ $t('ProductPage.products.title') }}
        <span>{{ $t('ProductPage.products.slash') }}</span>
      </div>
      <div class="product-offers">
        <div class="offer-card" v-for="(offer, index) in offers" :key="index">
          <img :src="offer.icon" alt="icon" class="icon"/>
          <div :class="index === 3 ? '__border0' : '__border_right'">
            <h2 class="title">{{ offer.title }}</h2>
            <p class="price">{{ offer.price }}</p>
            <ul class="features">
              <li v-for="(feature, i) in offer.features" :key="i">
                <img src="/assets/IMG/icons/check.png" class="check-icon"/> {{ feature }}
              </li>
            </ul>
            <button class="contact-btn">
              <a :href="contactLinks.CustomerService" target="_blank">
                <div style="width: 100%">{{ $t('ProductPage.products.contact') }}</div>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMobile" class="ProductDetail_03_box">
      <div class="ProductDetail_02_box__title __border_bottom">
        {{ $t('ProductPage.products.title') }}
        <span>{{ $t('ProductPage.products.slash') }}</span>
      </div>
      <div class="product-offers">
        <div class="offer-card" v-for="(offer, index) in offers" :key="index">
          <div class="offer-card-mini-top">
            <h2 class="title">{{ offer.title }}</h2>
            <div style="display: flex;justify-content: space-between;align-items: center">
              <p class="price">{{ offer.price }}</p>
              <img src="/assets/IMG/icons/arrow.png" alt="jiutu"/>
            </div>
          </div>
          <div class="offer-card-mini">
            <img :src="offer.icon" alt="icon" class="icon"/>
            <div :class="index === 3 ? '__border0' : '__border_right'">
              <div class="features">
                <div v-for="(feature, i) in offer.features" :key="i">
                  <img src="/assets/IMG/icons/check.png" class="check-icon"/> {{ feature }}
                </div>
              </div>
              <button class="contact-btn">
                <a :href="contactLinks.CustomerService" target="_blank">
                  <div style="width: 100%">{{ $t('ProductPage.products.contact') }}</div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>

import CouponCard from "~/components/layout/ui/CouponCard.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import { getContactLinks } from '~/utils/ts/contact_link'
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta()
const contactLinks = ref({})

onMounted(async () => {
  contactLinks.value = await getContactLinks()
})

import {useI18n} from "vue-i18n";
const { t } = useI18n()

const offers = [
  {
    icon: '/assets/IMG/icons/db.png',
    title: t('ProductPage.products.list.0.title'),
    price: t('ProductPage.products.list.0.price'),
    features: [
      t('ProductPage.products.list.0.features.0'),
      t('ProductPage.products.list.0.features.1'),
      t('ProductPage.products.list.0.features.2'),
      t('ProductPage.products.list.0.features.3'),
      t('ProductPage.products.list.0.features.4')
    ]
  },
  {
    icon: '/assets/IMG/icons/cloud1.png',
    title: t('ProductPage.products.list.1.title'),
    price: t('ProductPage.products.list.1.price'),
    features: [
      t('ProductPage.products.list.1.features.0'),
      t('ProductPage.products.list.1.features.1'),
      t('ProductPage.products.list.1.features.2'),
      t('ProductPage.products.list.1.features.3')
    ]
  },
  {
    icon: '/assets/IMG/icons/wifi.png',
    title: t('ProductPage.products.list.2.title'),
    price: t('ProductPage.products.list.2.price'),
    features: [
      t('ProductPage.products.list.2.features.0'),
      t('ProductPage.products.list.2.features.1'),
      t('ProductPage.products.list.2.features.2')
    ]
  },
  {
    icon: '/assets/IMG/icons/shield.png',
    title: t('ProductPage.products.list.3.title'),
    price: t('ProductPage.products.list.3.price'),
    features: [
      t('ProductPage.products.list.3.features.0'),
      t('ProductPage.products.list.3.features.1'),
      t('ProductPage.products.list.3.features.2'),
      t('ProductPage.products.list.3.features.3')
    ]
  }
]
const isMobile = ref(false)

function checkIsMobile() {
  isMobile.value = window.innerWidth <= 768
}
const { locale } = useI18n()

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIsMobile)
})
</script>

<style scoped>
.tags_span_en{
  width: 5.5rem !important;
}
.content-wrapper_en {
  position: absolute;
  top: -6% !important;
  left: 0;
  padding: 40px;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex
;
  flex-direction: column;
  justify-content: space-between;
}
a {
  text-decoration: none;
}

.cover-image__button a {
  color: #feb001;
}

.home_06_Activity {
  margin: 0 auto 0 auto;
  width: clamp(65%, 65%, 65%);
  height: 400px;
}

.home_06_Activity__bg {
  width: 100%;
  height: 100%;
  background: url('/assets/IMG/backgrounds/home_06.jpg') no-repeat center center;
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
  font-size: clamp(1rem, 3vw, 3rem);
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

.ProductDetail_02_box {
  width: clamp(65%, 65%, 65%);
  margin: 8% auto 10% auto;
}

.ProductDetail_02_box__title {
  font-size: clamp(24px, 2.2vw, 3rem);
  font-weight: 550;
}

.ProductDetail_02_box__title span {
  margin-left: 2%;
  font-size: clamp(17px, 1.5vw, 3rem);
  color: #feb001;
  letter-spacing: 2px;
}

.ProductDetail_02_box_content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.ProductDetail_02_box_content_mini {
  width: 47%;
}

.ProductDetail_02_box_content_mini_box {
  background: #ffefd5;
  border-radius: 10px;
  padding: 4% 2% 4% 10%;
}

.ProductDetail_02_box_content_mini_box_mini {
  border-left: #feb001 solid 3px;
  padding-left: 5%;
  color: #505050;
}

.ProductDetail_02_box_content_mini_box_mini div {
  width: 95%;
  font-size: 14px;
}

.ProductDetail_02_box_content_mini_box2 {
  background: #e7e7e7;
  border-radius: 10px;
  padding: 4% 2% 4% 10%;
}

.ProductDetail_02_box_content {
  margin-top: 5%;
}

.__margin_top {
  margin-top: 5%;
}

.__border0 {
  border: none;
}

.ProductDetail_02_box_content_mini_box_mini_title {
  font-size: clamp(17px, 1.2vw, 3rem) !important;
  margin-bottom: 2%;
  color: black;
}

.ProductDetail_02_box_content_mini2 {
  display: flex;
  flex-direction: column; /* 竖排 */
  justify-content: space-between; /* 均分间距 */
  width: 47%;
}

.ProductDetail_03_box {
  width: clamp(65%, 65%, 65%);
  margin: 8% auto 10% auto;
}

.__border_bottom {
  border-bottom: 3px solid #feb001;
}

.product-offers {
  display: flex;
  justify-content: center;
  margin-top: 5%;
  //padding: 20px;
}

.offer-card {
  width: 25%;
  border-radius: 8px;
  text-align: center;
  position: relative;
}

.icon {
  width: 5rem;
  height: 5rem;
  margin-bottom: 10px;
}

.title {
  font-size: clamp(15px, 1vw, 3rem);
  font-weight: 400;
  margin-bottom: 1.5rem;
}

.price {
  color: #f90;
  font-size: clamp(14px, 1.2vw, 3rem);
  font-weight: bold;
  margin-bottom: 10px;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-direction: column; /* 竖排 */
  justify-content: space-between; /* 均分间距 */
  width: 60%;
}

.features li {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.check-icon {
  width: 20px;
  height: 20px;
  margin-right: 1rem;
}

.contact-btn {
  background-color: #f90;
  color: white;
  border: none;
  padding: 8px 12px;
  width: 80%;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
}
.contact-btn a{
  color: white;
}
.contact-btn:hover {
  background-color: #e88e00;
}

.__border_right {
  border-right: #feb001 solid 2px;
  min-height: 310px;

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
  background: url("/assets/IMG/backgrounds/home_01.jpg") no-repeat;
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
@media (min-width: 768px) and (max-width: 1700px) {
  .__border_right{
    min-height: 310px;
  }
  .features{
    width: 63%;
  }
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
    background: url("/assets/IMG/backgrounds/home_01_Android.jpg") no-repeat;
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

  .ProductDetail_02_box {
    width: 90%;
    margin: 12% auto 0 auto;
  }

  .ProductDetail_02_box_content {
    display: block;
    margin: 0;
  }

  .ProductDetail_02_box_content_mini {
    width: 100%;
  }

  .ProductDetail_02_box_content_mini2 {
    width: 100%;
  }

  .ProductDetail_02_box_content_mini_box {
    background: white;
    padding: 0;
  }

  .ProductDetail_02_box_content_mini_box2 {
    background: white;
    padding: 0;
  }

  .ProductDetail_02_box_content_mini_box_mini {
    border-left: none;
    border-top: 0.2rem solid #feb001;
    padding: 2% 0;
  }

  .ProductDetail_02_box_content_mini_box_mini div {
    width: 95%;
    font-size: 13px;
    line-height: 1.5;
  }

  .ProductDetail_03_box {
    width: 90%;
    margin: 12% auto 10% auto;
  }

  .__border_bottom {
    border: none;
  }

  .product-offers {
    display: block;
  }

  .offer-card-mini-top {
    text-align: left;
    border-bottom: 0.2rem solid #feb001;
  }

  .offer-card-mini-top img {
    width: 25%;
    height: 10%;
  }

  .title {
    margin: 0;
    font-weight: 500;
  }

  .offer-card {
    width: 100%;
    border-radius: 0;
    text-align: center;
    position: relative;
    margin-top: 2rem;
  }

  .offer-card-mini {
    display: flex;
  }

  .offer-card-mini > div {
    flex: 1;
  }

  .price {
    color: #f90;
    font-size: clamp(16px, 1.2vw, 3rem);
    font-weight: 400;
    margin-bottom: 6px;
  }

  .__border_right {
    border-right: none;
    width: 100%;
  }

  .features {
    display: block;
    width: 100%;
  }
  .contact-btn {
    background-color: #f90;
    color: black;
    border: none;
    padding: 4px 12px;
    width: 30%;
    cursor: pointer;
    position: absolute;
    bottom: 15%;
    left: auto;
    right: 0;
  }
  .contact-btn a{
    color: #333;
  }
  .__border0{
    min-height: 150px !important;
  }
  .__border_right {
    border-right: none;
    width: 100%;
    min-height: 150px !important;
  }
  .features > div {
    display: inline-block;
    font-size: 13px;
    color: #333;
    line-height: 20px;
    min-width: 40%;
    text-align: left;

  }

  .icon {
    width: 8rem;
    height: 8rem;
    margin-bottom: 10px;
  }

  .check-icon {
    width: 16px;
    height: 16px;
    margin-right: 0.5rem;
    vertical-align: middle; /* 关键：修正 inline 图片对齐 */
  }

  .contact-btn2 {
    background-color: #ffaa01;
    color: #564727;
    border: none;
    padding: 4px 10px;
    width: 24%;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .contact-btn2 a {
    color: #564727;
  }
}
</style>