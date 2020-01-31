import { addContact } from '@/api/userRequest'

const contact = {

  state: {
    currentContactName: ''
  },

  mutations: {
    SET_CONTACT_DETAIL: (state, contact) => {
      state.currentContactName = contact.userName
    }
  },

  actions: {
    SHOW_CONTACT: ({ commit }, contact) => {
      commit('SET_CONTACT_DETAIL', contact)
    },
    async ADD_CONTACT ({ commit }, contact) {
      await addContact(contact)
    }
  }

}

export default contact
