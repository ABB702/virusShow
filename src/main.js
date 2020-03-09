import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import scroll from 'vue-seamless-scroll'
import Echarts from 'echarts'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:3000/'

Vue.use(scroll)
Vue.prototype.$echarts = Echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
