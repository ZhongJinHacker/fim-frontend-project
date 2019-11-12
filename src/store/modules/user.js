import { chatRecord } from '@/api/userRequest'
import GlobalInfo from '../../global/GlobalInfo'

const user = {

  state: {
    chatRecordMap: new Map(),
    currentChatFriendId: ''
  },

  mutations: {
    SET_CHAT_REOCRD: (state, obj) => {
      const friendId = obj.friendId
      const chatRecord = obj.chatRecord
      state.chatRecordMap.set(friendId, chatRecord)
    },
    SET_CHAT_FRIEND: (state, friendId) => {
      state.currentChatFriendId = friendId
    }
  },

  actions: {
    async CHAT_RECORD ({ commit }, chatRecordBo) {
      const response = await chatRecord(chatRecordBo)
      const obj = response.obj
      commit('SET_CHAT_REOCRD', obj)
    },

    CHANGE_CHAT_FRIEND ({ commit }, friendId) {
      console.log('CHANGE_CHAT_FRIEND: ' + friendId)
      commit('SET_CHAT_FRIEND', friendId)
    }
  }
}

export default user
