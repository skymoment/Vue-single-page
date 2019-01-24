import VueRouter from 'vue-router'
import Vue from 'vue'

// 注册 VueRouter 组件
Vue.use(VueRouter)

// 导入页面
import index from '@/pages/index'
import main_layout from '@/pages/layout/MainLayout'

const routes = [
  {
    path: '/',
    name: 'main',
    component: main_layout,
    children: [
      {
        path: '/',
        name: 'index',
        component: index
      }
    ]
  }
]

const router = new VueRouter({
  routes: routes
})

let temp = [
  {
    path: '/',
    name: 'main',
    component: main_layout,
    children: [
      {
        path: '/temp',
        name: 'index',
        component: index
      }
    ]
  }]

router.addRoutes(temp)
// router.routes.push(temp)

export default router
