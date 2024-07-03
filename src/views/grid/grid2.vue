<template>
  <div class="grid-x">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
    <div class="item item-7">7</div>
    <div class="item item-8">8</div>
    <div class="item item-9">9</div>
    <!-- <div class="item item-10">10</div>
    <div class="item item-11">11</div>
    <div class="item item-12">12</div> -->
  </div>
</template>

<style lang="scss" scoped>
@import './style/item.css';
.grid-x {
  height: 100vh;
  display: grid;
  grid-template-columns: [a] 100px [b] 100px [c] 100px [d];
  grid-template-rows: [e] 100px [f] 100px [g] 100px [h];
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
  // grid-auto-flow: column;
  // grid-auto-columns: 50px;
  // grid-auto-rows: 50px;
  // row-gap: 10px;
  // column-gap:5px;
  gap: 10px 5px;
  // align-content: end;
  // justify-content: center;
  place-content: center center;
  // align-items:start;
  // justify-items: end;
  // place-items: start end;
}
.item-7 {
  // grid-row-start: 4;
  // grid-row-end: 5;
  grid-row: 4 / 6;

  // grid-column-start: 2;
  // grid-column-end: 3;
  grid-column: 2 / 4;
  z-index: 1; // 覆盖层级
}

.item-8 {
  grid-row: 5;
  grid-column: 3;
  z-index: 2;
}
</style>
