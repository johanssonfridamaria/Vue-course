<template>
  <form class="p-5 text-left" @submit.prevent="onSubmit">
    <p class="h4 mb-4 text-left">Add user</p>
    <label for="userEmail">Email</label>
    <input
      type="text"
      id="userEmail"
      class="form-control mb-4"
      v-model="user.email"
    />
    <label for="userName">Name</label>
    <input
      type="text"
      id="userName"
      class="form-control mb-4"
      v-model="user.name"
    />
    <button class="btn btn-info btn-block my-4" type="submit">Add</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      user: {
        email: '',
        name: '',
      },
    };
  },
  methods: {
    ...mapActions(['addUser']),
    onSubmit() {
      this.addUser(this.user);
      this.email = '';
      this.name = '';
    },
  },
};
</script>

<style>
</style>