import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import GlobalInfo from './global/GlobalInfo'

const whiteList = ['/login', '/authredirect']

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
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      Message.error('验证失败,请重新登录')
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

function isLogin () {
  return GlobalInfo.isLogin
}
