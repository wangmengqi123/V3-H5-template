<template>
  <section>
    <span class="title">Varlet</span>
    <var-space :size="[10, 10]" class="space">
      <var-button @click="goPage('/shopping')">商城入口</var-button>
      <var-button @click="goPage('/chartsMap')" type="primary">地图</var-button>
      <var-button type="info">天气</var-button>
      <var-button type="success">成功按钮</var-button>
      <var-button type="warning">警告按钮</var-button>
      <var-button type="danger">危险按钮</var-button>
    </var-space>
  </section>
  <section>
    <var-swipe class="swipe-example" navigation="hover">
      <var-swipe-item>
        <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
      </var-swipe-item>
    </var-swipe>
  </section>
  <!-- <tabBox @change="handlerChange">
 
  </tabBox> -->
  <dragDemo />
  <!-- <section>
    <span class="title">Vant</span>
    <div class="demo">
      <van-button type="primary">主要按钮</van-button>
      <van-button type="success">成功按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
  </section>
  <section>
    <span class="title">NutUI</span>
    <div class="demo">
      <nut-button type="primary">主要按钮</nut-button>
      <nut-button type="info">信息按钮</nut-button>
      <nut-button type="default">默认按钮</nut-button>
      <nut-button type="danger">危险按钮</nut-button>
      <nut-button type="warning">警告按钮</nut-button>
      <nut-button type="success">成功按钮</nut-button>
    </div>
  </section>
  <section>
    <span class="title">Quark</span>
    <div class="demo">
      <quark-button>默认按钮</quark-button>
      <quark-button type="primary">主要按钮</quark-button>
      <quark-button type="success">成功按钮</quark-button>
      <quark-button type="danger">危险按钮</quark-button>
      <quark-button type="warning">警告按钮</quark-button>
    </div>
  </section> -->
</template>

<script setup name="DemoPage" lang="tsx">
import 'quarkd/lib/button';
// import tabBox from './components/tabBox.vue';
import dragDemo from './components/drag-demo.vue';
const router = useRouter();
const goPage = (path) =>{
  router.push({ path: path });
}
// const handlerChange = (msg) => {
//   console.log(msg)
// }
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';

section {
  .title {
    display: inline-block;
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: 500;
  }

  &:nth-child(n) {
    .title {
      margin-top: 20px;
    }
  }

  &:first-child {
    .title {
      margin-top: 0;
    }
  }

  ::v-deep(.var-space) {
    margin-bottom: 10px !important;
  }
}

.demo {
  > :nth-child(n) {
    margin-right: 20px;
    margin-bottom: 20px;
  }
}

.swipe-example {
  height: 320px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
