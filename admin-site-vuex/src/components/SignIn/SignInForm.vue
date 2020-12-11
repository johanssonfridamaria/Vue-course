<template>
  <div class="card">
    <h5 class="card-header info-color white-text text-center py-4">
      <strong>Sign in</strong>
    </h5>
    <!--Card content-->
    <div class="card-body px-lg-5 pt-0">
      <!-- Form -->
      <form
        class="text-center"
        style="color: #757575"
        @submit.prevent="onSubmit"
      >
        <!-- Email -->
        <div class="md-form">
          <input type="email" id="email" class="form-control" v-model="user.email" />
          <label for="email">E-mail</label>
        </div>
        <!-- Password -->
        <div class="md-form">
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="user.password"
          />
          <label for="password">Password</label>
        </div>
        <p v-if="error" class="text-danger mt-3">
          Please insert valid email and password
        </p>
        <!-- Sign in button -->
        <button
          class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'SignInForm',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      error: '',
    };
  },
  computed: {
    ...mapGetters(['adminUser']),
  },
  methods: {
    ...mapActions(['signIn']),
    onSubmit() {
      if (this.user.email != '' && this.user.password != '') {
        this.error = false;
        this.signIn(this.user);
        if (this.adminUser.loggedIn === true) {
          this.$router.push('/users');
        } else {
          this.error = true;
        }
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.btn-rounded {
  border-radius: 10rem;
}
</style>