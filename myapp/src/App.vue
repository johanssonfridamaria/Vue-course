<template>
  <div id="app">
    <navbar />
    <appfooter />
  </div>
</template>

<script>
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    appfooter: Footer,
  },
};
</script>

<style>
</style>
