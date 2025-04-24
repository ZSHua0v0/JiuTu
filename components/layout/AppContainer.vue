<template>
  <div class="app-container">
    <AppHeader/>
    <div class="app-content">
      <main class="main-content">
        <slot/> <!-- 页面内容插入点 -->
      </main>
    </div>
    <AppFooter />
  </div>
</template>
<script setup>
import AppHeader from './AppHeader.vue'
import AppFooter from "./AppFooter.vue";
</script>
<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
<!--# 主容器布局-->