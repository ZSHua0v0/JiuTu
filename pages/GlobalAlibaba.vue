<template>
  <div>
    <div :class="['GlobalAlibaba_banner_01', bannerBgClass]">
  </div>
    <div class="GlobalAlibaba_box_02">
      <div class="GlobalAlibaba_box_02_mini_box">
        <div class="GlobalAlibaba_box_02_mini_box_icons"><img src="/assets/IMG/icons/Gold.png"
                                                              alt="jiutu"/><span>1</span></div>
        <div class="GlobalAlibaba_box_02_mini_box_title">{{ $t('GlobalAlibaba.ranking.apac') }}<span>No.1</span></div>
      </div>
      <div v-if="isMobile" class="bar-line">
        <span style="height: 6px;"></span>
        <span style="height: 10px;"></span>
        <span style="height: 8px;"></span>
        <span style="height: 12px;"></span>
        <span style="height: 14px;"></span>
        <span style="height: 16px;"></span>
        <span style="height: 14px;"></span>
        <span style="height: 12px;"></span>
        <span style="height: 10px;"></span>
        <span style="height: 8px;"></span>
        <span style="height: 12px;"></span>
      </div>

      <div class="GlobalAlibaba_box_02_mini_box">
        <div class="GlobalAlibaba_box_02_mini_box_icons"><img src="/assets/IMG/icons/Gold.png"
                                                              alt="jiutu"/><span>1</span></div>
        <div class="GlobalAlibaba_box_02_mini_box_title">{{ $t('GlobalAlibaba.ranking.china') }}<span>No.1</span></div>
      </div>
      <div v-if="isMobile" class="bar-line">
        <span style="height: 6px;"></span>
        <span style="height: 10px;"></span>
        <span style="height: 8px;"></span>
        <span style="height: 12px;"></span>
        <span style="height: 14px;"></span>
        <span style="height: 16px;"></span>
        <span style="height: 14px;"></span>
        <span style="height: 12px;"></span>
        <span style="height: 10px;"></span>
        <span style="height: 8px;"></span>
        <span style="height: 12px;"></span>
      </div>

      <div class="GlobalAlibaba_box_02_mini_box">
        <div class="GlobalAlibaba_box_02_mini_box_icons"><img src="/assets/IMG/icons/Gold.png"
                                                              alt="jiutu"/><span>3</span></div>
        <div class="GlobalAlibaba_box_02_mini_box_title">{{ $t('GlobalAlibaba.ranking.global') }}<span>No.3</span></div>
      </div>
      <div v-if="isMobile" class="bar-line">
        <span style="height: 6px;"></span>
        <span style="height: 10px;"></span>
        <span style="height: 8px;"></span>
        <span style="height: 12px;"></span>
        <span style="height: 14px;"></span>
        <span style="height: 16px;"></span>
        <span style="height: 14px;"></span>
        <span style="height: 12px;"></span>
        <span style="height: 10px;"></span>
        <span style="height: 8px;"></span>
        <span style="height: 12px;"></span>
      </div>
    </div>

    <div class="GlobalAlibaba_box_03">
      <div class="GlobalAlibaba_box_03__title">
        {{ $t('GlobalAlibaba.title') }}
        <span>{{ $t('GlobalAlibaba.slash') }}</span></div>
      <div class="GlobalAlibaba_box_03_mini_box">
        <div class="GlobalAlibaba_box_03_mini_box_left"></div>
        <div class="GlobalAlibaba_box_03_mini_box_right">
          <div>
            <div class="GlobalAlibaba_box_03_mini_box_icons"><img src="/assets/IMG/icons/star.png" alt="star"></div>
            <div class="GlobalAlibaba_box_03_mini_box_content">{{ $t('GlobalAlibaba.cards.0') }}</div>
          </div>
          <div>
            <div class="GlobalAlibaba_box_03_mini_box_icons"><img src="/assets/IMG/icons/star.png" alt="star"></div>
            <div class="GlobalAlibaba_box_03_mini_box_content">{{ $t('GlobalAlibaba.cards.1') }}</div>
          </div>
          <div>
            <div class="GlobalAlibaba_box_03_mini_box_icons"><img src="/assets/IMG/icons/star.png" alt="star"></div>
            <div class="GlobalAlibaba_box_03_mini_box_content">{{ $t('GlobalAlibaba.cards.2') }}</div>
          </div>
          <div>
            <div class="GlobalAlibaba_box_03_mini_box_icons"><img src="/assets/IMG/icons/star.png" alt="star"></div>
            <div class="GlobalAlibaba_box_03_mini_box_content">{{ $t('GlobalAlibaba.cards.3') }}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMobile" class="aliyun-section">
      <h2>{{ $t('GlobalAlibaba.title') }} <span class="slash">{{ $t('GlobalAlibaba.slash') }}</span></h2>

      <!-- 图1 -->
      <div class="image-crop">
        <img src="/assets/IMG/backgrounds/GlobalAlibaba_banner_03.jpg" alt="图1" class="slice slice-1"/>
      </div>
      <p>{{ $t('GlobalAlibaba.mobileCards.0') }}</p>

      <!-- 图2 -->
      <div class="image-crop">
        <img src="/assets/IMG/backgrounds/GlobalAlibaba_banner_03.jpg" alt="图2" class="slice slice-2"/>
      </div>
      <p>{{ $t('GlobalAlibaba.mobileCards.1') }}</p>

      <!-- 图3 -->
      <div class="image-crop">
        <img src="/assets/IMG/backgrounds/GlobalAlibaba_banner_03.jpg" alt="图3" class="slice slice-3"/>
      </div>
      <p>{{ $t('GlobalAlibaba.mobileCards.2') }}</p>

      <!-- 最后一段 -->
      <div class="image-crop">
        <img src="/assets/IMG/backgrounds/GlobalAlibaba_banner_03.jpg" alt="图3" class="slice slice-4"/>
      </div>
      <p class="last-paragraph">{{ $t('GlobalAlibaba.mobileCards.3') }}</p>
    </div>
  </div>
