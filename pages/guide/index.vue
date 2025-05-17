<template>
  <div>
    <div class="guide-container">
      <div class="guide-item" v-for="(item, index) in guideList" :key="index">
        <div class="left-line"></div>
        <div class="content">
          <NuxtLink :to="item.link" class="title">{{ item.title }}</NuxtLink>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const { data: rawList } = await useAsyncData('guide-list', () =>
    queryContent(`${locale.value}/guide`)
        .only(['title', 'description', 'image', '_path', 'order'])
        .sort({ order: 1 })
        .find()
)

const guideList = computed(() =>
    (rawList.value || []).map(item => ({
      title: item.title || '未命名',
      description: item.description || '',
      image: item.image || '/default-image.png',
      link: item._path // ⚠️ 这里保留原始路径，不要包 localePath，否则会重复 zh
    }))
)


</script>

<style scoped>
.guide-container {
  width: 65%;
  margin: 10rem auto 10% auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.guide-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border-left: 5px solid #feb001;
}

.left-line {
  width: 4px;
  height: 100%;
  background: #f90;
  border-radius: 2px;
}

.content {
  flex: 1;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.title:hover {
  color: #f90;
}

.description {
  font-size: 0.95rem;
  color: #555;
  margin-top: 0.5rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .guide-container {
    width: 80%;
    margin: 3rem auto 10% auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  .description {
    font-size: 0.75rem;
    color: #555;
    margin-top: 0.5rem;
    line-height: 1.3;
  }
  .guide-item {
    display: flex
  ;
    align-items: flex-start;
    gap: 0.7rem;
    border-left: 3px solid #feb001;
  }
}
</style>
