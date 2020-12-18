<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./components/Navigation/Navbar";

export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(["checkUser", "getProducts"]),
  },
  created() {
    this.checkUser();
    this.getProducts();
  },
};
</script>
<style>
</style>
