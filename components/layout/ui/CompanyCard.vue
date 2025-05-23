<template>
  <div class="company-card">
    <img :src="imgSrc" alt="Company Logo" class="company-logo" />
    <div class="company-info">
      <h2 class="company-title">{{ title }}</h2>
      <p class="company-description">{{ description }}</p>
      <NuxtLink :to="link">
        <button class="detail-button">{{ $t('home.cases.btn') }}</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
  title: String,
  description: String,
  link: String
})
</script>
<style scoped>
.company-card {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.company-logo {
  width: clamp(300px, 20vw, 380px);   /* 适配宽度，最小300px，推荐值20%视口宽度，最大380px */
  height: clamp(180px, 12vw, 220px);  /* 适配高度，最小180px，推荐值12%视口宽度，最大220px */
}

.company-info {
  max-width: 700px;
}

.company-title {
  font-size: 2rem; /* 更大字体，接近截图效果 */
  font-weight: bold;
  margin-bottom: 1rem;
  color: #000000;
}

.company-description {
  font-size: clamp(14px,0.8vw,2rem);
  line-height: 1.6;
  color: #333333;
  margin-bottom: 1.5rem;
}

.detail-button {
  background-color: #feb001; /* 亮橙色 */
  color: #ffffff;
  font-size: clamp(14px,1vw,2rem);
  padding: 0.5rem 1.5rem;
  border: none;
  cursor: pointer;
  width: 27%;
}

.detail-button:hover {
  background-color: #e68a00; /* 悬停更深橙色 */
}
@media (max-width: 768px) {
  .company-card {
    flex-direction: column;
    align-items: center;
  }
  .company-logo {
    width: 80%;
    max-width: 300px;
  }
  .company-info {
    text-align: center;
  }
}
</style>