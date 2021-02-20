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
export default _Promise;
