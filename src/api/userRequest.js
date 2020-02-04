import request from '@/utils/request'

export function chatList (chatListReqBo) {
  let data = { }
  return request({
    url: '/chat/message/chatSummary',
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
    url: '/chat/message/getMsg',
    data,
    method: 'post',
    headers: {
      'Authorization': chatRecordBo.Authorization
    }
  })
}

export function sendMsg (sendMsgBo) {
  let data = { userId: '', dstUserId: sendMsgBo.friendId, msg: sendMsgBo.msg }
  return request({
    url: '/chat/message/sendMsg',
    data,
    method: 'post',
    headers: {
      'Authorization': sendMsgBo.Authorization
    }
  })
}

export function contactList (contactListReqBo) {
  let data = { }
  return request({
    url: '/chat/friend/getFriends',
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
    url: '/chat/addContact',
    data,
    method: 'post',
    headers: {
      'Authorization': contact.token
    }
  })
}
