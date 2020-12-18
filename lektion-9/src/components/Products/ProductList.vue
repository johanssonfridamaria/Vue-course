<template>
  <div class="row row-cols-1 row-cols-md-3">
    <productCard
      v-for="product in products"
      :key="product._id"
      :product="product"
      :manage="manage"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "./ProductCard";

export default {
  props: ["manage"],
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(["products"]),
  },
};
</script>

<style>
</style>