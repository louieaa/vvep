import { createApp } from 'vue';
import App from './App.vue';

// 全局样式
import 'styles/index.scss';

// router
import router from '@/router';

// store
import store from '@/store';

createApp(App).use(router).use(store).mount('#app');
