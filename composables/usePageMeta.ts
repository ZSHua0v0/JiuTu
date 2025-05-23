// composables/usePageMeta.ts
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { pageMetaMap } from '@/utils/pageMeta'

export async function usePageMeta() {
    const route = useRoute()
    const { locale } = useI18n()
    const map = await pageMetaMap()

    // ✅ 去掉语言前缀，例如 "/en/abc" -> "/abc"
    const rawPath = route.path.replace(/\/$/, '') || '/'
    const path = rawPath.replace(/^\/(en|zh|zh-Hant)(\/|$)/, '/') || '/'

    const meta = map?.[path]?.[locale.value]


    if (meta) {
        useHead({
            title: meta.title,
            meta: [
                { name: 'description', content: meta.description },
                { name: 'keywords', content: meta.keywords },
            ],
        })
    }
}
