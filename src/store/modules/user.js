import { login } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  },

  actions: {
    async Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.pass.trim()
      const response = await login(username, password)
      const token = response.obj
      setToken(token)
      commit('SET_TOKEN', token)
    }
  }
}

export default user

