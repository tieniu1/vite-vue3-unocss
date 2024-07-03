import LocaleCache from '@/utils/localCache'
import localeEn from '@/i18n/en'
import localeZh from '@/i18n/zh'
import localeJa from '@/i18n/ja'
// element
import zhCnEl from 'element-plus/dist/locale/zh-cn.mjs'
import jaEl from 'element-plus/dist/locale/ja.mjs'
import enEl from 'element-plus/dist/locale/en.mjs'
import { createI18n } from 'vue-i18n'
class i18nIn {
  static instance
  constructor() {
    if (!i18nIn.instance) {
      const locale = LocaleCache.getCache('locale')?.name
      i18nIn.instance = createI18n({
        legacy: false, // 设为false 使用 Composition API
        fallbackLocale: 'zh', //切换语言出错,回退的语言
        locale: locale || 'zh',
        messages: {
          en: localeEn,
          zh: localeZh,
          ja: localeJa
        }
      })
      // 获取当前的语言
    }
  }
  // 切换语言可以放到pinia里,使用useI18n().locale切换
  static setLocale = (localeName) => {
    let localeNameObj = {
      en: {
        name: 'en'
      },
      zh: {
        name: 'zh'
      },
      ja: {
        name: 'ja'
      }
    }
    // 在你的组件或相应的场景中
    console.log('setLocale---', localeName)
    // 没有定义语言,默认使用中文
    const currentLocale = localeNameObj[localeName] || localeNameObj.zh
    // 把当前语言设置到locale里
    LocaleCache.setCache('locale', currentLocale)
    i18nIn.instance.global.locale = localeName
  }
  static t = (name) => {
    return i18nIn.instance.global.t(name)
  }
}

new i18nIn()
export default i18nIn

// 获取elementplus 对应的语言包,在App.vue 中切换 element-plus 语言用
export const getElementPlusLocale = () => {
  const localeObj = {
    zh: zhCnEl,
    ja: jaEl,
    en: enEl
  }
  // 设置element plus语言,默认中文
  const localeName = LocaleCache.getCache('locale')?.name || 'zh'

  return localeObj[localeName]
}
