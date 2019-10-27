import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import HomePage from '@/pages/HomePage'

Vue.use(Router)

const constantRouteArray = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      title: 'home',
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      title: 'login'
    }
  }

]

export default new Router({
  routes: constantRouteArray
})
