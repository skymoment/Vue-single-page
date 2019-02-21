import VueRouter from 'vue-router'
import Vue from 'vue'

// 注册 VueRouter 组件
Vue.use(VueRouter)

const index = {
  path: '/',
  name: '推广页一',
  component: resolve => {
    require.ensure(
      ['@/pages/spread_1.vue'],
      () => {
        resolve(require('@/pages/spread_1.vue'))
      }
    );
  }
}

const router = new VueRouter({
  routes: [index]
})

router.push('/')

export default router