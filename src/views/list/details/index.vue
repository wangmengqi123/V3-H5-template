<template>
  <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
    <nut-swiper-item>
      <img :src="details.data.imgUrl" />
    </nut-swiper-item>
  </nut-swiper>

  <section class="info">
    <div>
      <span class="price">
        ￥<em>{{ details.data?.price }}.00</em>
      </span>
    </div>
    <div>
      <span>{{ details.data?.title }}</span>
    </div>
  </section>

  <!-- <nut-comment headerType="complex" imagesRows="multi" :images="cmt.images" :videos="cmt.videos" :info="cmt.info"
    ellipsis="6" @clickImages="clickImages">
    <template #comment-labels>
      <img class="nut-comment-header__labels--item"
        src="https://storage.360buyimg.com/imgtools/78925d9440-f9e874d0-e93d-11eb-8e5c-0da9e18a13b1.png"
        style="height: 12px" />
    </template>

    <template #comment-shop-reply>
      <div class="nut-comment-shop">
        <span style="display:inline-block">京东美妆国际：</span>尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性和普遍性。
      </div>
    </template>
  </nut-comment> -->
</template>

<script setup lang="ts">
import { detailsData } from '../data';
const router = useRouter();
const page = ref(1);
let details = reactive<any>({ data: {} });
import { reactive, ref, onMounted } from 'vue';
// import Taro from '@tarojs/taro';
let cmt = ref({});
// onMounted(() => {
//   Taro.request({
//     url: 'https://storage.360buyimg.com/nutui/3x/comment_data.json', //仅为示例，并非真实的接口地址
//     success: function (res) {
//       cmt.value = res.data.Comment;
//     }
//   });
// });
const clickImages = (imgs) => {
  console.log('进行图片展示', imgs);
};
watch(
  () => router,
  (val) => {
    details.data = detailsData.find((_item, index) => index == parseInt(val.currentRoute.value.query.id as string));
  },
  { deep: true, immediate: true },
);
</script>

<style lang="scss" scoped>
.nut-swiper-item {
  line-height: 500px;

  img {
    width: 100%;
    height: 100%;
  }
}

.info {
  padding: 20px;

  .price {
    color: #f2270c;
    display: inline-block;
    font-size: 32px;

    em {
      font-size: 56px;
      font-style: normal;
    }
  }
}
</style>