</template>


<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta()
const isMobile = ref(false)
const bannerBgClass = computed(() => {
  return `banner-bg-${locale.value || 'zh'}`
})
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
.GlobalAlibaba_banner_01 {
  width: 100%;
  height: clamp(600px, 20vw + 200px, 700px);
  background-size: 100% 100%;
  margin: 0 auto;
}
/* 中文简体背景 */
.banner-bg-zh {
  background-image: url('/assets/IMG/backgrounds/GlobalAlibaba_banner_01.jpg');
}

/* 英文背景 */
.banner-bg-en {
  background-image: url('/assets/IMG/backgrounds/GlobalAlibaba_banner_01_en.jpg');
}

/* 繁体背景 */
.banner-bg-zh-Hant {
  background-image: url('/assets/IMG/backgrounds/GlobalAlibaba_banner_01_zh-Hant.jpg');
}
.GlobalAlibaba_box_02 {
  margin: 2% auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
}

.GlobalAlibaba_box_02_mini_box {
  display: flex;
  flex-direction: column; /* 竖排 */
  justify-content: center;
  align-items: center;
}

.GlobalAlibaba_box_02_mini_box_icons {
  width: 8rem;
  height: 8rem;
  position: relative;
}

.GlobalAlibaba_box_02_mini_box_icons img {
  width: 100%;
  height: 100%;
}

.GlobalAlibaba_box_02_mini_box_icons span {
  color: #ea0a0a;
  position: absolute;
  top: 27px;
  left: 52px;
  font-size: 2.5rem;
  font-weight: bold;
}

.GlobalAlibaba_box_02_mini_box_title {
  font-size: 1.3rem;
  font-weight: 300;
}

.GlobalAlibaba_box_02_mini_box_title span {
  color: #feb001;
  font-size: 2rem;
  font-weight: 500;
}

.GlobalAlibaba_box_03 {
  width: clamp(65%, 65%, 65%);
  margin: 8% auto 10% auto;
}

.GlobalAlibaba_box_03__title {
  font-size: clamp(14px, 2.2vw, 3rem);
  font-weight: 550;
}

.GlobalAlibaba_box_03__title span {
  margin-left: 2%;
  font-size: clamp(14px, 1.5vw, 3rem);
  color: #feb001;
  letter-spacing: 2px;
}

.GlobalAlibaba_box_03_mini_box_left {
  background: url("/assets/IMG/backgrounds/GlobalAlibaba_banner_03.jpg") no-repeat;
  background-size: 100% 100%;
  width: 35%;
  height: 600px;

}

.GlobalAlibaba_box_03_mini_box {
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
}

.GlobalAlibaba_box_03_mini_box_icons img {
  width: 2.5rem;
  height: 2.5rem;
  margin-left: -3rem;
}

.GlobalAlibaba_box_03_mini_box_right {
  width: 50%;
  display: flex;
  flex-direction: column; /* 竖排 */
  justify-content: space-between; /* 均分间距 */
}

.GlobalAlibaba_box_03_mini_box_content {
  width: 100%;
  color: #505050;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .GlobalAlibaba_banner_01 {
    width: 100%;
    height: 480px;
    background: url("/assets/IMG/backgrounds/GlobalAlibaba_banner_01_2.jpg") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }

  .GlobalAlibaba_box_02 {
    //display: none;
    flex-direction: column;
  }

  .GlobalAlibaba_box_02_mini_box {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
    justify-content: left;
  }

  .GlobalAlibaba_box_02_mini_box_title {
    font-size: 1rem;
    font-weight: 300;
    width: 60%;
    text-align: right;
  }

  .GlobalAlibaba_box_02_mini_box_title span {
    color: #feb001;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .GlobalAlibaba_box_02_mini_box_icons {
    width: 6rem;
    height: 6rem;
    position: relative;
  }

  .GlobalAlibaba_box_02_mini_box_icons span {
    color: #ea0a0a;
    position: absolute;
    top: 17px;
    left: 39px;
    font-size: 2rem;
    font-weight: bold;
  }

  .GlobalAlibaba_box_03 {
    display: none;
  }

  .bar-line {
    width: 70%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0;
  }

  .bar-line span {
    width: 14px;
    border: 1px solid #fcb322; /* 橙色边框 */
    background-color: transparent;
    border-radius: 2px;
    display: inline-block;
  }

  .aliyun-section {
    padding: 1.5rem 1.25rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    line-height: 1.7;
    color: #333;
    max-width: 700px;
    margin: 0 auto;
  }

  .aliyun-section h2 {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
    letter-spacing: 2px;
  }

  .aliyun-section .slash {
    color: orange;
    font-weight: normal;
    font-size: 1rem;
  }

  .image-crop {
    width: 100%;
    height: 100px;
    overflow: hidden;
    margin: 1.5rem 0 0.8rem;
  }

  .image-crop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 裁图区域模拟 */
  .slice-1 {
    object-position: center 38%;
  }

  .slice-2 {
    object-position: center 58%;
  }

  .slice-3 {
    object-position: center 79%;
  }
  .slice-4 {
    object-position: center 100%;
  }
  .aliyun-section p {
    font-size: 0.7rem;
    margin-bottom: 1rem;
    text-align: justify;
  }

  .last-paragraph {
    margin-top: 1.5rem;
  }

}
</style>