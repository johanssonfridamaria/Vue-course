import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Manage from '../views/Manage.vue'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register'
import ProductDetails from '../views/ProductDetails'
import ManageProduct from '../views/ManageProduct'
import AddProduct from '../views/AddProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/details/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/manage/:id',
    name: 'ManageProduct',
    component: ManageProduct,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    meta: { authorize: true }
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct,
    meta: { authorize: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta
  const token = localStorage.getItem('token')

  if (authorize) {

    if (!token) {
      next({ path: '/login', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  }
  next()


})

export default router
