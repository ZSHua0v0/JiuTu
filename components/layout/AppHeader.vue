<template>
  <header class="app-header">
    <!-- Logo 区域 -->
    <div v-if="!isMobile" class="logo">
      <NuxtLink to="/">
        <img src="/assets/IMG/logos/jiutu_logo.png" alt="jiutu">
      </NuxtLink>
    </div>

    <!-- 桌面导航 -->
    <nav v-if="!isMobile" class="desktop-nav">
      <NavMenu/>
    </nav>
    <div v-if="!isMobile">
      <LanguageButton/>
    </div>

    <!-- Mobile view -->
    <div v-if="isMobile" class="navbar-brand-drawer">
      <div class="drawer-logo">
        <NuxtLink to="/">
          <img src="/assets/IMG/logos/jiutu_logo.png" alt="Logo"/>
        </NuxtLink>
      </div>
      <div style="display: flex; justify-content: center; align-items: center;">
        <div class="drawer-icons">
          <a :href="contactLinks.telegram" target="_blank">
            <img src="/assets/IMG/icons/tg.png" alt="Telegram"/>
          </a>
        </div>
        <div class="drawer-icons">
          <a :href="contactLinks.phone" target="_blank">
            <img src="/assets/IMG/icons/Phone2.png" alt="Phone"/>
          </a>
        </div>
        <div class="drawer-icons">
          <a :href="contactLinks.email" target="_blank">
            <img src="/assets/IMG/icons/Globe.png" alt="Globe"/>
          </a>
        </div>
        <MenuClickButton
            class="MenuClickButton"
            ref="menuButton"
            @toggle="toggleMenu"
            :burgerBackgroundColor="'#feb001'"
            :spanBackgroundColor="'#ffffff'"
        />
      </div>
    </div>
    <!-- Drawer Menu -->
    <div v-if="isMenuChecked" class="drawer-menu" ref="drawerMenu">
      <ul class="navbar-list2">
        <nuxt-link to="/">
          <li>首页</li>
        </nuxt-link>
        <nuxt-link to="/GlobalAlibaba">
          <li>阿里国际</li>
        </nuxt-link>
        <nuxt-link to="/ProductDeals">
          <li>产品优惠</li>
        </nuxt-link>
        <nuxt-link to="/FastRegister">
          <li>极速开户</li>
        </nuxt-link>
        <nuxt-link to="/Solutions">
          <li>解决方案</li>
        </nuxt-link>
        <nuxt-link to="/CaseStudies">
          <li>成功案例</li>
        </nuxt-link>
        <nuxt-link to="/pages/guide">
          <li>使用指南</li>
        </nuxt-link>
      </ul>
    </div>
  </header>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount, computed} from 'vue'
import {useMenuStore} from '~/stores/menu' // 使用 Pinia Store
import {useRouter} from 'vue-router' // 用于监听页面跳转

import NavMenu from './ui/NavMenu.vue'
import LanguageButton from "./ui/LanguageButton.vue"
import MenuClickButton from "./ui/MenuClickButton.vue"
import {contactLinks as contactLinksRaw} from '../../public/js/contact_link.js' // 建议改为 ~/data 结构

const contactLinks = contactLinksRaw
const isMobile = ref(false)

const menuStore = useMenuStore()
const isMenuChecked = computed(() => menuStore.isMenuChecked)
const toggleMenu = () => menuStore.toggleMenu()

const router = useRouter()

// 响应式更新窗口宽度
const handleResize = () => {
  isMobile.value = window.innerWidth <= 800
}

// 点击外部关闭菜单
const handleClickOutside = (event) => {
  const menu = document.querySelector('.drawer-menu')
  const menuButton = document.querySelector('.MenuClickButton')
  if (
      menuStore.isMenuChecked &&
      menu && !menu.contains(event.target) &&
      menuButton && !menuButton.contains(event.target)
  ) {
    menuStore.toggleMenu()
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)

  // 页面跳转后自动关闭菜单
  router.afterEach(() => {
    if (menuStore.isMenuChecked) {
      menuStore.toggleMenu()
    }
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})
</script>


<style scoped>
.logo {
  width: 2.7rem;
  height: 2.7rem;

}

/* 基础样式 */
.app-header {
  background: white;
  //box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-bottom: 1px solid #feb001;
  padding: 0 2rem;
  height: calc(80px + 0.1 * 10vh);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1rem, 8vw, 10rem);
  position: relative;
  z-index: 100;
}

/* Drawer Menu Styles */
.drawer-menu {
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: all 0.2s;
  border-top: 1.5px solid #ff6702;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow */
}

/* Logo 样式 */
.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo img {
  width: 2.7rem;
  height: 2.7rem;
}

.brand {
  font-size: 1.2rem;
  font-weight: 700;
  color: #FF6A00; /* 九途主题色 */
  margin-right: 0.5rem;
}

.slogan {
  font-size: 0.9rem;
  color: #666;
}

/* 桌面导航 */
.desktop-nav {
  display: flex;
  gap: 1.5rem;
}

/* 移动菜单按钮 */
.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.bar {
  width: 25px;
  height: 2px;
  background: #333;
  position: relative;
  transition: all 0.3s;
}

.bar::before,
.bar::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  left: 0;
  transition: inherit;
}

.bar::before {
  top: -8px;
}

.bar::after {
  top: 8px;
}

.bar-active {
  background: transparent;
}

.bar-active::before {
  transform: translateY(8px) rotate(45deg);
}

.bar-active::after {
  transform: translateY(-8px) rotate(-45deg);
}

/* 移动菜单覆盖层 */
.mobile-menu-overlay {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}

.mobile-nav {
  background: white;
  padding: 1rem;
  animation: slideDown 0.3s ease-out;
}

/* 过渡动画 */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile View */
@media (max-width: 800px) {
  .navbar-brand-drawer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .MenuClickButton {
    float: right;
  }

  .navbar-list {
    display: none; /* Hide desktop menu */
  }

  .navbar-list2 {
    list-style-type: none;
    padding: 4%;
  }

  .navbar-list2 li {
    margin: 0 26px 10px 26px;
    height: 50px;
    border: 2px solid #feb001;
    border-radius: 5px;
    line-height: 50px;
    padding-left: 3%;
    background: white;
  }

  .navbar-list2 a {
    color: #feb001;
    text-decoration: none;
    font-size: 15px;
  }

  .navbar-list2 a:hover {
    text-decoration: none;
    color: rgba(237, 97, 5, 0.7);
  }

  .drawer-menu-icon {
    width: 100%;
    height: 18px;
    position: absolute;
    top: 90%;
    right: 1%;
    border-bottom: 1px solid #feb001;
  }

  .drawer-menu-icon img {
    width: 36px;
    height: 100%;
    float: right;
  }

  .drawer-icons img {
    width: 40px;
    height: 40px;
  }

  .drawer-logo {
    width: 65px;
    height: 65px;
  }

  .drawer-logo img {
    width: 65px;
    height: auto;
  }

  .app-header {
    height: 65px;
  }
}
</style>