<template>
  <el-dropdown @command="handleChangeLocale">
    <span class="flex items-center whitespace-nowrap">
      {{ currentLocale?.label }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in localeList" :key="item.value" :command="item.value">
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import i18nIn from '@/i18n'
import LocaleCache from '@/utils/localCache'
const localeList = ref([
  {
    value: 'zh',
    label: '中文'
  },
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'ja',
    label: '日本語'
  }
])
const getLocateItem = (name) => {
  return localeList.value.filter((item) => item.value === name)[0]
}
const currentLocaleName = LocaleCache.getCache('locale')?.name || 'zh'
const currentLocale = getLocateItem(currentLocaleName)
const handleChangeLocale = (value) => {
  currentLocale.value = localeList.value.filter((item) => item.value === value)[0]
  i18nIn.setLocale(value)
  location.reload()
}
</script>

<style lang="less"></style>
