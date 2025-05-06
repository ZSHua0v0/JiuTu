<template>
  <nav class="nav-menu">
    <ul>
      <li v-for="item in menuItems" :key="item.path" @click="$emit('item-click')">
        <NuxtLink :to="item.path" :class="{ active: isActive(item.path) }">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const menuItems = [
  {path: '/', label: '首页'},
  {path: '/GlobalAlibaba', label: '阿里国际'},
  {path: '/ProductDeals', label: '产品优惠'},
  {path: '/FastRegister', label: '极速开户'},
  {path: '/Solutions', label: '解决方案'},
  {path: '/CaseStudies', label: '成功案例'},
  {path: '/guide', label: '使用指南'},

]
defineEmits(['item-click']) // 添加事件发射
</script>

<style scoped>
.nav-menu ul {
  list-style: none;
  display: flex;
  gap: clamp(1rem, 2vw, 10em);
  padding: 0;
  align-items: flex-end;
  height: 60px;
}

.nav-menu a {
  text-decoration: none;
  font-size: clamp(15px, calc(14px + (2 * (100vw - 768px) / 1152)), 16px);
  color: #666;
  padding: 8px 12px;
  display: block;
}

.nav-menu a.router-link-active {
  color: #f5cb6c;
}
.nav-menu a.active {
  color: #f5cb6c;
}

</style>