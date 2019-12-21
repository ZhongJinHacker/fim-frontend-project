import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import user from './modules/user'
import register from './modules/register'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    user,
    register
  }
})

export default store
