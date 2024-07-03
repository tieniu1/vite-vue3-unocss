<script setup>
import { getElementPlusLocale } from '@/i18n'
const locale = getElementPlusLocale()
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
