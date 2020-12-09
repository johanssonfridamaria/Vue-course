<template>
  <nav class="navbar navbar-expand navbar-dark primary-color">
  <router-link to="/" class="navbar-brand">Admin-site</router-link>
  <div class="ml-auto">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/" class="nav-link" exact>Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/signIn" class="nav-link" exact>SignIn</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" class="nav-link" exact>Users</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>