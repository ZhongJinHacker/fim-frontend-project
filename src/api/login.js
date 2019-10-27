import request from '@/utils/request'

export function login (username, password) {
  let data = { 'userName': username, 'password': password }
  return request({
    url: '/login',
    data,
    method: 'post'
  })
}
