import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//路由懒加载

const routes = [
    {
        path: "/",
        redirect: '/home',
    },
    {
    path: "/home",
    name: "home",
    component: resolve => require(['@/views/home/index.vue'], resolve),
   },
   {
    path: "/ticketFolder",
    name: "ticketFolder",
    redirect: '/ticketFolder/input',
    component: resolve => require(['@/views/ticketFolder/index.vue'], resolve),
    children:[
        {
            path:'/ticketFolder/input',
            name: 'inputInvoice',
            component: resolve => require(['@/views/ticketFolder/inputInvoice.vue'], resolve)
        },
        {
            path:'/ticketFolder/output',
            name: 'outputInvoice',
            component: resolve => require(['@/views/ticketFolder/outputInvoice.vue'], resolve)
        }
    ]
   },
   {
    path: "/incomes",
    name: "incomes",
    redirect: '/incomes/inspection',
    component: resolve => require(['@/views/incomes/index.vue'], resolve),
    children:[
        {
            path:'/incomes/inspection',
            name: 'inspection',
            component: resolve => require(['@/views/incomes/inspection.vue'], resolve)
        },
        {
            path:'/incomes/comparison',
            name: 'comparison',
            component: resolve => require(['@/views/incomes/comparison.vue'], resolve)
        }
    ]
   },
   {
    path: "/outputs",
    name: "outputs",
    redirect: '/output/invoiceApply',
    component: resolve => require(['@/views/outputs/index.vue'], resolve),
    children:[
        {
            path:'/output/invoiceApply',
            name: 'invoiceApply',
            component: resolve => require(['@/views/outputs/invoiceApply.vue'], resolve)
        },
        {
            path:'/output/invoiceTitle',
            name: 'invoiceTitle',
            component: resolve => require(['@/views/outputs/invoiceTitle.vue'], resolve)
        }
    ]
   },
   {
      path: '*',
      name: 'err',
      component: resolve => require(['@/views/error/404.vue'], resolve)
   }
]
const router = new Router({
  routes 
})
//路由拦截器
// vueRouter.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   const whiteList = ['/login', '/autuoLogin']// 不重定向白名单
//   const accessToken = sessionStorage.getItem('token') // 获取浏览器缓存的用户信息
//  if (localStorage.userInfo) {
//     if (to.path === '/login') {
//       next({ path: '/' })
//     }
//     if (to.path === '/404' || to.path === '/' || to.path === '/login') {
//       next('/login')
//     } else {
//       next()
//    }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next('/login')
//     }
// }
export default router