// #ifdef VUE3
import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import { http } from '@/utils/http' // 全局挂载引入，配置相关在该index.js文件里修改


export function createApp() {
  const app = createSSRApp(App);
  app.config.globalProperties.$http =http;
  app.use(Pinia.createPinia());
 
  return {
    app,
    Pinia
  };
}
// #endif
