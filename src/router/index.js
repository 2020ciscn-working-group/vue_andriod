import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Manager from '../views/Manager'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Manager',
      name:'Manager',
      redirect:'/Mana',
      component:Manager,
      children: [
        {
          path: '/Mana',
          name: 'Mana',
          component: () => import('../views/Mana.vue')
        },
        {
          path: '/Records',
          name: 'Records',
          component: () => import('../views/Records.vue')
        },
        {
          path: '/Friends',
          name: 'Friends',
          component: () => import('../views/Friends.vue')
        },
        {
          path: '/Message',
          name: 'Message',
          component: () => import('../views/Message.vue')
        }
      ]
    }

  ]
})

