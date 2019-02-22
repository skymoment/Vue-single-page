import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import layer from 'vue-layer'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import px2rem from './utils/rem'
import ajax from './ajax'
import viewLog from './utils/viewLog'

Vue.prototype.$layer = layer(Vue, {
  msgtime: 3
})
Vue.use(Loading)
px2rem()

Vue.prototype.$ajax = ajax
Vue.prototype.$viewLog = viewLog
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
