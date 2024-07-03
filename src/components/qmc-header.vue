<script setup>
import selectLocale from '@/components/select-locale'
import { inject } from 'vue'
const { updateClickNavName } = inject('navName')
const routerObj = {
  1: 'home',
  2: 'contact',
  3: 'about',
  4: 'contact'
}
const handleRouterClick = (value) => {
  updateClickNavName('')
  updateClickNavName(routerObj[value])
}
</script>
<template>
  <header
    class="sticky z-999 top-0 flex h-16 items-center justify-between pl-4 backdrop-blur-sm border border-b-solid border-gray-300"
  >
    <a class="flex items-center gap-2" href="#"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 text-blue-600"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg
      ><span class="text-lg font-semibold text-gray-800">CRM</span></a
    >
    <nav class="flex items-center h-full gap-4">
      <selectLocale></selectLocale>
      <a class="header-item" href="#" @click="handleRouterClick(1)"> {{ $t('global.首页') }} </a>
      <a class="header-item" href="#contact" @click="handleRouterClick(2)">
        {{ $t('global.联系方式') }}
      </a>
      <a class="header-item" href="#" @click="handleRouterClick(3)">
        {{ $t('global.关于我们') }}
      </a>
      <a class="header-item header-item-btn cursor-pointer" @click="handleRouterClick(4)">{{
        $t('global.免费注册')
      }}</a>
    </nav>
  </header>
</template>
<style lang="less" scoped>
.header-item {
  @apply flex items-center text-base font-medium h-full text-gray-600 hover:underline hover:text-gray-400 underline-offset-4;
}
.header-item-btn {
  @apply box-border flex items-center  hover:no-underline text-white border-gray-500 p-3 whitespace-nowrap bg-blue-500 hover:bg-blue-400 hover:text-white;
}
</style>
