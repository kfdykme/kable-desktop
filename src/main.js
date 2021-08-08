import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from "vue-router"
import App from './App.vue'
import Element3 from 'element3' 
import 'element3/lib/theme-chalk/index.css'
const routes = [
    { path: "/", component: App }, 
  ];
  const router = createRouter({
    // 4. 采用hash 模式
    history: createWebHashHistory(),
    // 采用 history 模式
    // history: createWebHistory(),
    routes, // short for `routes: routes`
  });

createApp(App)
.use(router)
.use(Element3)
.mount('#app')
