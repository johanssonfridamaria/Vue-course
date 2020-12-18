<template>
  <div class="container mt-5">
    <!-- Default form register -->
    <form
      class="text-center border border-light p-5 col-8 mx-auto"
      @submit.prevent="onSubmit"
    >
      <p class="h4 mb-4">Sign up</p>

      <div class="form-row mb-4">
        <div class="col">
          <!-- First name -->
          <input
            type="text"
            id="firstName"
            class="form-control"
            placeholder="First name"
            v-model="user.firstName"
          />
        </div>
        <div class="col">
          <!-- Last name -->
          <input
            type="text"
            id="lastName"
            class="form-control"
            placeholder="Last name"
            v-model="user.lastName"
          />
        </div>
      </div>

      <!-- E-mail -->
      <input
        type="email"
        id="email"
        class="form-control mb-4"
        placeholder="E-mail"
        v-model="user.email"
      />

      <!-- Password -->
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
      />

      <!-- Sign up button -->
      <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>

      <!-- Terms of service -->
      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["register"]),
    onSubmit() {
      if (
        this.user.firstName != "" &&
        this.user.lastName != "" &&
        this.user.email != "" &&
        this.user.password != ""
      ) {
        this.register(this.user);
        this.user = {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        };
      }
    },
  },
};
</script>

<style>
</style>