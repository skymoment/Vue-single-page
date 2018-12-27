
// template 布局模板:
// main_layout(带侧边栏、导航布局)
// default(默认布局单页面布局)
const t_main_layout = 'main_layout'
const t_default = 'default'

const defalutRouters = [
  {
    path: '/',
    name: '登录',
    component: t_default,
  },
  {
    path: '/404',
    name: '登录',
    component: t_default,
  },
  {
    path: '/insurance',
    name: '保险',
    component: t_main_layout,
    children: [
      {
        path: '/health',
        name: '健康保险',
        component: t_default
      },{
        path: '/accident',
        name: '意外保险',
        component: t_default
      },{
        path: '/life',
        name: '人寿保险',
        component: t_default
      },{
        path: '/car',
        name: '车险',
        component: t_default
      }
    ]
  },
  {
    path: '/manageMoney',
    name: '理财',
    component: t_main_layout,
    children: [
      {
        path: '/stock',
        name: '股票',
        component: t_default
      },{
        path: '/fund',
        name: '基金',
        component: t_default
      },{
        path: '/bank',
        name: '银行理财',
        component: t_default
      },{
        path: '/gold',
        name: '黄金',
        component: t_default
      }
    ]
  }
]