export default {
  state: {
    adminUser: { email: 'frida@mail.se', password: 'losen123', loggedIn: false},
    loggedIn: '',
  },
  getters: {
    adminUser: state => state.adminUser,
    error: state => state.error
  },
  mutations: {
    SIGN_IN: (state, user) => {
      if(user.email === state.adminUser.email && user.password === state.adminUser.password){
        return state.adminUser.loggedIn = true;
      } else {
        return state.adminUser.loggedIn = false
      }
    },
    SIGN_OUT: (state) => {
      return state.adminUser.loggedIn = false;
     
    }
  },
  actions: {
    signIn: ({commit}, user) => {
      commit('SIGN_IN', user)
    }, 
    signOut: ({commit}) => {
      commit('SIGN_OUT')
    }
  },

}
