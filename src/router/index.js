import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Addflock from '@/components/Addflock'
import Withdraw from '@/page/Withdraw'
import Operation from '@/page/Operation'
import Help from '@/page/Help'
import Feedback from '@/page/Feedback'
import Myaddgroup from '@/components/Myaddgroup'
import Mybuildgroup from '@/components/Mybuildgroup'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/myaddgroup',
      name: 'myaddgroup',
      component: Myaddgroup
    },
    {
      path: '/mybuildgroup',
      name: 'mybuildgroup',
      component: Mybuildgroup
    }
  ]
})
