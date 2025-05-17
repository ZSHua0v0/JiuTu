<template>
  <nav class="nav-menu">
    <ul>
      <li v-for="item in menuItems" :key="item.path" @click="$emit('item-click')">
        <NuxtLink :to="item.localizedPath" :class="{ active: isActive(item.path) }">{{ $t(item.key) }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useLocalePath } from '#i18n'

const localePath = useLocalePath()

const route = useRoute()

const isActive = (path) => {
  const currentPath = route.path.replace(/^\/(zh|en|zh-Hant)?(?=\/|$)/, '') || '/'
  return path === '/' ? currentPath === '/' : currentPath.startsWith(path)
}

// ✅ 关键：computed 保证 language 切换后重新生成路径
const menuItems = computed(() => [
  { path: '/', key: 'menu.home' },
  { path: '/GlobalAlibaba', key: 'menu.alibaba' },
  { path: '/ProductDeals', key: 'menu.deals' },
  { path: '/FastRegister', key: 'menu.register' },
  { path: '/Solutions', key: 'menu.solutions' },
  { path: '/CaseStudies', key: 'menu.cases' },
  { path: '/guide', key: 'menu.guide' }
].map(item => ({
  ...item,
  localizedPath: localePath(item.path)
})))
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