<template>
  <div class="app-wrapper">
    <!-- {{ pos.x }}-{{ pos.y }} -->
    {{ count }}
    <!-- 侧边栏 -->
    <!-- <sidebar class="sidebar-container"></sidebar> -->
    <!-- 内容容器 -->
    <div class="main-container">
      <!-- 顶部导航栏 -->
      <navbar />
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref, toRefs,readonly,watchEffect,isProxy,toRaw,markRaw,isReactive,shallowReactive } from 'vue';
import AppMain from './components/AppMain.vue';
import Navbar from './components/Navbar.vue';
// import Sidebar from "./components/Sidebar/index.vue";

function useMousePostion() {
  let pos = reactive({
    x: 0,
    y: 0,
  });

  onMounted(() => {
    // Add Event Listener
    window.addEventListener('mousemove', (e) => {
      let { x, y } = e;
      pos.x = x;
      pos.y = y;
    });
  });

  return pos;
}

const pos = toRefs(useMousePostion());

const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

// 改变状态本身的性质是响应式的
state.foo++
// ...但是不转换嵌套对象
// isReactive(state.nested) // false
console.log('%c 🥜 isReactive(state.nested): ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', isReactive(state));
state.nested.bar++ // 非响应式
console.log('%c 🍚 state: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', state);

// const foo = markRaw({
//   nested: {}
// })

// const a = foo.nested

// const bar = reactive({
//   // 虽然 `foo` 被标记为原始，foo.nested 不是。
//   nested: foo.nested
// })
// console.log('%c 🍔 bar: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', reactive(foo));

// console.log(foo.nested === bar.nested,a === foo.nested) // false


// const aa = {}
// const copy = readonly(aa)
// aa.x =1;

// console.log('%c 🌶 copy: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', copy);

// const foo = {}
// const reactiveFoo = reactive(foo)

// console.log(toRaw(reactiveFoo) === foo,reactiveFoo === foo, foo === foo,reactiveFoo === reactiveFoo) // true

// const foo = markRaw({})
// console.log(isReactive(reactive(foo))) // false

// 嵌套在其他响应式对象中时也可以使用
// const bar = reactive({ foo })
// console.log(isReactive(bar.foo)) // false

// console.log(
//   '%c 🍯 pos: ',
//   'font-size:20px;background-color: #465975;color:#fff;',
//   pos
// );

// const original = reactive({ count: 0 })
// console.log(isProxy(pos));

// const copy = readonly(original)

// watchEffect(() => {
//   // 适用于响应性追踪
//   console.log(copy.count,7666)
// })

// 变更original 会触发侦听器依赖副本
// original.count++

// 变更副本将失败并导致警告
// copy.count++ // 警告!


// comsuming component
// export default {
//   setup() {
//     const { x, y } = useMousePostion();

//     // 响应丢失
//     return { x, y };

//     // 响应丢失
//     return { ...useMousePositon() };

//     // It's work
//     return {
//       pos: useMousePosition(),
//     };
//   },
// };
</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
