<template>
  <div class="container">
    <div class="content">
      <div class="row">
        <div class="col-lg-6">
              <div class="container-fluid">
        <h1>Your Cart<span class="text-white ms-2"><i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-exclamation ms-2"></i></span></h1>
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <h5>CART SUMMARY</h5>
                    <div class="cart-details">
                        <div class="row my-3">
                            <p>Total Amount:</p>
                            <p>Shipping:</p>
                        </div>
                        <div class="row my-3">
                            <p>R{{ calculatePrice }}</p>
                            <p>Delivery</p>
                        </div>
                    </div>
                    <div class="">
                        <button type="submit" class="btn btn-lg my-2" @click="deleteCart(program)">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
          <div class="col-lg-6">
            <div class="box">
              <div class="content">
                <div
                  class="cards"
                  v-for="product in cartproducts"
                  :key="product.id"
                >
                  <img :src="product.imgURL" class="mb-2" alt="food" />
                  <div class="cart-content">
                    <h3 class="ms-5">{{ product.name }}</h3>
                    <p class="d-flex justify-content- gap-3">
                      <span class="ms-5">Subtotal: R{{ product.price }}</span>
                    </p>
                    <button
                      @click="deleteFromCart(product.product_id)"
                      class="btn btn-lg ms-5"
                    >
                      <i class="fa fa-trash"></i>
                      <span class="btn2">Remove</span>
                    </button>
                    <div class="right-bar">
                      <hr />
                    </div>
                  </div>
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
export default {};
</script>
<style></style>