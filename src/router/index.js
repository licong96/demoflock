import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Addflock from '@/page/Addflock'
import Withdraw from '@/page/Withdraw'
import Operation from '@/page/Operation'
import Feedback from '@/page/Feedback'

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
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: Withdraw
    },
    {
      path: '/operation',
      name: 'operation',
      component: Operation
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    }
  ]
})
