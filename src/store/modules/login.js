import { login } from '@/api/login'
import GlobalInfo from '../../global/GlobalInfo'

const userLogin = {
  state: {
    Authorization: '',
    username: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.Authorization = token
      GlobalInfo.isLogin = true
    },
    SET_NAME: (state, name) => {
      state.username = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_USER_INFO: (state, obj) => {
      state.username = obj.username
      state.Authorization = obj.Authorization
      GlobalInfo.isLogin = true
    }
  },

  actions: {
    async Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password.trim()
      const response = await login(username, password)
      const obj = { 'Authorization': response.data, 'username': username }
      commit('SET_USER_INFO', obj)
    }
  }
}

export default userLogin
