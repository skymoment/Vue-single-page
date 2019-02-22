import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue, {
  msgtime: 3
})

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.use(Loading)

import px2rem from './utils/rem'
px2rem()

import ajax from './ajax'
Vue.prototype.$ajax = ajax

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
