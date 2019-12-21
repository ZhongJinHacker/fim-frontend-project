import { register } from '@/api/register'

const userRegister = {
  state: {

  },
  mutations: {

  },
  actions: {
    async register ({ commit }, registerModel) {
      const username = registerModel.username.trim()
      const password = registerModel.password.trim()
      await register(username, password)
    }
  }
}

export default userRegister
