// 理解
// 1、状态有三个成功（fulfilled），失败（rejected），处理中（pending）
// 2、new promise时， 需要传递一个函数，且函数立即执行；
// 3、函数接受两个参数resolve和reject
// 4、promise默认状态为pending
// 5、一个为value为保存成功状态的值，一个reason为保存失败状态的值
// 6、状态顺序一规定，且方向不变。pending到rejected或者pending到fulfilled
// 7、实例必须有then函数且这个函数接收两个参数（函数）成功执行和失败执行

// 实现
// 状态定义
const _pending = 'PENDINNG';
const _fulfilled = 'FULFILLED';
const _rejected = 'REJECTED';
class _Promise {
  constructor(cb) {
    // 默认状态
    this.status = _pending;
    // 存储成功状态
    this.value = undefined;
    // 存储失败状态
    this.reason = undefined;
    // 存放成功的回调
    this.onResolveCallbacks = [];
    // 存放失败的回调
    this.onRejectCallbacks = [];

    // 成功调用此方法
    let resolve = (value) => {
      // 状态为pending时才能更新
      if (this.status === _pending) {
        this.status = _fulfilled;
        this.value = value;
        // 依次处理函数执行
        // console.log(1,this.onResolveCallbacks,this.onRejectCallbacks,this.status);
        this.onResolveCallbacks.forEach((fn) => fn());
      }
    };

    // 失败调用此方法
    let reject = (value) => {
      if (this.status === _pending) {
        this.status = _rejected;
        this.value = value;
        this.onRejectCallbacks.forEach((fn) => fn());
      }
    };

    try {
      cb(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(fulfilled, rejected) {
    if (this.status === _fulfilled) {
      fulfilled(this.value);
    }
    if (this.status === _rejected) {
      rejected(this.value);
    }
    // console.log(2,this.onResolveCallbacks,this.onRejectCallbacks,this.status);

    if (this.status === _pending) {
      this.onResolveCallbacks.push(() => {
        fulfilled(this.value);
      });
      this.onRejectCallbacks.push(() => {
        rejected(this.reason);
      });
    }
    return this;

  }
}

// import _Promise from './plugins/Promise';

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
export default _Promise;
