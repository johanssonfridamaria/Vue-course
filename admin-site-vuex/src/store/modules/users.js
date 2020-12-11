export default {
  state: {
    users: [
      {
        id: 1,
        email: 'kenth@mail.se',
        name: 'Kenth',
        loggedIn: false
      },
      {
        id: 2,
        email: 'pia@mail.se',
        name: 'Pia',
        loggedIn: false
      },
      {
        id: 3,
        email: 'klara@mail.se',
        name: 'Klara',
        loggedIn: false
      },
      {
        id: 4,
        email: 'arvid@mail.se',
        name: 'Arvid',
        loggedIn: false
      },
    ],
  },
  getters: {
    users: state => state.users
  },
  mutations: {
    ADD_USER: (state, user) => {
      state.users.push({
        id: Date.now(),email: user.email, name: user.name
      })
    },
  DELETE_USER: (state, id) => {
    state.users= state.users.filter(user => user.id !== id)
  }

  },
  actions: {
    addUser: ({commit}, user) => {
      commit('ADD_USER', user)
    },
    deleteUser:({commit}, id) => {
      commit('DELETE_USER', id)
    }
  },

}
