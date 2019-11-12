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

export function chatRecord (chatRecordBo) {
  let data = { userId: chatRecordBo.userId, friendId: chatRecordBo.friendId }
  return request({
    url: '/chatRecord',
    data,
    method: 'post',
    headers: {
      'token': chatRecordBo.token
    }
  })
}
