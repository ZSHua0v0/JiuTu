import compression from 'vite-plugin-compression'

export default defineNuxtConfig({
    site: {
        url: 'https://jiutucloud.com'
    },
    compatibilityDate: '2025-05-05',
    devtools: false,

    modules: ['@pinia/nuxt', '@nuxt/content', '@nuxtjs/i18n','@nuxtjs/sitemap'],

    components: {
        dirs: ['~/components']
    },

    i18n: {
        strategy: 'prefix_except_default',
        defaultLocale: 'zh',
        lazy: true,
        langDir: 'i18n/locales',
        locales: [
            {code: 'zh', name: '简体中文', file: 'zh.json'},
            {code: 'zh-Hant', name: '繁體中文', file: 'zh-Hant.json'},
            {code: 'en', name: 'English', file: 'en.json'}
        ],
        vueI18n: './i18n.config.ts',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // 只在根路径重定向
        },
        // 其他配置...
        pages: {
            index: {
                zh: '/',
                en: '/en',
                'zh-Hant': '/zh-Hant'
            },
            FastRegister: {
                zh: '/FastRegister',
                en: '/en/FastRegister',
                'zh-Hant': '/zh-Hant/FastRegister'
            },
            GlobalAlibaba: {
                zh: '/GlobalAlibaba',
                en: '/en/GlobalAlibaba',
                'zh-Hant': '/zh-Hant/GlobalAlibaba'
            },
            ProductDeals: {
                zh: '/ProductDeals',
                en: '/en/ProductDeals',
                'zh-Hant': '/zh-Hant/ProductDeals'
            },
            Solutions: {
                zh: '/Solutions',
                en: '/en/Solutions',
                'zh-Hant': '/zh-Hant/Solutions'
            },
            tags: {
                zh: '/tags',
                en: '/en/tags',
                'zh-Hant': '/zh-Hant/tags'
            },
            privacy: {
                zh: '/privacy',
                en: '/en/privacy',
                'zh-Hant': '/zh-Hant/privacy'
            },
            'CaseStudies/index': {
                zh: '/CaseStudies',
                en: '/en/CaseStudies',
                'zh-Hant': '/zh-Hant/CaseStudies'
            },
            // 成功案例 slug 页（静态内容路径）
            'CaseStudies/amused-group': {
                zh: '/CaseStudies/amused-group',
                en: '/en/CaseStudies/amused-group',
                'zh-Hant': '/zh-Hant/CaseStudies/amused-group'
            },
            'CaseStudies/bluemap': {
                zh: '/CaseStudies/bluemap',
                en: '/en/CaseStudies/bluemap',
                'zh-Hant': '/zh-Hant/CaseStudies/bluemap'
            },
            'CaseStudies/nemo': {
                zh: '/CaseStudies/nemo',
                en: '/en/CaseStudies/nemo',
                'zh-Hant': '/zh-Hant/CaseStudies/nemo'
            },
            'CaseStudies/yunpai': {
                zh: '/CaseStudies/yunpai',
                en: '/en/CaseStudies/yunpai',
                'zh-Hant': '/zh-Hant/CaseStudies/yunpai'
            },

            'guide/index': {
                zh: '/guide',
                en: '/en/guide',
                'zh-Hant': '/zh-Hant/guide'
            },
            // 使用指南 slug 页
            'guide/ddh': {
                zh: '/guide/ddh',
                en: '/en/guide/ddh',
                'zh-Hant': '/zh-Hant/guide/ddh'
            },
            'guide/domain': {
                zh: '/guide/domain',
                en: '/en/guide/domain',
                'zh-Hant': '/zh-Hant/guide/domain'
            },
            'guide/ec2-bt': {
                zh: '/guide/ec2-bt',
                en: '/en/guide/ec2-bt',
                'zh-Hant': '/zh-Hant/guide/ec2-bt'
            },
            'guide/ecs': {
                zh: '/guide/ecs',
                en: '/en/guide/ecs',
                'zh-Hant': '/zh-Hant/guide/ecs'
            },
            'guide/ena': {
                zh: '/guide/ena',
                en: '/en/guide/ena',
                'zh-Hant': '/zh-Hant/guide/ena'
            },
            'guide/sas': {
                zh: '/guide/sas',
                en: '/en/guide/sas',
                'zh-Hant': '/zh-Hant/guide/sas'
            }
        }
    },
    target: 'static',
    nitro: {
        compatibilityDate: '2025-05-16'
    },
    vite: {
        plugins: [
            compression({
                algorithm: 'gzip',      // 支持 gzip、brotliCompress 等
                ext: '.gz',             // 默认 .gz
                threshold: 1,        // 超过 1kb 才压缩
                deleteOriginFile: false // 是否删除原始文件
            })
        ]
    },
    sitemap: {
        hostname: 'https://jiutucloud.com', // ✅ 替换为你的真实网址
        i18n: true,
        routes: async () => {
            const localeCodes = locales.map(l => l.code)

            const pages = await serverQueryContent()
                .only(['_path'])
                .find()

            const routes = []
            for (const locale of localeCodes) {
                for (const page of pages) {
                    // 过滤掉下划线路径或不需要的路径
                    if (!page._path.startsWith('/_')) {
                        routes.push(`/${locale}${page._path}`)
                    }
                }
            }
            return routes
        }
    },
    css: ['~/utils/css/main.css'],
    prerender: {
        crawlLinks: true,
        routes: [
            // index
            '/', '/en', '/zh-Hant',

            // FastRegister
            '/FastRegister', '/en/FastRegister', '/zh-Hant/FastRegister',

            // GlobalAlibaba
            '/GlobalAlibaba', '/en/GlobalAlibaba', '/zh-Hant/GlobalAlibaba',

            // ProductDeals
            '/ProductDeals', '/en/ProductDeals', '/zh-Hant/ProductDeals',

            // Solutions
            '/Solutions', '/en/Solutions', '/zh-Hant/Solutions',

            // CaseStudies/index
            '/CaseStudies', '/en/CaseStudies', '/zh-Hant/CaseStudies',

            // CaseStudies 子页
            '/CaseStudies/amused-group', '/en/CaseStudies/amused-group', '/zh-Hant/CaseStudies/amused-group',
            '/CaseStudies/bluemap', '/en/CaseStudies/bluemap', '/zh-Hant/CaseStudies/bluemap',
            '/CaseStudies/nemo', '/en/CaseStudies/nemo', '/zh-Hant/CaseStudies/nemo',
            '/CaseStudies/yunpai', '/en/CaseStudies/yunpai', '/zh-Hant/CaseStudies/yunpai',

            // guide/index
            '/guide', '/en/guide', '/zh-Hant/guide',

            // guide 子页
            '/guide/ddh', '/en/guide/ddh', '/zh-Hant/guide/ddh',
            '/guide/domain', '/en/guide/domain', '/zh-Hant/guide/domain',
            '/guide/ec2-bt', '/en/guide/ec2-bt', '/zh-Hant/guide/ec2-bt',
            '/guide/ecs', '/en/guide/ecs', '/zh-Hant/guide/ecs',
            '/guide/ena', '/en/guide/ena', '/zh-Hant/guide/ena',
            '/guide/sas', '/en/guide/sas', '/zh-Hant/guide/sas'
        ]
    },
    generate: {
        fallback: 'index.html',
    }
})
