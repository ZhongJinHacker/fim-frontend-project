import { SHOW_CONTACT_COMPONENT, SHOW_CHAT_COMPONENT } from '@/global/Global.js'

const home = {

  state: {
    showComponent: SHOW_CONTACT_COMPONENT
  },

  mutations: {
    SET_CHAT_COMPONENT: (state) => {
      state.showComponent = SHOW_CHAT_COMPONENT
    },

    SET_CONTACT_COMPONENT: (state) => {
      state.showComponent = SHOW_CONTACT_COMPONENT
    }
  },

  actions: {
    GOTO_CHAT: ({ dispatch, commit }, contact) => {
      const chatFriend = { userName: contact.userName, friendId: contact.contactId }
      commit('SET_CHAT_COMPONENT')
      dispatch('CHANGE_CHAT_FRIEND', chatFriend)
    }
  }
}

export default home
