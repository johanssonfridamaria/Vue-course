import axios from '@/axios'
import router from '@/router'

export default {
  state: {
    userToken: null,
    loggedIn: false,
  },
  getters: {
    loggedIn: state => state.loggedIn,
  },
  mutations: {
    SET_USER: (state, token) => {
      if (token) {
        state.userToken = token
        state.loggedIn = true
      } else {
        state.userToken = null
        state.loggedIn = false
      }
    },
    CHECK_USER: state => {
      try {
        let token = localStorage.getItem('token')
        if (token) {
          state.userToken = token
          state.loggedIn = true
        } else {
          state.userToken = null
          state.loggedIn = false
        }
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  actions: {
    login: ({ commit }, payload) => {
      console.log(payload.route)
      axios.post('/users/login', payload.user)
        .then(res => {
          if (res.status === 200) {
            // console.log(res);
            localStorage.setItem('token', res.data.token)
            commit('SET_USER', res.data.token)

            if (payload.route) {
              router.push(payload.route)
            } else {
              router.push('/')
            }
          }
        })
    },
    logout: ({ commit }) => {
      try {
        let token = localStorage.getItem('token')
        if (token) {
          localStorage.removeItem('token')
          const _token = null
          commit('SET_USER', _token)
        }
      }
      catch (err) {
        console.log('Not logged in' + err)
      }
    },
    checkUser: ({ commit }) => {
      commit('CHECK_USER')
    },
    register: async ({ dispatch }, _user) => {
      const user = {
        email: _user.email,
        password: _user.password
      }
      await axios.post('/users/register', _user)
      dispatch('login', { user })
    }
  },
}
