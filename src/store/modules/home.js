import { SHOW_CONTACT_COMPONENT, SHOW_CHAT_COMPONENT, DEFAULT_SHOW_COMPONENT } from '@/global/Global.js'

const home = {

  state: {
    showComponent: DEFAULT_SHOW_COMPONENT
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
      commit('SET_CHAT_COMPONENT')
      if (contact != null) {
        const chatFriend = { userName: contact.contactName }
        dispatch('CHANGE_CHAT_FRIEND', chatFriend)
      }
    },
    GOTO_CONTACT: ({ dispatch, commit }, contact) => {
      commit('SET_CONTACT_COMPONENT')
    }
  }
}

export default home
