import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/pages/LoginPage'

Vue.use(Router)

const constantRouteArray = [
  {
    path: '/',
    name: 'HomePage',
    component: HelloWorld,
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
