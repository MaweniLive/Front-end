<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="head">
        <h2>Users</h2>
      </div>
      <div class="content">
        <table class="table table-dark table-hover" id="users">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Phone</th>
              <th scope="col">User Role</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="col-lg-12">
        <div class="head">
          <h2>Products</h2>
        </div>
        <div class="content">
          <table class="table table-dark table-hover" id="products">
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Made</th>
                <th scope="col">Quantity</th>
                <th scope="col">Img URL</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
          </table>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getproduct: fetch("https://lj-capstone.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        document.querySelector("#products").innerHTML = "";
        data.forEach((product, index) => {
          document.querySelector("#products").innerHTML += `
          <tbody id="${index}">
              <tr>
                <th scope="row">${product.product_id}</th>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td><img src="${product.imgURL}" style="width="100px" height="120px""></td>
                <td>${product.description}</td>
                <td>${product.made}</td>
                <td>${product.quantity}</td>
                <td>R${product.price}</td>
                 </tr>
            </tbody>
          `;
        });
      }),
    getUsers: fetch("https://lj-capstone.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        document.querySelector("#users").innerHTML = "";
        data.forEach((user, index) => {
          document.querySelector("#users").innerHTML += `
          <tbody id="${index}">
              <tr>
                <th scope="row">${user.user_id}</th>
                <td>${user.fullname}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.phone}</td>
                <td>${user.userRole}</td>
                 </tr>
            </tbody>
          `;
        });
      }),
  },
};
</script>
<style></style>