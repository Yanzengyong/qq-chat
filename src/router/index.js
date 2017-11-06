import Vue from 'vue'
import Router from 'vue-router'
import personal from '@/views/personal'
import group from '@/views/group'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/personal'
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/group',
      name: 'group',
      component: group
    }
  ]
})
