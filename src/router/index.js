import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Addflock from '@/page/Addflock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addflock',
      name: 'addflock',
      component: Addflock
    }
  ]
})
