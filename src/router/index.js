import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from 'layouts/index.vue'
export const routes = [
  // {
  //   path: "/",
  //   component:()=> import('views/home.vue')
  // }
  {
    path: "/",
    component: Layout,
  }
];
const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
