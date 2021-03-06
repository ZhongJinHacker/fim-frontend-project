import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/LoginPage/index'
import HomePage from '@/pages/HomePage/index'
import RegisterPage from '@/pages/RegisterPage/index'

Vue.use(Router)

const constantRouteArray = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      title: 'login'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta: {
      title: 'register'
    }
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      title: 'home',
      requiresAuth: true
    }
  }
]

export default new Router({
  routes: constantRouteArray
})
