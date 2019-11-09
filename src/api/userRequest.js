import request from '@/utils/request'

export function chatList (chatListReqBo) {
  let data = { 'userId': chatListReqBo.userId }
  return request({
    url: '/chatList',
    data,
    method: 'post',
    headers: {
      'token': chatListReqBo.token
    }
  })
}
