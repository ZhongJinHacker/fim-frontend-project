import { login } from '@/api/login'
import GlobalInfo from '../../global/GlobalInfo'

const user = {
  state: {
    name: '',
    avatar: '',
    isLogin: false
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      GlobalInfo.isLogin = true
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
      commit('SET_TOKEN', token)
    }
  }
}

export default user
