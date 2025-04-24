// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-05-05',
  devtools: { enabled: true },

  // ✅ 启用 Pinia 模块
  modules: ['@pinia/nuxt','@nuxt/content'],

  // ✅ 自动导入 components
  components: {
    dirs: ['~/components']
  },

  // ✅ 全局 CSS
  css: ['~/public/assets/css/main.css']
})