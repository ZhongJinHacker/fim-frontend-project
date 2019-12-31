import Mock from 'mockjs'
import LoginInfo from './login'
import UserInfo from './userRequest'
import RegisterInfo from './register'

const DOMAIN = ''

Mock.mock(`${DOMAIN}/login`, 'post', () => {
  return LoginInfo.loginRes
})

Mock.mock(`${DOMAIN}/register`, 'post', () => {
  return RegisterInfo.registerRes
})

Mock.mock(`${DOMAIN}/chatList`, 'post', () => {
  return UserInfo.chatListRes
})

Mock.mock(`${DOMAIN}/chatRecord`, 'post', () => {
  return UserInfo.chatReordRes
})

Mock.mock(`${DOMAIN}/sendMsg`, 'post', () => {
  return UserInfo.sendMsgRes
})

Mock.mock(`${DOMAIN}/contactList`, 'post', () => {
  return UserInfo.contactListRes
})
