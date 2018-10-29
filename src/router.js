import VueRouter from 'vue-router'
import Vue from 'vue'

// 注册 VueRouter 组件
Vue.use(VueRouter)

const index = {
  path: '/',
  name: '首页',
  component: resolve => {
    require.ensure(
      ['@/pages/index.vue'],
      () => {
        resolve(require('@/pages/index.vue'))
      }
    );
  }
}

const router = new VueRouter({
  routes: [index]
})

router.push('/')

export default router