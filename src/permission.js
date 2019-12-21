import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import GlobalInfo from './global/GlobalInfo'

const whiteList = ['/login', '/authredirect', '/register']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (isLogin()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
    NProgress.done()
  } else {
    console.log('from', from)
    console.log('to', to)
    // 在免登录白名单，直接进入
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      Message.error('验证失败,请重新登录')
      // 否则全部重定向到登录页
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

function isLogin () {
  return GlobalInfo.isLogin
}
