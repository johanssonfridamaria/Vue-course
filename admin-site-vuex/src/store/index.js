import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import adminUser from './modules/adminUser'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    adminUser,
  }
})
