import Mock from 'mockjs'
import LoginInfo from './login'
import UserInfo from './userRequest'

Mock.mock('http://localhost:8080/login', 'post', () => {
  return LoginInfo.loginRes
})

Mock.mock('http://localhost:8080/chatList', 'post', () => {
  return UserInfo.chatListRes
})

Mock.mock('http://localhost:8080/chatRecord', 'post', () => {
  return UserInfo.chatReordRes
})
