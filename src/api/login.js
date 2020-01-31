import request from '@/utils/request'

export function login (username, password) {
  let data = { 'username': username, 'password': password }
  return request({
    url: '/auth/login',
    data,
    method: 'post'
  })
}
