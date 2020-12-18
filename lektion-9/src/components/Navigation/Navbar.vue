<template>
  <!--Navbar -->
  <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
    <div class="container">
      <router-link class="navbar-brand" to="/">LOGO</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products </router-link>
          </li>

          <li class="nav-item" v-if="loggedIn">
            <router-link class="nav-link" to="/manage">Mangage</router-link>
          </li>

          <li class="nav-item" v-if="loggedIn">
            <router-link class="nav-link" to="/add-product"
              >Add Product</router-link
            >
          </li>
        </ul>

        <ul class="navbar-nav ml-auto nav-flex-icons">
          <!-- Shopping cart -->
          <li class="nav-item dropdown">
            <a
              class="nav-link mr-4"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              0 <i class="fas fa-shopping-cart"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right dropdown-default shopping-cart"
            >
              SHOPPINGCART
            </div>
          </li>

          <!-- User settings -->
          <li class="nav-item dropdown" v-if="loggedIn">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-user"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-default">
              <userSettings />
            </div>
          </li>

          <li class="nav-item" v-if="!loggedIn">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--/.Navbar -->
</template>

<script>
import { mapGetters } from "vuex";
import UserSettings from "../User/UserSettings";

export default {
  name: "Navbar",
  components: {
    UserSettings,
  },
  computed: {
    ...mapGetters(["loggedIn"]),
  },
};
</script>

<style scoped>
.shopping-cart {
  min-width: 450px;
}
</style>