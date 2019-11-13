import { chatRecord, sendMsg } from '@/api/userRequest'
import GlobalInfo from '../../global/GlobalInfo'

const user = {

  state: {
    chatRecordMap: new Map(),
    currentChatFriendId: '',
    currentChatFriendName: ''
  },

  mutations: {
    SET_CHAT_REOCRD: (state, obj) => {
      const friendId = obj.friendId
      const chatRecord = obj.chatRecord
      state.chatRecordMap.set(friendId, chatRecord)
    },
    SET_CHAT_FRIEND: (state, chatFriend) => {
      state.currentChatFriendId = chatFriend.friendId
      state.currentChatFriendName = chatFriend.userName
    },
    ADD_SEND_CHAT_RECORD: (state, sendMsgBo) => {
      var chatRecord = state.chatRecordMap.get(sendMsgBo.friendId)
      chatRecord.push({ msg: sendMsgBo.msg, isMe: true })
    }
  },

  actions: {
    async CHAT_RECORD ({ commit }, chatRecordBo) {
      const response = await chatRecord(chatRecordBo)
      const obj = response.obj
      commit('SET_CHAT_REOCRD', obj)
    },

    CHANGE_CHAT_FRIEND ({ commit }, chatFriend) {
      commit('SET_CHAT_FRIEND', chatFriend)
    },

    async SEND_MSG ({ commit }, sendMsgBo) {
      await sendMsg(sendMsgBo)
      commit('ADD_SEND_CHAT_RECORD', sendMsgBo)
    }
  }
}

export default user
