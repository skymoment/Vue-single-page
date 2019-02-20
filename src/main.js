import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import px2rem from './utils/rem'
px2rem()

import ajax from './utils/ajax'
Vue.prototype.$ajax = ajax

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
