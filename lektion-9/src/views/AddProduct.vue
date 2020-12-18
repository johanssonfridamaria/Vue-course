<template>
  <div class="container my-5 py-5 z-depth-1">
    <!--Section: Content-->
    <section class="text-center">
      <!-- Section heading -->
      <h3 class="font-weight-bold mb-5">Product Details</h3>

      <div class="row">
        <div class="col-lg-5 text-center text-md-left">
          <div class="d-flex align-items center mb-4">
            <label for="name" class="mr-4">Name</label>
            <input
              type="text"
              id="name"
              v-model="product.name"
              class="form-control col-9 ml-auto"
            />
          </div>

          <div class="d-flex align-items center mb-4">
            <label for="price" class="mr-4">Price</label>
            <input
              type="text"
              id="price"
              v-model="product.price"
              class="form-control col-9 ml-auto"
            />
          </div>

          <div class="d-flex align-items center mb-4">
            <label for="short" class="mr-4">Short descr..</label>
            <input
              type="text"
              id="short"
              v-model="product.short"
              class="form-control col-9 ml-auto"
            />
          </div>

          <div class="d-flex align-items center mb-4">
            <label for="desc" class="mr-4">Description</label>
            <textarea
              id="desc"
              cols="30"
              row="10"
              v-model="product.desc"
              class="form-control col-9 ml-auto"
            />
          </div>

          <div class="d-flex align-items center mb-4">
            <label for="image" class="mr-4">Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              class="col-9 ml-auto"
              @change="handleFileUpload"
            />
          </div>

          <section class="color">
            <div class="mt-5">
              <div class="row mt-3">
                <div class="col-md-12 text-center text-md-left text-md-right">
                  <button class="btn btn-primary btn-rounded" @click="onAdd">
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    <!--Section: Content-->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ManageProduct",
  data() {
    return {
      product: {
        name: "",
        price: "",
        short: "",
        desc: "",
        image: "",
      },
      // file: "",
    };
  },
  methods: {
    handleFileUpload(e) {
      // console.log(e.target.files[0]);
      this.product.image = e.target.files[0];
    },
    ...mapActions(["addProduct"]),
    onAdd() {
      console.log(this.product);
      this.addProduct(this.product);
    },
  },
};
</script>

<style>
</style>