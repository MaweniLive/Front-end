<template>
  <div class="container">
    <div class="content" v-for="product in product" :key="product.product_id">
      <div class="row">
        <div class="col-lg-6">
          <div class="about-img">
            <img
              :src="product.imgURL"
              alt=""
              style="width: 500px; height: 520px"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="content">
            <div class="row">
              <div class="col-lg-12">
                <div class="header">
                  <h2 class="galassia-title">{{ product.name }}</h2>
                </div>
                <div class="about-details">
                  <h3 class="about-head">{{ product.descriptoin }}.</h3>
                  <div class="col-lg-12" id="galassia-list">
                    <ul
                      class="px-0"
                      style="list-style-type: none"
                      id="about-lists"
                    >
                      <li>
                        <strong>NAME:</strong><span></span><span></span
                        >{{ product.name }}
                      </li>
                      <li>
                        <strong>Made:</strong><span></span><span></span
                        >{{ product.made }}
                      </li>
                      <li>
                        <strong>Category:</strong><span></span><span></span
                        >{{ product.category }}
                      </li>
                      <li>
                        <strong>Location:</strong><span></span><span></span>ROME
                      </li>
                      <li>
                        <strong>Quantity:</strong><span></span><span></span
                        >{{ product.quantity }}
                      </li>
                    </ul>
                    <button
                      @click="addToCart(product)"
                      class="btn btn-lg ms-2 my-1"
                    >
                      ADD CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    program() {
      return this.$store.state.product;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("updateCart", product);
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
};
</script>
<style></style>