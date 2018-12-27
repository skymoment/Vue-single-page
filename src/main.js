import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// 使用 Vuetify 移动端框架
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
