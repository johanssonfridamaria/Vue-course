<template>
  <div class="container mt-5">
    <productList :manage="true" />
  </div>
</template>

<script>
import ProductList from "../components/Products/ProductList";

export default {
  components: {
    ProductList,
  },
};
</script>

<style>
</style>