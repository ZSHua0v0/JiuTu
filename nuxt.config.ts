export default defineNuxtConfig({
  compatibilityDate: '2025-05-05',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt','@nuxt/content','@nuxtjs/i18n'],

  components: {
    dirs: ['~/components']
  },

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'i18n/locales',
    locales: [
      { code: 'zh', name: '简体中文', file: 'zh.json' },
      { code: 'zh-Hant', name: '繁體中文', file: 'zh-Hant.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // 只在根路径重定向
    }
  },
  prerender: {
    routes: [
      '/', '/ProductDeals', '/FastRegister', '/Solutions', '/CaseStudies', '/guide',
      '/en', '/en/ProductDeals', '/en/FastRegister', '/en/Solutions', '/en/CaseStudies', '/en/guide',
      '/zh-Hant', '/zh-Hant/ProductDeals', '/zh-Hant/FastRegister', '/zh-Hant/Solutions', '/zh-Hant/CaseStudies', '/zh-Hant/guide'
    ]
  },
  nitro: {
    compatibilityDate: '2025-05-16'
  },
  css: ['~/public/assets/css/main.css']
})
