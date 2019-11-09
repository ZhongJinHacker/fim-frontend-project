import Mock from 'mockjs'
import LoginInfo from './login'

Mock.mock('http://localhost:8080/login', 'post', () => {
  return LoginInfo.loginRes
})
