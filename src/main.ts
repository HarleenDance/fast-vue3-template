/*
 * @Descripttion:
 * @version: 18.1.2
 * @Author: Harleens
 * @Date: 2023-03-04 13:41:47
 * @LastEditors: Harleens
 * @LastEditTime: 2023-03-08 21:25:26
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import piniaStore from './store';
// import DesignForm from 'vue-form-create';
import '/@/styles/index.less';
import '/@/styles/reset.less';
import 'tailwindcss/tailwind.css';
import 'uno.css';

// 支持SVG
import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(router);
app.use(piniaStore);
// app.use(DesignForm);
app.mount('#app');
