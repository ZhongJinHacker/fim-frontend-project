import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import user from './modules/user'
import register from './modules/register'
import contact from './modules/contact'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    user,
    register,
    contact,
    home
  }
})

export default store
