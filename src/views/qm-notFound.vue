<template>
  <div class="not-found">
    <img class="icon" :src="notfoundImg" />
    <div class="title">
      <!-- <h2>{{ $t('tip.t61') }}</h2>
      <h4>{{ $t('tip.t62') }}</h4>
      <h4>{{ $t('tip.t63') }}</h4> -->
    </div>
  </div>
</template>

<script setup>
import notfoundImg from '@/assets/images/404.png'
</script>

<style lang="less" scoped>
.not-found {
  background-color: #7897f8;
  height: 100%;
  text-align: center;
  .icon {
    margin-top: 15vh;
    width: 500px;
  }
  .title {
    h2 {
      color: #fff;
      font-size: 36px;
      letter-spacing: 4px;
      text-align: center;
      line-height: 120px;
    }
    h4 {
      color: #fff;
      font-size: 18px;
      line-height: 38px;
      text-align: center;
    }
  }
}
</style>
