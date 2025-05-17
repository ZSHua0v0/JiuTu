<template>
  <div
      class="language-container"
      @mouseenter="cancelHide"
      @mouseleave="startHideDelay"
  >
    <!-- 按钮部分 -->
    <button
        class="language-button"
        @click="toggleDropdown"
    >
      Language
    </button>

    <!-- 下拉菜单 -->
    <Transition name="fade">
      <div v-if="showDropdown" class="dropdown-menu">
        <div class="menu-item" @click="changeLanguage('en')">English</div>
        <div class="menu-item" @click="changeLanguage('zh')">中文</div>
        <div class="menu-item" @click="changeLanguage('zh-Hant')">中文繁体</div>
      </div>
    </Transition>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useI18n} from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const {locale} = useI18n()

const showDropdown = ref(false)
let hideTimeout: number | null = null

const startHideDelay = () => {
  hideTimeout = setTimeout(() => {
    showDropdown.value = false
  }, 300)
}

const cancelHide = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
  }
  showDropdown.value = true
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

// 切换语言
const changeLanguage = async (lang: string) => {
  locale.value = lang
  document.cookie = `i18n_redirected=${lang}; path=/` // ✅ 保存语言到 cookie
  showDropdown.value = false

  const pathWithoutLocale = route.fullPath.replace(/^\/(zh|en|zh-Hant)(?=\/|$)/, '') || '/'
  const newPath = `/${lang}${pathWithoutLocale.startsWith('/') ? pathWithoutLocale : '/' + pathWithoutLocale}`

  await router.push(newPath)
}



</script>

<style scoped>
.language-button {
  width: 120px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #000;
  color: #000;
  border-radius: 45px;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  font-size: 0.9rem;
  font-family: serif;
}

.language-button:hover {
  background: #505050;
  color: white;
  font-size: 1rem;
}

.language-container {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 120px;
  margin-top: 8px;
  background: white;
  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;
  z-index: 100;
}

.menu-item {
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s;
  font-family: serif;
}

.menu-item:hover {
  background: #505050;
  color: white;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
