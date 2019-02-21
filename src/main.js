import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import 'vue-loading-overlay/dist/vue-loading.css'

import px2rem from './utils/rem'
px2rem()

import ajax from './ajax'
Vue.prototype.$ajax = ajax

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
