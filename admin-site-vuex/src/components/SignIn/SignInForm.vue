<template>
<div class="card">
  <h5 class="card-header info-color white-text text-center py-4">
    <strong>Sign in</strong>
  </h5>
  <!--Card content-->
  <div class="card-body px-lg-5 pt-0">
    <!-- Form -->
    <form class="text-center" style="color: #757575;" @submit.prevent="SignIn">
      <!-- Email -->
      <div class="md-form">
        <input type="email" id="email" class="form-control" v-model="this.email">
        <label for="email">E-mail</label>
      </div>
      <!-- Password -->
      <div class="md-form">
        <input type="password" id="password" class="form-control" v-model="this.password">
        <label for="password">Password</label>
      </div>
      <!-- Sign in button -->
      <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
    </form>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SignInForm',
  data(){
    return {
      email:'',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['adminUser'])
  }
}
</script>

<style scoped>

.btn-rounded {
  border-radius: 10rem;
}

</style>