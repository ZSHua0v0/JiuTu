<template>
  <div>
    <div class="case-bg"></div>
    <div class="case-container">
      <div v-for="(item, index) in caseList" :key="index">
        <div class="case-item-border">
          <div class="case-item">
            <!-- 左侧内容 -->
            <div class="case-left">
              <p class="case-label">成功案例 - Example {{ index + 1 }}</p>
              <div class="case-title-img">
              <h3 class="case-title"><NuxtLink :to="item.link" >{{ item.title }}</NuxtLink></h3>
                <img v-if="isMobile" src="../../public/assets/IMG/icons/arrow2.jpg" alt="jiutu">
              </div>
              <p class="case-description">{{ item.description }}</p>
              <NuxtLink :to="item.link" class="case-button">查看详情</NuxtLink>
            </div>
            <!-- 右侧图片 -->
            <div class="case-right">
              <img :src="item.image" alt="case image" class="case-image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useAsyncData } from '#app'
// const { data: caseList } = await useAsyncData('CaseStudies', () =>
//     queryContent('/CaseStudies').find()
// )

import { useLocalePath } from '#i18n'

const localePath = useLocalePath()

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

const { data: rawList } = await useAsyncData('case-list', () =>
    queryContent('CaseStudies') // 保持目录是 content/cases/
        .only(['title', 'description', 'image', '_path', 'order'])
        .sort({ order: 1 })
        .find()
)

const caseList = computed(() =>
    (rawList.value || []).map(item => ({
      title: item.title || '未命名',
      description: item.description || '',
      image: item.image || '/default-image.png',
      link: localePath(item._path) // ✅ 包装路径为多语言链接
    }))
)



</script>



<style scoped>
a{
  text-decoration: none;
  color: #505050;
}
.case-bg{
  display: none;
}
.case-container {
  width: 100%;
  margin: 2rem auto 10% auto;
  display: flex;
  flex-direction: column;
  gap: 2rem; /* 分割线上下间距 */
}

.case-item-border {
  border-bottom: 1px solid #fdedcd;
}

.case-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  min-height: 18rem;
  width: 65%;
  margin: 0 auto;
}

.case-left {
  flex: 1;
}

.case-label {
  color: #1a73e8;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.case-title {
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
}

.case-description {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 4%;
  line-height: 1.6;
  width: 60%;
}

.case-button {
  display: inline-block;
  background-color: #fca400;
  color: white;
  padding: 0.2rem 1rem;
  text-decoration: none;
  width: 20%;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2%;
}

.case-button:hover {
  background-color: #e68a00;
}

.case-right {
  width: 200px;
  height: 120px;
  flex-shrink: 0;
  position: relative;
  border: 2px solid #fca400;
}

.case-image {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  left: -4%;
  top: 6%;
}

@media (max-width: 768px) {
  .case-right {
    display: none;
  }

  .case-container {
    margin: 0;
    padding-top: 7%;
    background: #ffaa01;
  }

  .case-button {
    display: none;
  }

  .case-item {
    width: 80%;
    min-height: 1rem;
  }

  .case-description {
    width: 100%;
    font-size: 0.85rem;
    color: #140c01;
  }

  .case-title {
    font-size: 1.2rem;
    margin-right: 2%;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .case-label {
    display: none;
  }

  .case-item-border {
    border-bottom: none;
  }
  .case-bg{
    width: 100%;
    height: 180px;
    display: block;
    background: url("../../public/assets/IMG/backgrounds/1746413861045.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .case-title-img{
    display: flex;
    border-bottom: 2px solid;
    margin-bottom: 0.6rem;
    padding-bottom: 0.4rem;
  }
  .case-title-img img{
    width: 50px;
    height: 19px;
    margin: auto 0 0 0;
  }
}
</style>
