
const contact = {

  state: {
    currentContactId: '',
    currentContactName: ''
  },

  mutations: {
    SET_CONTACT_DETAIL: (state, contact) => {
      state.currentContactId = contact.id
      state.currentContactName = contact.userName
    }
  },

  actions: {
    SHOW_CONTACT: ({ commit }, contact) => {
      commit('SET_CONTACT_DETAIL', contact)
    }
  }

}

export default contact
