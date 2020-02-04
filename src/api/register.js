import request from '@/utils/request'

export function register (username, password) {
  let data = { 'userName': username, 'password': password }
  return request({
    url: '/chat/register',
    data,
    method: 'post'
  })
}
