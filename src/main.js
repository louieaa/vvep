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

import _Promise from './plugins/Promise';

// let p = new _Promise((resolve, reject) => {
//   console.log('宏任务');
//   setTimeout(() => {
//     console.log('异步任务');

//     if (1 > 2) {
//       resolve('成功');
//     } else {
//       reject('失败');
//     }
//   }, 1000);
// });
// p.then(
//   (res) => {
//     console.log('微任务11');
//   },
//   (rej) => {
//     console.log('微任务22');
//   }
// ).then((res) => {
//   console.log('微任务33');
// });
// p.then().then(res=>{},rej=>{
//   console.log('%c 🥜 rej: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', rej);

// }).then(data=>{
//   console.log(data);
// },err=>{
//   console.log('err',err);
// })

new Promise((resolve, reject) => {
  console.log('宏任务');
  setTimeout(() => {
    console.log('异步任务');
    if (1 > 2) {
      resolve('成功');
    } else {
      reject('失败');
    }
  }, 1000);
})
  .then(
    (res) => {
      console.log('微任务1');
    },
    // (rej) => {
    //   console.log('微任务2');
    // }
  ).catch(() => {
    console.log('catched')
});
// console.log('%c 🥟 promise: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', p);

createApp(App).use(element3).use(router).use(store).mount('#app');
