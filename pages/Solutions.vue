<template>
  <div>
    <div class="Solutions_box">
      <div class="Solutions_box_01">
        <div class="home_03_register__title">
          {{ $t('Solutions.video.title') }}
          <span>{{ $t('Solutions.video.slash') }}</span>
        </div>
        <div class="solution-container">
          <!-- 左侧区域 -->
          <div v-if="!isMobile" :class="[
      'solution-left',
      locale === 'en' ? 'solution-left_en' : ''
    ]">
            <div class="left-block">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.video.left.block1.title') }}</h3>
              </div>
              <ul>
                <li>{{ $t('Solutions.video.left.block1.items.0') }}</li>
                <li>{{ $t('Solutions.video.left.block1.items.1') }}</li>
                <li>{{ $t('Solutions.video.left.block1.items.2') }}</li>
                <li>{{ $t('Solutions.video.left.block1.items.3') }}</li>
              </ul>
            </div>
            <div class="left-block">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.video.left.block2.title') }}</h3>
              </div>
              <ul>
                <li>{{ $t('Solutions.video.left.block2.items.0') }}</li>
                <li>{{ $t('Solutions.video.left.block2.items.1') }}</li>
                <li>{{ $t('Solutions.video.left.block2.items.2') }}</li>
              </ul>
            </div>
          </div>

          <div v-if="isMobile" class="solution-left">
            <div class="left-block">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.video.left.block1.title') }}</h3>
              </div>
              <div class="solution-left-mobile-margin">
                {{ $t('Solutions.video.left.block1.itemsMobile') }}
              </div>
            </div>
            <div class="left-block">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.video.left.block2.title') }}</h3>
              </div>
              <div class="solution-left-mobile-margin">{{ $t('Solutions.video.left.block2.itemsMobile.0') }}</div>
              <div class="solution-left-mobile-margin">{{ $t('Solutions.video.left.block2.itemsMobile.1') }}</div>
            </div>
          </div>

          <!-- 右侧区域 -->
          <div class="solution-right">
            <div class="issue-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/wrong.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.video.issueTitle') }}</h3>
              </div>
              <div v-if="isMobile" style="margin-left: 8%">
                {{ $t('Solutions.video.issuesMobile') }}
              </div>
              <ul v-if="!isMobile">
                <li>{{ $t('Solutions.video.issues.0') }}</li>
                <li>{{ $t('Solutions.video.issues.1') }}</li>
                <li>{{ $t('Solutions.video.issues.2') }}</li>
              </ul>
            </div>

            <hr class="divider" />

            <div class="scheme-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/check.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.video.schemeTitle') }}</h3>
              </div>
              <p>{{ $t('Solutions.video.scheme') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="Solutions_box_01 __margin_topP">
        <div class="home_03_register__title">
          {{ $t('Solutions.game.title') }}
          <span>{{ $t('Solutions.game.slash') }}</span>
        </div>
        <div class="solution-container2">
          <!-- 左侧区域 -->
          <div class="solution-left __background0">
            <div class="left-block __hr">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.game.left.advantages.title') }}</h3>
              </div>
              <ul class="__widthleft1">
                <li>{{ $t('Solutions.game.left.advantages.items.0') }}</li>
                <li>{{ $t('Solutions.game.left.advantages.items.1') }}</li>
                <li>{{ $t('Solutions.game.left.advantages.items.2') }}</li>
              </ul>
            </div>
            <div class="left-block">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.game.left.problems.title') }}</h3>
              </div>
              <ul class="__widthleft1">
                <li>{{ $t('Solutions.game.left.problems.items.0') }}</li>
                <li>{{ $t('Solutions.game.left.problems.items.1') }}</li>
                <li>{{ $t('Solutions.game.left.problems.items.2') }}</li>
              </ul>
            </div>
          </div>

          <!-- 右侧区域 -->
          <div class="solution-right __background1">
            <div class="issue-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/wrong.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.game.issueTitle') }}</h3>
              </div>
              <ul v-if="!isMobile" style="background: white">
                <li>{{ $t('Solutions.game.issues.0') }}</li>
                <li>{{ $t('Solutions.game.issues.1') }}</li>
                <li>{{ $t('Solutions.game.issues.2') }}</li>
                <li>{{ $t('Solutions.game.issues.3') }}</li>
              </ul>
              <div v-if="isMobile" style="border-bottom: 2px solid #feb001;padding-bottom: 3%;padding-left: 9%">
                {{ $t('Solutions.game.issuesMobile') }}
              </div>
            </div>

            <div class="scheme-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/check.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.game.schemeTitle') }}</h3>
              </div>
              <p style="background: white" :style="isMobile ? { paddingLeft: '9%' } : {}">
                {{ $t('Solutions.game.scheme') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="Solutions_box_01 __margin_topP">
        <div class="home_03_register__title">
          {{ $t('Solutions.website.title') }}
          <span>{{ $t('Solutions.website.slash') }}</span>
        </div>
        <div class="solution-container3">
          <!-- 左侧区域 -->
          <div class="solution-left __background2" :class="{ 'solution-left2': isMobile }">
            <div class="issue-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/wrong.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.website.issueTitle') }}</h3>
              </div>
              <ul class="__padding_leFt" style="background: white" :style="isMobile ? { paddingLeft: '9%', margin: '0' } : {}">
                <li>{{ $t('Solutions.website.issues.0') }}</li>
              </ul>
            </div>
          </div>

          <!-- 右侧区域 -->
          <div class="solution-right __background1">
            <div class="scheme-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/check.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.website.schemeTitle') }}</h3>
              </div>
              <p :style="isMobile ? { paddingLeft: '9%' } : {}">
                {{ $t('Solutions.website.scheme') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="Solutions_box_01 __margin_topP">
        <div class="home_03_register__title">
          {{ $t('Solutions.blockchain.title') }}
          <span>{{ $t('Solutions.blockchain.slash') }}</span>
        </div>
        <div class="blockchain-section">
          <!-- 顶部描述文字 -->
          <p class="section-description">
            {{ $t('Solutions.blockchain.description') }}
          </p>

          <!-- 左右区块 -->
          <div class="blockchain-cards">
            <!-- 左侧 -->
            <div class="block-card">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.blockchain.cards.0.title') }}</h3>
              </div>
              <p>{{ $t('Solutions.blockchain.cards.0.content') }}</p>
            </div>

            <!-- 右侧 -->
            <div class="block-card">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon" />
                <h3>{{ $t('Solutions.blockchain.cards.1.title') }}</h3>
              </div>
              <p>{{ $t('Solutions.blockchain.cards.1.content') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
const {locale} = useI18n()

const isMobile = ref(false)
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta()
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
.Solutions_box {
  width: 65%;
  margin: 0 auto;
}

.home_03_register__title {
  font-size: clamp(24px, 2.2vw, 3rem);
  font-weight: 550;

}
.solution-left_en{
  background: #ffe3b3;
  padding: 1rem 1rem;
  width: 340px !important;
  box-sizing: border-box;
}
.Solutions_box_01 {
  margin: 5% 0 2% 0;
}

.home_03_register__title span {
  margin-left: 2%;
  font-size: clamp(17px, 1.5vw, 3rem);
  color: #feb001;
  letter-spacing: 2px;
}

.solution-container {
  display: flex;
  gap: 8rem;
  align-items: flex-start;
  justify-content: center;
  margin: 2rem 0;
  max-width: 1200px;
}

.solution-left {
  background: #ffe3b3;
  padding: 2rem 1.5rem;
  width: 250px;
  box-sizing: border-box;
}

.left-block {
  margin-bottom: 1.5rem;
}

.block-title {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.block-title h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 0.5rem;
}

.left-block ul {
  list-style: none;
  padding-left: 0;
  width: 76%;
  margin: 0 auto;
}

.left-block li {
  font-size: 0.95rem;
}

.solution-right {
  flex: 1;
  color: #333;
}

.section-title {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.section-title h3 {
  font-size: 1.7rem;
  font-weight: bold;
  margin-left: 0.5rem;
}

.issue-section ul {
  list-style: none;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.divider {
  border: none;
  border-top: 1px solid #feb001;
  margin: 1rem 0;
}

.scheme-section p {
  font-size: 0.95rem;
  line-height: 1.8;
  text-align: justify;
  padding-left: 1.5rem;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.__background0 {
  background: white;
  width: 31%;
  padding: 2rem 0;
}

.__background2 {
  background: white;
  padding: 2rem 0;
}

.__background1 {
  background: #ffe3b3;
  padding: 2% 5%;
}

.__widthleft1 {
  width: 87% !important;
  margin: 0 auto;
}

.__margin_topP {
  margin-top: 10%;
}

.solution-container2 {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2%;
}

.solution-container3 {
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  margin-top: 2%;
}

.blockchain-section {
  margin: 2rem auto;
  color: #333;
}

.section-description {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.blockchain-cards {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 15%;
}

.block-card {
  border-left: 4px solid #feb001;
  width: 45%;
}

.block-title {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
}

.block-title h3 {
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 0.5rem;
}

.block-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: justify;
  padding-left: 2rem;
  padding-top: 1.5rem;
}
.issue-section ul {
  list-style: none;
  padding-left: 2rem;
}

.scheme-section p {
  list-style: none;
  padding-left: 2rem;
}
.left-block ul{
  list-style: none;
  width: 76%;
  margin: 0 auto;
  padding-left: 0.8rem;
}
.__padding_leFt{
  padding-left: 2rem !important;
}
@media (min-width: 768px) and (max-width: 1700px) {
  .left-block ul{
    padding-left: 1rem;
  }
}

@media (max-width: 768px) {
  .Solutions_box {
    width: 90%;
  }
  .__padding_leFt{
    padding-left: 9% !important;
  }
  .solution-container {
    display: block;
    margin: 1rem 0;
  }

  .solution-container2 {
    display: block;
    margin: 1rem 0;
  }

  .solution-container3 {
    display: block;
    margin: 1rem 0;
  }

  .solution-left {
    width: 100%;
    border-radius: 5%;
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
    margin-bottom: 5%;
  }

  .solution-left-mobile-margin {
    margin-left: 12%;
  }

  .__background0 {
    background: #ffe3b3;
  }

  .__hr {
    border-bottom: 2px solid #feb001;
    padding-bottom: 5%;
    margin-bottom: 5%;
  }

  .left-block {
    margin-top: 0;
  }

  .__background1 {
    background: white;
  }

  .solution-left2 {
    width: 100%;
    border-radius: 0;
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
    margin-bottom: 0;
    border-bottom: 2px solid #feb001;
  }

  .blockchain-cards {
    display: block;
  }

  .block-card {
    width: 100%;
    border: none;
    margin-bottom: 5%;
  }

  .block-card p {
    padding: 0 0 0 10%;
  }

  .blockchain-section {
    margin: 1rem auto;
    color: #333;
  }
}
</style>