<template>
  <h1>{{ msg }}</h1>
  <h2>{{$store.state.counter}}</h2>
  <el-button type="danger">{{$store.state.counter}}</el-button>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
// 请求
fetch('/api/getUser').then(res=>res.json()).then(data=>{
  console.log('%c 🍥 data: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', data);
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>