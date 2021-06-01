import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';

// import axios from "axios";

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/common/style.css'

import SecondAside from './components/SecondAside.vue'

//注意必须在构建Vue实例之前就将需要的组件注册进去
Vue.component('SecondAside', SecondAside)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
