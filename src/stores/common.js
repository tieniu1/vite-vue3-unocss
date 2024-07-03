import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useCommonStore = defineStore('common', () => {
  const i18n = useI18n()
  console.log('message----', i18n.t('global.test'))
  return {}
})
