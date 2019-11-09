import { login } from '@/api/login'
import GlobalInfo from '../../global/GlobalInfo'

const user = {
  state: {
    token: '',
    userId: '',
    userNickName: '',
    avatar: ''
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
    },
    SET_USER_INFO: (state, obj) => {
      state.userId = obj.userId
      state.token = obj.token
      state.userNickName = obj.userNickName
      GlobalInfo.isLogin = true
    }
  },

  actions: {
    async Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.pass.trim()
      const response = await login(username, password)
      const obj = response.obj
      commit('SET_USER_INFO', obj)
    }
  }
}

export default user
