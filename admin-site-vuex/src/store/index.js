import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        email: 'kenth@mail.se',
        name: 'Kenth',
        password: 'losen123', 
        loggedIn: false
      },
      {
        id: 2,
        email: 'pia@mail.se',
        name: 'Pia',
        password: 'losen123', 
        loggedIn: false
      },
      {
        id: 3,
        email: 'klara@mail.se',
        name: 'Klara',
        password: 'losen123', 
        loggedIn: false
      },
      {
        id: 4,
        email: 'arvid@mail.se',
        name: 'Arvid',
        password: 'losen123', 
        loggedIn: false
      },
    ],
    adminUser: { email: 'frida@mail.se', password: 'losen123', loggedIn: false},
    email:'',
    password: '',
    loggedIn: '',

  },
  getters: {
    adminUser: state => state.adminUser,
    users: state => state.users
  },
  mutations: {
    
  },
  actions: {

  },
  modules: {
  }
})
