const chatListRes = {
  statusCode: '200',
  message: '成功',
  obj: {
    chatList: [
      { userName: 'tom', lastMsg: '你好1112', friendId: '1001' },
      { userName: 'tom', lastMsg: '你好222', friendId: '1002' },
      { userName: 'jim111', lastMsg: '你好3333', friendId: '1003' },
      { userName: 'tom', lastMsg: '你好4444', friendId: '1004' },
      { userName: 'jim222', lastMsg: '你好555', friendId: '1005' },
      { userName: 'tom', lastMsg: '你好666', friendId: '1006' },
      { userName: 'jim333', lastMsg: '你好777', friendId: '1007' },
      { userName: 'jim4444', lastMsg: '你好777', friendId: '1008' },
      { userName: 'jim3555', lastMsg: '你好777', friendId: '1009' },
      { userName: 'jim666', lastMsg: '你好777', friendId: '10010' },
      { userName: 'jim777', lastMsg: '你好777', friendId: '10011' },
      { userName: 'jim888', lastMsg: '你好777', friendId: '10012' },
      { userName: 'jim9999', lastMsg: '你好777', friendId: '10013' },
      { userName: 'jim1111333', lastMsg: '你好777', friendId: '10014' },
      { userName: 'jim22223233', lastMsg: '你好777', friendId: '10015' },
      { userName: 'jim4444333', lastMsg: '你好777', friendId: '10016' },
      { userName: 'jim5555333', lastMsg: '你好777', friendId: '10017' },
      { userName: 'jim6666333', lastMsg: '你好777', friendId: '10018' }
    ]
  }
}

const chatReordRes = {
  statusCode: '200',
  message: '成功',
  obj: {
    friendId: '1001',
    chatRecord: [
      { msg: '吃了吗', isMe: true },
      { msg: '吃了吗1', isMe: false },
      { msg: '吃了吗2', isMe: true },
      { msg: '吃了吗3', isMe: false },
      { msg: '吃了吗4', isMe: true },
      { msg: '吃了吗5', isMe: false },
      { msg: '吃了吗6', isMe: true },
      { msg: '吃了吗7', isMe: false },
      { msg: '吃了吗8', isMe: false },
      { msg: '吃了吗9', isMe: true },
      { msg: '吃了吗10', isMe: true }
    ]
  }
}

const sendMsgRes = {
  statusCode: '200',
  message: '成功',
  obj: null
}

const contactListRes = {
  statusCode: '200',
  message: '成功',
  obj: {
    contactList: [
      { userName: 'tom', id: '1001' },
      { userName: 'tom1', id: '1002' },
      { userName: 'jim111', id: '1003' },
      { userName: 'tom', id: '1004' },
      { userName: 'jim222', id: '1005' },
      { userName: 'tom', id: '1006' },
      { userName: 'jim333', id: '1007' },
      { userName: 'jim4444', id: '1008' },
      { userName: 'jim3555', id: '1009' },
      { userName: 'jim666', id: '1011' },
      { userName: 'jim777', id: '1012' },
      { userName: 'jim888', id: '1013' },
      { userName: 'jim9999', id: '1014' },
      { userName: 'jim1111333', id: '1015' },
      { userName: 'jim22223233', id: '1016' },
      { userName: 'jim4444333', id: '1017' },
      { userName: 'jim5555333', id: '1018' },
      { userName: 'jim6666333', id: '1019' }
    ]
  }
}

const res = {
  chatListRes,
  chatReordRes,
  sendMsgRes,
  contactListRes
}

export default res
