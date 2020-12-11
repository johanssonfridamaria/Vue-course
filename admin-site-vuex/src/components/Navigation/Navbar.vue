<template>
  <nav class="navbar navbar-expand navbar-dark primary-color">
    <router-link to="/" class="navbar-brand">Admin Site</router-link>

    <div class="ml-auto">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link
            v-if="!adminUser.loggedIn"
            to="/signIn"
            class="nav-link"
            exact
            >SignIn</router-link
          >
          <a
            v-else
            class="nav-link"
            @click="onSignOut"
            >SignOut</a
          >
        </li>
        <li v-if="adminUser.loggedIn" class="nav-item">
          <router-link to="/users" class="nav-link" exact>Users</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['signOut']),
    onSignOut() {
      this.signOut();
       this.$router.push('/signIn')
    },
  },
  computed: {
    ...mapGetters(['adminUser']),
  },
};
</script>

<style scoped>
</style>