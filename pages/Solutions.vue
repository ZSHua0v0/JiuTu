<template>
  <div>
    <div class="Solutions_box">
      <div class="Solutions_box_01">
        <div class="home_03_register__title">
          视频加速&跨境直播
          <span>/ACCELERATION</span></div>
        <div class="solution-container">
          <!-- 左侧区域 -->
          <div v-if="!isMobile" class="solution-left">
            <div class="left-block">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon"/>
                <h3>完善的解决方案</h3>
              </div>
              <ul>
                <li>直播等保定审营销</li>
                <li>自适应复杂链路</li>
                <li>多类攻击模型</li>
                <li>低延时直播</li>
              </ul>
            </div>
            <div class="left-block">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon"/>
                <h3>支持最高性能</h3>
              </div>
              <ul>
                <li>日活：高达1000万</li>
                <li>并发：高达100万</li>
                <li>秒开：低至一步</li>
              </ul>
            </div>
          </div>
          <div v-if="isMobile" class="solution-left">
            <div class="left-block">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon"/>
                <h3>完善的解决方案</h3>
              </div>
              <div class="solution-left-mobile-margin">直播等保定审营销、自适应复杂链路、多类攻击模型、低延时直播</div>
            </div>
            <div class="left-block">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon"/>
                <h3>支持最高性能</h3>
              </div>
              <div class="solution-left-mobile-margin">日活：高达1000万&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 并发：高达100万
              </div>
              <div class="solution-left-mobile-margin">秒开：低至一步</div>
            </div>
          </div>
          <!-- 右侧区域 -->
          <div class="solution-right">
            <div class="issue-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/wrong.png" alt="jiutu" class="icon"/>
                <h3>问题 Issue:</h3>
              </div>
              <div v-if="isMobile" style="margin-left: 8%">
                跨境直播的延迟和卡顿问题、直播的稳定性和标准性、直播素材的切割
              </div>
              <ul v-if="!isMobile">
                <li>跨境直播的延迟和卡顿问题</li>
                <li>直播的稳定性和标准性</li>
                <li>直播素材的切割</li>
              </ul>
            </div>

            <hr class="divider"/>

            <div class="scheme-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/check.png" alt="jiutu" class="icon"/>
                <h3>解决 Scheme:</h3>
              </div>
              <p>
                云服务架构通过全球分布式数据中心和CDN（内容分发网络）技术在服务器端提供卓越性能计算和扩展性，支持高并发、低延迟的直播需求。跨境直播通过智能回源和链路优化技术，确保直播流的稳定和标准性。云服务整合自研流媒体，有效管理视频的实时剪切，支持多场景的媒体分割，为优质直播保驾护航。同时结合云智能分析技术，实现视频内容的实时剪辑与传输。跨境直播需有专业的技术支持和稳定服务，云服务提供高频率稳定的7x24小时的技术支持和运维服务，确保直播系统的稳定运行和及时问题解决。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="Solutions_box_01 __margin_topP">
        <div class="home_03_register__title">
          游戏出海
          <span>/GAME</span></div>
        <div class="solution-container2">
          <!-- 左侧区域 -->
          <div class="solution-left __background0">
            <div class="left-block __hr">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon"/>
                <h3>方案优势</h3>
              </div>
              <ul class="__widthleft1">
                <li>高质量一自适应码率推流</li>
                <li>高可用一通过监测应用程序运行状态，自动调度用户流量，保证服务连续性</li>
                <li>易部署一即开即用、全局资源统一监控运维，业务部署更敏捷</li>
              </ul>
            </div>
            <div class="left-block">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon"/>
                <h3>解决难题</h3>
              </div>
              <ul class="__widthleft1">
                <li>登录体验差，如登录慢、登录异常、经常掉线等问题</li>
                <li>延迟高，如跨区域跨境网络延迟无法满足基本体验问题</li>
                <li>下载更新慢，如游戏安装包、缓存包、更新包跨区域跨境下载慢</li>
              </ul>
            </div>
          </div>

          <!-- 右侧区域 -->
          <div class="solution-right __background1">
            <div class="issue-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/wrong.png" alt="jiutu" class="icon"/>
                <h3>问题 Issue:</h3>
              </div>
              <ul v-if="!isMobile" style="background: white">
                <li>延迟和丢包率，访问速度</li>
                <li>流量高峰多并发</li>
                <li>网络攻击和作弊行为</li>
                <li>全球数据同步</li>
              </ul>
              <div v-if="isMobile" style="border-bottom: 2px solid #feb001;padding-bottom: 3%;padding-left: 9%">
                延迟和丢包率，访问速度、流量高峰多并发、网络攻击和作弊行为、全球数据同步
              </div>
            </div>

            <div class="scheme-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/check.png" alt="jiutu" class="icon"/>
                <h3>解决 Scheme:</h3>
              </div>
              <p style="background: white" :style="isMobile ? { paddingLeft: '9%' } : {}">
                云服务器提供商在全球主要区域部署数据中心，确保游戏服务器尽可能靠近玩家，减少延迟和丢包率，提升游戏体验。<br
                  v-if="!isMobile"/>
                云服务器支持快速扩容和缩容，以应对游戏出海过程中可能出现的流量高峰，保证服务稳定性。<br v-if="!isMobile"/>
                提供DDoS攻击防护、数据安全和反作弊等安全服务，保护游戏免受网络攻击和作弊行为的影响。<br v-if="!isMobile"/>
                通过CDN加速游戏内容的分发，减少加载时间，提高全球玩家的访问速度。 </p>
            </div>
          </div>
        </div>
      </div>
      <div class="Solutions_box_01 __margin_topP">
        <div class="home_03_register__title">
          独立网站
          <span>/WEBSITE</span></div>
        <div class="solution-container3">
          <!-- 左侧区域 -->
          <div class="solution-left __background2" :class="{ 'solution-left2': isMobile }">
            <div class="issue-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/wrong.png" alt="jiutu" class="icon"/>
                <h3>问题 Issue:</h3>
              </div>
              <ul class="__padding_leFt" style="background: white" :style="isMobile ? { paddingLeft: '9%',margin: '0' } : {}">
                <li>流量高峰时确保网站的稳定运行网站的搭建流程</li>
              </ul>
            </div>
          </div>

          <!-- 右侧区域 -->
          <div class="solution-right __background1">
            <div class="scheme-section">
              <div class="section-title">
                <img src="/assets/IMG/icons/check.png" alt="jiutu" class="icon"/>
                <h3>解决 Scheme:</h3>
              </div>
              <p :style="isMobile ? { paddingLeft: '9%' } : {}">
                独立站可能面临访问量波动的问题，尤其在促销或特殊活动期间。云服务器提供的弹性扩展能力可以动态调整资源如CPU和内存，以应对流量高峰，确保网站的稳定运行。<br
                  v-if="!isMobile"/>
                云服务器支持快速部署和配置，帮助独立站快速上线和迭代。一些云服务商还提供一键搭建服务，简化了网站的搭建流程。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="Solutions_box_01 __margin_topP">
        <div class="home_03_register__title">
          区块链
          <span>/BLOCKCHAIN</span></div>
        <div class="blockchain-section">
          <!-- 顶部描述文字 -->
          <p class="section-description">
            九途出海云市场汇聚业内领先的众多合作伙伴，可为所有主要区块链协议提供支持，包括70多种经过验证的区块链和分布式分类账技术解决方案。
          </p>

          <!-- 左右区块 -->
          <div class="blockchain-cards">
            <!-- 左侧 -->
            <div class="block-card">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon"/>
                <h3>Quantum Ledger Database</h3>
              </div>
              <p>
                完全托管式分类账数据库目标是提供一个透明、不可变、可以加密方式验证的交易日志。它包含一个内置日志，用于存储备个准确日期排序的数据更改记录。该日志为只追加型，这意味着用户可以向该日志添加数据，但不能覆盖或删除数据。
              </p>
            </div>

            <!-- 右侧 -->
            <div class="block-card">
              <div class="block-title">
                <img src="/assets/IMG/icons/black_star.png" alt="jiutu" class="icon"/>
                <h3>Managed Blockchain</h3>
              </div>
              <p>
                Managed Blockchain 是一种完全托管式服务，让您可以使用 Hyperledger Fabric 和以太坊轻松加入公有网络或创建和管理可扩展的私有网络。立即创建
                AWS 账户开始使用区块链。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";

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
.Solutions_box {
  width: 65%;
  margin: 0 auto;
}

.home_03_register__title {
  font-size: clamp(24px, 2.2vw, 3rem);
  font-weight: 550;

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