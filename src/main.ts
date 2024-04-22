import { createApp } from 'vue';
import App from './App.vue';
// import { i18n } from '@/i18n';
import router from '@/router';
import store from '@/store';
import './assets/font/iconfont.css';
import './assets/app.css';
import * as echarts from 'echarts';
const app = createApp(App);
// 将echarts挂载到vue原型上
app.config.globalProperties.$echarts = echarts
// 路由
app.use(router);

// 国际化
// app.use(i18n);

// 状态管理
app.use(store);

app.mount('#app');
