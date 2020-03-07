import Vue from 'vue'
import VueRouter from 'vue-router'
import '../plugins/element.js'
import '../css/global.css'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('../components/login.vue') },
  { path: '/home', component: () => import('../components/home.vue') }
]

const router = new VueRouter({
  routes
})
// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  if (!window.sessionStorage.getItem('token')) return next('/login')
  next()
})

export default router
