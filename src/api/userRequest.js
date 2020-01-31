import request from '@/utils/request'

export function chatList (chatListReqBo) {
  let data = { }
  return request({
    url: '/message/chatSummary',
    data,
    method: 'post',
    headers: {
      'Authorization': chatListReqBo.Authorization
    }
  })
}

export function chatRecord (chatRecordBo) {
  let data = { friendAccount: chatRecordBo.friendAccount }
  return request({
    url: '/message/getMsg',
    data,
    method: 'post',
    headers: {
      'Authorization': chatRecordBo.Authorization
    }
  })
}

export function sendMsg (sendMsgBo) {
  let data = { userId: sendMsgBo.userId, friendId: sendMsgBo.friendId, msg: sendMsgBo.msg }
  return request({
    url: '/chatRecord',
    data,
    method: 'post',
    headers: {
      'Authorization': sendMsgBo.token
    }
  })
}

export function contactList (contactListReqBo) {
  let data = { }
  return request({
    url: '/friend/getFriends',
    data,
    method: 'post',
    headers: {
      'Authorization': contactListReqBo.Authorization
    }
  })
}

export function addContact (contact) {
  let data = { 'contactId': contact.contactId }
  return request({
    url: '/addContact',
    data,
    method: 'post',
    headers: {
      'Authorization': contact.token
    }
  })
}
