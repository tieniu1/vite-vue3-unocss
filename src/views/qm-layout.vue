<template>
  <!-- <div class="container mx-auto p-4">
    <Herder />
    <main mt-20>
    </main>
  </div> -->
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
  </div>
</template>
<script setup>
// import Herder from '@/components/widgets/Header.vue'
</script>

<style lang="less" scoped>
// .grid-x {
//   display: grid;
//   // (1) fr 关键字,如果两列的宽度分别是 1fr 2fr ,代表后者是前者的两倍
//   // grid-template-columns: 1fr 2fr ;

//   // 如果两列的宽度分别是 1fr 1fr, 代表两个相同宽度的列
//   // grid-template-columns: 1fr 1fr

//   // 固定值可以和fr结合使用
//   // grid-template-columns: 100px 1fr 1fr;
// }

// .grid-x {
//   display: grid;

//   // (2) minmax()
//   // minmax() 函数产生一个长度范围,表示长度就在这个范围之中.它接受两个参数,分别为最小值和最大值
//   // minmax(100px,1fr) 表示列宽不小于100px,不大于1fr
//   // grid-template-columns: 1fr 1fr minmax(100px,1fr)
// }

// .grid-x {
//   display: grid;

//   //(3) auto 关键字
//   // auto 关键字表示由浏览器根据其它列的计算自动分配空间
//   // 下行代码中,第二列的宽度,基本上等于该列单元格的最大宽度,除非单元格内容设置了min-width,且这个值大于最大宽度
//   grid-template-columns: 100px auto 100px;
// }

// .grid-x {
//   display: grid;
//   //(4) 网格线的名称
//   // grid-template-columns 属性和 grid-template-rows 属性里面,还可以使用方括号,指定每一根网格线的名字,方便以后引用.
//   grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
//   grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
//   // 指定网格布局为3行3列,因此有4条垂直网格线和4条水平网格线.方括号里面依次是这八条线对应的名字.
//   // 网格线允许同一根线有多个名字,比如 [fifth-line row-5]
// }

// .grid-x {
//   display: grid;
//   // 两栏式布局,只需要1行代码.
//   // grid-template-columns: 70% 30%;
// }
// .grid-x {
// // 间距 gap 是 row-gap 和 column-gap 的合并写法
//   display: grid;
//   grid-template-columns: repeat(3, 100px);
//   grid-template-rows: repeat(3, 100px);
//   // row-gap: 20px; // 行间距
//   // column-gap: 20px; // 列间距
//   gap: 10px 20px; // (10px 20px)行间距/列间距 || (20px) 行间距和列间距都是20px
// }
// .grid-x {
//   margin: 200px;
//   display: grid;
//   grid-template-columns: repeat(3, 100px);
//   grid-template-rows: repeat(3, 100px);
//   // // 划分区域,上面代码划分出9个单元格,areas将其定名为a到i的9个区域,分别对应这9个单元格.
//   // grid-template-areas:
//   //   'a b c'
//   //   'd e f'
//   //   'g h i';
//   // // 多个单元格合并为1个区域的写法:
//   // grid-template-areas:
//   //   'a a a'
//   //   'b b b'
//   //   'c c c';
//   // // 布局实例
//   grid-template-areas:
//     'header header header'
//     'main main sidebar'
//     'footer footer footer';

//   //  // 如果某些区域不需要利用,则使用.表示
//   // grid-template-areas:
//   //   'a . c'
//   //   'd . f'
//   //   'g . i';
//   // 区域的命名会影响到网格线.每个区域的起始网格线,会自动命名为区域名-start,终止网格线叫做区域名-end
// }
// .grid-x {
//   display: grid;
//   grid-template-columns: repeat(3, 100px);
//   grid-template-rows: repeat(3, 100px);
//   // 控制放置顺序,默认是row先行后列.可以设置column先列后行
//   // dense 关键字,表示尽可能紧密填满整个grid容器,即使有空白也会尽可能的填充.
//   // grid-auto-flow: column dense;
//   grid-auto-flow: column dense;
// }
// .grid-x {
//   display: grid;
//   grid-template-columns: repeat(3, 100px);
//   grid-template-rows: repeat(3, 100px);
//   // justify-items 设置单元格内容的水平位置(左中右)
//   // justify-items: stretch;
//   // align-items 设置单元格内容的垂直位置(上中下)
//   // align-items: end;
//   // place-items 是 justify-items 和 align-items 的合并写法,如果忽略第二个值,浏览器认为与第一个值相等
//   place-items: center center;
// }

// .grid-x {
//   height: 100vh;
//   display: grid;
//   grid-template-columns: repeat(3, 100px);
//   grid-template-rows: repeat(3, 100px);
//   // justify-content 设置整个内容区域在容器里面的水平位置(左中右)
//   // justify-content: space-around;
//   // align-content 设置整个内容区域在容器里面的垂直位置(上中下)
//   // align-content: space-around;
//   // place-content 是 justify-content 和 align-content 的合并写法,如果忽略第二个值,浏览器认为与第一个值相等
//   place-content: space-around;
// }

