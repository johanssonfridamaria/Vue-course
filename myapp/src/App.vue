<template>
  <div id="app">
    <navbar />
    <hero />
    <appfooter />
  </div>
</template>

<script>
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Hero from './components/Hero';

export default {
  name: "App",
  components: {
    Navbar,
    appfooter: Footer,
    Hero,
  },
};
</script>

<style>
</style>
