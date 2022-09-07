<template>
  <div class="users">
    <h2>Users</h2>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">User_id</th>
          <th scope="col">Full Name</th>
          <th scope="col">Email</th>
          <th scope="col">Passsword</th>
          <th scope="col">Phone</th>
          <th scope="col">User Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.user_id">
          <td>{{ user.user_id }}</td>
          <td>{{ user.fullname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.userRole }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="Products">
    <h2>Products</h2>
    <table class="table table-dark table-hover">
      <tr>
        <th scope="col">Product_id</th>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th scope="col">Description</th>
        <th scope="col">Made</th>
        <th scope="col">Quantity</th>
        <th scope="col">ImgURL</th>
        <th scope="col">Price</th>
      </tr>
      <tr v-for="product in products" :key="product.product_id">
        <td>{{ product.product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.made }}</td>
        <td>{{ product.quantity }}</td>
        <td><img :src="product.ImgURL" alt=""></td>
        <td>{{ product.price }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("Getproducts");
    this.$store.dispatch("GetUsers");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
};
</script>
<style>

</style>