<template>
  <div class="container my-5 py-5 z-depth-1">
    <!--Section: Content-->
    <section class="text-center">
      <!-- Section heading -->
      <h3 class="font-weight-bold mb-5">Product Details</h3>

      <div class="row">
        <div class="col-lg-6">
          <!--Carousel Wrapper-->
          <div
            id="carousel-thumb"
            class="carousel slide carousel-fade carousel-thumbnails"
            data-ride="carousel"
          >
            <!--Slides-->
            <div class="carousel-inner text-center text-md-left" role="listbox">
              <div class="carousel-item active">
                <img :src="product.image" alt="First slide" class="img-fluid" />
              </div>
            </div>
            <!--/.Slides-->

            <!--Thumbnails-->
            <a
              class="carousel-control-prev"
              href="#carousel-thumb"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-thumb"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
            <!--/.Thumbnails-->
          </div>
          <!--/.Carousel Wrapper-->
        </div>

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

          <!-- Add to Cart -->
          <section class="color">
            <div class="mt-5">
              <div class="row mt-3">
                <div class="col-md-12 text-center text-md-left text-md-right">
                  <button
                    class="btn btn-primary btn-rounded"
                    @click="$router.push('/products/details/' + product._id)"
                  >
                    Show Product
                  </button>
                  <button class="btn btn-primary btn-rounded" @click="onSub">
                    Update product
                  </button>
                  <button
                    class="btn btn-danger btn-rounded"
                    @click="deleteProduct(product._id)"
                  >
                    Delete Product
                  </button>
                </div>
              </div>
            </div>
          </section>
          <!-- /.Add to Cart -->
        </div>
      </div>
    </section>
    <!--Section: Content-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ManageProduct",
  props: ["id"],
  methods: {
    ...mapActions(["getProductById", "updateProduct", "deleteProduct"]),
    onSub() {
      this.updateProduct(this.product);
    },
  },
  computed: {
    ...mapGetters(["product"]),
  },
  created() {
    this.getProductById(this.id);
  },
};
</script>

<style>
</style>