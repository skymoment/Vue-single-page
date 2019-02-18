import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

// rem
import px2rem from './utils/rem'
px2rem()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
