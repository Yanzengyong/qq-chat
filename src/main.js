import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/css/index.scss'
import tools from './packages'
import moment from 'moment'

Vue.use(tools)

Vue.prototype.$moment = moment

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
