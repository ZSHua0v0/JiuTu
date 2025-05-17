import zh from './i18n/locales/zh.json'
import en from './i18n/locales/en.json'
import zhHant from './i18n/locales/zh-Hant.json'

export default {
    legacy: false,
    locale: 'zh',
    fallbackLocale: 'zh',
    messages: {
        zh,
        en,
        'zh-Hant': zhHant
    },
    warnHtmlMessage: false,
    escapeParameterHtml: false
}
