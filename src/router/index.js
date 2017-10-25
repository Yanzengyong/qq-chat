import Vue from 'vue'
import Router from 'vue-router'
import qq from '@/views/qq'
import tim from '@/views/tim'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/qq'
    },
    {
      path: '/qq',
      name: 'qq',
      component: qq
    },
    {
      path: '/tim',
      name: 'tim',
      component: tim
    }
  ]
})
