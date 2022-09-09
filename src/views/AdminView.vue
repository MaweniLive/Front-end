<template>
  <div class="row" id="admin">
    <div class="title d-flex justify-content-center">
      <h2 class="admin-title">Welcome to our admin page</h2>
    </div>
    <div class="col-lg-12">
      <div class="head d-flex justify-content-center">
        <h2>Users</h2>
      </div>
      <div class="content">
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Phone</th>
              <th scope="col">User Role</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody id="users"></tbody>
        </table>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="head d-flex justify-content-center">
        <h2>Products</h2>
      </div>
      <div class="content">
        <table class="table table-dark table-hover">
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
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody id="products"></tbody>
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
          <tbody>
              <tr id="${index}">
                <th scope="row">${product.product_id}</th>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td><img src="${product.imgURL}" style="width="100px" height="120px""></td>
                <td>${product.description}</td>
                <td>${product.made}</td>
                <td>${product.quantity}</td>
                <td>R${product.price}</td>
                <td><button type="btn" class="btn btn-primary rounded-pill">
                  Update
                  </button>
                </td>
                <td>
                 <button type="btn" class="btn btn-primary rounded-pill" @click={deleteProduct(product.product_id)}>
                  Delete
                  </button>
                  </td>
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
          <tbody>
              <tr id="${index}">
                <th scope="row">${user.user_id}</th>
                <td>${user.fullname}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.phone}</td>
                <td>${user.userRole}</td>
                <td><button type="button" class="btn btn-primary">Update</button></td>
                <td><button type="button" class="btn btn-primary" @click="deleteProduct(product.product_id)">Delete</button></td>
                </tr>
         </tbody>
                `;
        });
      }),
    deleteProduct(index) {
      listings.splice(index, 1);
      localStorage.setItem("listings", JSON.stringify(listings));
      readData(listings);
    },
  },
};
</script>
<style>
table{
  object-fit: fill;
  width: fit-content;
  height: fit-content;
}
#admin {
  padding-top: 3%;
  margin: 7%;
}
.head {
  color: antiquewhite;
}
.admin-title {
  font-size: 50px;
  color: rgba(234, 240, 246, 0.8);
  text-align: center;
  filter: blur(0.1rem);
  transform: scale(calc(1 / var(--blur)), 1000);
  text-decoration: line-through;
}
</style>