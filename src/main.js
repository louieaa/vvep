import { createApp } from 'vue';
import App from './App.vue';

// 全局样式
import 'styles/index.scss';

// element3
import element3 from 'plugins/element3';

// router
import router from '@/router';

// store
import store from '@/store';
// console.log('%c 🥟 promise: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', p);

createApp(App).use(element3).use(router).use(store).mount('#app');
