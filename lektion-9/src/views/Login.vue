<template>
  <div class="container mt-5">
    <form
      class="text-center border border-light p-5 col-6 mx-auto"
      @submit.prevent="onSub"
    >
      <p class="h4 mb-4">Sign in</p>

      <!-- Email -->
      <input
        type="email"
        id="email"
        class="form-control mb-4"
        placeholder="E-mail"
        v-model="email"
      />

      <!-- Password -->
      <input
        type="password"
        id="password"
        class="form-control mb-4"
        placeholder="Password"
        v-model="password"
      />

      <!-- Sign in button -->
      <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

      <!-- Register -->
      <p>
        Not a member?
        <router-link to="/register">Register</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    onSub() {
      if (this.email != "" && this.password != "") {
        let user = {
          email: this.email,
          password: this.password,
        };
        let route = this.$route.query.redirect;
        // console.log(route);
        this.login({ user, route });
        this.email = "";
        this.password = "";

        // this.$router.push(route);
      }
    },
  },
};
</script>

<style>
</style>