// .grid-x {
//   display: grid;
//   grid-template-columns: repeat(3, 100px);
//   grid-template-rows: repeat(3, 100px);
//   /*
//   有时候,一些项目的的指定位置在现有网格的外部.比如网格只有3列,但某一个项目指定在第5个行.这时,浏览器会自动生成多余的网格,用来放置项目.

//    grid-auto-columns 和 grid-auto-rows 用来设置浏览器自动创建的多余网格的列宽和行高.
//    它的写法与 grid-template-columns 和 grid-template-rows 完全相同.
//    如果不指定这两个属性,浏览器完全根据单元内容的大小决定新增网格的列宽和行高
//   */
//   grid-auto-columns: 50px;
//   grid-auto-rows: 50px;
// }

// grid-template 是 grid-template-rows \ grid-template-columns 和 grid-template-areas的合并写法.
// grid 是 grid-template-rows \ grid-template-columns \ grid-template-areas \grid-auto-rows \ grid-auto-columns grid-auto-flow 六个属性的合并写法.

// 项目属性
/*
  项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。
  grid-column-start属性：左边框所在的垂直网格线
  grid-column-end属性：右边框所在的垂直网格线
  grid-row-start属性：上边框所在的水平网格线
  grid-row-end属性：下边框所在的水平网格线
  */
.grid-x {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  grid-template-areas:
    'header header header'
    'main main sidebar'
    'footer footer footer';
}
// .item-1 {
//   // 左边框是第2根垂直网格线,右边框是第4根垂直网格线
//   // grid-column-start: 1;
//   // grid-column-end: 3;
//   // grid-row-start: 2;
//   // grid-row-end: 4;
//   // 使用网格线名字也一样.和上面的效果相同
//   grid-column-start: header-start;
//   grid-column-end: main-end;
//   grid-row-start: main-start;
//   grid-row-end: footer-end;
// }

// .item-1 {
//   // grid-column-start: 1;
//   // grid-column-end: 3;
//   // span 表示跨越多少个网格,和上面的效果相同
//   grid-column-start: span 3;
// }
// .item-1 {
//   // grid-column 属性是 grid-column-start 和 grid-column-end 的合并写法,
//   // grid-row 属性是 grid-row-start 和 grid-row-end 的合并写法
//   // grid-column: 1 / 3;
//   grid-column: span 2;
//   // grid-row: 2 / 4;
//   // 也可以使用span
//   grid-row: 2 / span 2;

//   // 斜杠 和后面的部分可以省略,默认跨越1个网格
//   // grid-column: 1;
//   // grid-row: 2;
// }
// .item-1 {
//   //  grid-area可以指定项目放在哪一个区域,也可以作为grid-row-start \ grid-column-start \ grid-row-end \ grid-column-end的合并写法
//   // grid-area: sidebar; // 指定区域
//   grid-area: 2 / 3 / 3 / 4; // 指定位置
// }
.item-1 {
  // justify-self 设置单元格内容的水平位置(左中右),跟 justify-items 的用法完全一致,但只对单个项目生效.
  // align-self 设置单元格内容的垂直位置(上中下),跟 align-items 的用法完全一致,但只对单个项目生效.
  // justify-self: start;
  // align-self: start;
  // place-self 是 justify-self 和 align-self 的合并写法,如果忽略第二个值,浏览器认为与第一个值相等
  place-self: start;
}

.item {
  font-size: 64px;
  line-height: normal;
  text-align: center;
  border: 1px solid #e5e4e9;
}

.item-1 {
  background-color: #ef342a;
}

.item-2 {
  background-color: #f68f26;
}

.item-3 {
  background-color: #4ba946;
}

.item-4 {
  background-color: #0376c2;
}

.item-5 {
  background-color: #c077af;
}

.item-6 {
  background-color: #f8d29d;
}

.item-7 {
  background-color: #b5a87f;
}

.item-8 {
  background-color: #d0e4a9;
}

// .grid-x {
// display: grid;
// // 三行三列 行高列高都是100px
// grid-template-columns: 100px 100px 100px;
// grid-template-rows: 100px 100px 100px;

// // 三行三列 百分比
// grid-template-columns: 33.33% 33.33% 33.33%;
// grid-template-rows: 33.33% 33.33% 33.33%;
// }
// .grid-x {
/*
    repeat() 简化重复值
    1.固定重复次数： repeat(n,value) n是重复次数,value是尺
  */
// grid-template-columns: repeat(3, 1fr);
// grid-template-rows: repeat(3, 1fr);

/**
    2.自动填充重复：  auto-fill 和 auto-fit 会根据容器大小和指定的轨道尺寸来自动确定重复的次数.两者的区别
    在于当没有足够空间来放置一个完整轨道时,auto-fill仍然会创建轨道,而auto-fit 则不会.
    repeat(auto-fill,value)
    repeat(auto-fit,value)
  */
// grid-template-columns: repeat(auto-fit, 100px);
// grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
// grid-template-columns: repeat(auto-fill, 100px);

/*
  3. 复杂值
   用逗号分割的值列表
  */
// grid-template-columns: repeat(2, 100px 20px 80px);

// grid-template-rows: repeat(2, 100px);
// }
</style>
