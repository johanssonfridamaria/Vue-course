<template>
  <div class="col mb-4">
    <div
      class="card h-100"
      :class="{ 'bg-dark': manage, 'text-white': manage }"
    >
      <div class="view-overlay">
        <img :src="product.image" class="card-img-top" alt="..." />
        <router-link
          :to="{ name: 'ProductDetails', params: { id: product._id } }"
        >
          <div class="mask rgba-white-slight"></div>
        </router-link>
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="mb-3">Price: {{ product.price }} SEK</p>
        <p class="card-text">
          {{ product.short }}
        </p>
        <router-link
          v-if="manage"
          :to="{ name: 'ManageProduct', params: { id: product._id } }"
          type="button"
          class="btn btn-light-blue btn-md"
        >
          Manage Product
        </router-link>
        <router-link
          v-else
          :to="{ name: 'ProductDetails', params: { id: product._id } }"
          type="button"
          class="btn btn-light-blue btn-md"
        >
          Read more
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "manage"],
};
</script>

<style>
</style>