<template>
  <div>
    <div>
      <router-link to="/">Profile</router-link>
    </div>
    <div class="dropdown-divider"></div>
    <router-link to="/login"
      ><span class="custom-span" @click="logout">Logout</span></router-link
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserSettings",
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style>
</style>