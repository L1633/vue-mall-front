// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// A modern alternative to CSS resets
import 'normalize.css/normalize.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss'

Vue.use(ElementUI);

import axios from 'axios';
Vue.prototype.axios = axios;

axios.defaults.baseURL = 'http://192.168.1.120/api/'; //指定全局访问url   php服务器

// axios.defaults.baseURL = 'http://192.168.1.102:3000/'; //指定全局访问url node服务器

// 设置头
axios.defaults.headers.common['Authorization'] = store.state.token;

// 添加请求拦截器
axios.interceptors.request.use( config => {
  // 在发送请求之前做些什么
  //判断是否存在token，如果存在将每个页面header都添加token
  if (store.state.token) {
    config.headers.common['Authorization'] = store.state.token;
  }
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit('del_token');
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  });



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
