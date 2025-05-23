<template>
  <div class="app-container">
    <AppHeader class="app-header"></AppHeader>
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
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta()
</script>
<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}
.app-header{
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white; /* 建议设定背景防止透明 */
}
</style>
<!--# 主容器布局-->