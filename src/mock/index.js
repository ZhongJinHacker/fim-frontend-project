import Mock from 'mockjs'
import LoginInfo from './login'
import UserInfo from './userRequest'
import RegisterInfo from './register'

Mock.mock('http://localhost:8080/login', 'post', () => {
  return LoginInfo.loginRes
})

Mock.mock('http://localhost:8080/register', 'post', () => {
  return RegisterInfo.registerRes
})

Mock.mock('http://localhost:8080/chatList', 'post', () => {
  return UserInfo.chatListRes
})

Mock.mock('http://localhost:8080/chatRecord', 'post', () => {
  return UserInfo.chatReordRes
})

Mock.mock('http://localhost:8080/sendMsg', 'post', () => {
  return UserInfo.sendMsgRes
})
