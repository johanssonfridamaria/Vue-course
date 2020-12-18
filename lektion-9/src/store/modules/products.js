import axios from '@/axios'
import router from '@/router'

export default {
  state: {
    products: [],
    product: {}
  },
  getters: {
    products: state => state.products,
    product: state => state.product
  },
  mutations: {
    SET_PRODUCTS: (state, _products) => {
      state.products = _products
    },
    SET_PRODUCT: (state, _product) => {
      state.product = _product
    }
  },
  actions: {
    getProducts: async ({ commit }) => {
      const res = await axios.get('/products')
      commit('SET_PRODUCTS', res.data)
    },
    getProductById: async ({ commit }, id) => {
      const res = await axios.get('/products/' + id)
      commit('SET_PRODUCT', res.data)
    },
    updateProduct: async ({ dispatch }, product) => {
      const _product = {
        name: product.name,
        price: product.price,
        short: product.short,
        desc: product.desc
      }
      let config = {
        headers: {
          //mellanrummet efter bearer är viktigt pga vi splitar i backend
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
      await axios.patch('/products/' + product._id, _product, config)
      dispatch('getProducts')
      router.push('/products/details/' + product._id)
    },
    deleteProduct: async ({ dispatch }, id) => {
      let config = {
        headers: {
          //mellanrummet efter bearer är viktigt pga vi splitar i backend
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
      await axios.delete('/products/' + id, config)
      dispatch('getProducts')
      router.push('/products/')
    },
    addProduct: async ({ dispatch }, product) => {
      // let formData = new FormData();
      // formData.append('image', product.image, product.image.name);
      // formData.append('name', product.name);
      // formData.append('price', product.price);
      // formData.append('short', product.short);
      // formData.append('desc', product.desc);
      console.log(product.image)

      const _product = {
        name: product.name,
        price: product.price,
        short: product.short,
        desc: product.desc,
        image: product.image.name
      }

      let config = {
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
      await axios.post('/products/new', _product, config)
      dispatch('getProducts')
      router.push('/products')
    }
  },
}
