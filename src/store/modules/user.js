import { chatRecord, sendMsg } from '@/api/userRequest'

const user = {

  state: {
    chatRecordMap: new Map(),
    currentChatFriendName: ''
  },

  mutations: {
    SET_CHAT_REOCRD: (state, obj) => {
      const friendId = obj.friendId
      const chatRecord = obj.chatRecord
      state.chatRecordMap.set(friendId, chatRecord)
    },
    SET_CHAT_FRIEND: (state, chatFriend) => {
      state.currentChatFriendName = chatFriend.userName
    },
    ADD_SEND_CHAT_RECORD: (state, sendMsgBo) => {
      var chatRecord = state.chatRecordMap.get(sendMsgBo.friendId)
      chatRecord.push({ message: sendMsgBo.msg, isMe: true })
    },
    ADD_RECV_CHAT_RECORD: (state, wsContentRspVo) => {
      const friendId = wsContentRspVo.chatMsg.senderId
      const msg = wsContentRspVo.chatMsg.msg
      var chatRecord = state.chatRecordMap.get(friendId)
      if (chatRecord !== undefined) {
        chatRecord.push({ message: msg, isMe: false })
      }
    }
  },

  actions: {
    async CHAT_RECORD ({ commit }, chatRecordBo) {
      const response = await chatRecord(chatRecordBo)
      const obj = { 'chatRecord': response.data.list, 'friendId': chatRecordBo.friendAccount }
      commit('SET_CHAT_REOCRD', obj)
    },

    CHANGE_CHAT_FRIEND ({ commit }, chatFriend) {
      commit('SET_CHAT_FRIEND', chatFriend)
    },

    async SEND_MSG ({ commit }, sendMsgBo) {
      await sendMsg(sendMsgBo)
      commit('ADD_SEND_CHAT_RECORD', sendMsgBo)
    },

    RECV_MSG ({ commit }, wsContentRspVo) {
      commit('ADD_RECV_CHAT_RECORD', wsContentRspVo)
    }
  }
}

export default user
