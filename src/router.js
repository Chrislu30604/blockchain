import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Donate from './views/Donate.vue'
import Launch from './views/Launch.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate
    },
    {
      path: '/launch',
      name: 'launch',
      component: Launch
    }
  ]
})
