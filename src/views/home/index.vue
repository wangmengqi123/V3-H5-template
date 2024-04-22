<template>
  <header class="header">

  </header>
  <!-- <div class="intro-header">
    <div>{{ $t('introduction') }}</div>
    <a href="https://github.com/sunniejs/vue-h5-template.git">
      <Github />
    </a>
  </div> -->
  <nut-cell-group class="supportList">
    <nut-cell v-for="(item, index) in cellList" :key="index" :title="item">
      <template #icon>
        <Check />
      </template>
    </nut-cell>
  </nut-cell-group>
  <!-- <nut-cell-group :title="$t('home.cssMultiLanguage')" class="supportList">
    <nut-cell>
      <div :class="['btn-confirm', locale]"></div>
    </nut-cell>
  </nut-cell-group> -->
  <!-- <div class="btn-wrap">
    <nut-button shape="square" size="small" type="default" @click="changeLang('zh-cn')">
      {{ $t('language.zh') }}
    </nut-button>
    <nut-button shape="square" size="small" type="default" @click="changeLang('en-us')">
      {{ $t('language.en') }}
    </nut-button>
  </div> -->
  <!-- {{ getUserInfo }} -->
</template>

<script lang="ts" setup name="HomePage">
import { outputDate } from '@/api/task'
import { onMounted } from 'vue';
// import { useUserStore } from '@/store/modules/user';
// import { setLang } from '@/i18n';
// import { useI18n } from 'vue-i18n';

// const { locale } = useI18n();

let cellList = ['vue3', 'vite', 'vue-router', 'axios', 'Pinia', 'vue-i18n', 'postcss-px-to-viewport', 'varlet / vant / nutUI', 'eruda'];
// 测试请求
const getData = async () => {
  try {
    const data = await outputDate({})
    console.log(data);
    
  }catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getData()
})
</script>
<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 40px;

  img {
    width: 90px;
    height: 90px;
  }
}

.intro-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 16px;
}

.supportList {
  margin: 0 16px;

  .nut-cell-group__title {
    margin-top: 30px;
  }
}

.btn-wrap {
  margin: 20px;
}

.btn-confirm {
  @include main-lang-bg(302px, 82px, '/@/assets/button', 'confirm.png');
}
</style>
