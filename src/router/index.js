import Vue from 'vue'
import VueRouter from 'vue-router'
import '../plugins/element.js'
import '../css/global.css'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('../components/login.vue') }
]

const router = new VueRouter({
  routes
})

export default router
