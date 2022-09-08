<template>
  <div class="row" id="admin">
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
              <tr id="${index}">
                <th scope="row">${product.product_id}</th>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td><img src="${product.imgURL}" style="width="100px" height="120px""></td>
                <td>${product.description}</td>
                <td>${product.made}</td>
                <td>${product.quantity}</td>
                <td>R${product.price}</td>
                <td> 
                  <button onclick="deleteListings(${i})" 
                  class="btn btn-primary admin-btn">
                  delete
                  </buttonn>
                  <button
          type="button"
          class="btn btn-primary admin-btn"
          data-bs-toggle="modal"
          data-bs-target="#edit${i}"
        >
          Edit
        </button></td>
        <div
             class="modal fade"
             id="edit${i}"
             tabindex="-1"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true">

  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">Edit Product</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
 
         <input type="text" placeholder="Enter name" id="name-${i}" value="${product.name}" />
              <input type="text" placeholder="Enter size" id="category-${i}" value="${product.category}"/>
              <input type="text" placeholder="Enter Address" id="description-${i}"value="${product.description}" />
              <input
                type="text"
                placeholder="Enter bathroom amount"
                id="made-${i}"
                value="${product.made}"
              />
              <input
                type="text"
                placeholder="Enter parking space"
                id="quantity-${i}"
                value="${product.quantity}"
              />
              <input type="text" placeholder="Enter img url" id="imgURL-${i}" value="${product.imgURL}" />
              <select name="propertySort" id="price-${i}" value="${product.price}">
                <option value="Apartment">${product.price}</option>
              </select>
              <select name="LocationSort" id="LocationSort-${i}" value="${listings.locations}">
                <option value="New York">New York</option>
              </select>
              <select name="bedroomsSort" id="bedroomsSort-${i}" value="${listings.bedrooms}">
                <option value="1">1</option>
              </select>
              <select name="priceSort" id="priceSort-${i}" value="${listings.price}">
                <option value="R1,600/mo">R1,600/mo</option>    
              </select>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button
        data-bs-toggle="modal"
        data-bs-target="#edit${i}"
          type="button"
          class="btn btn-primary"
          onclick="editProperties(${i})"
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
                </tr>
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
                <td><button type="button" class="btn btn-primary">Delete</button></td>
                 </tr>
            </tbody>
          `;
        });
      }),
  },
};
</script>
<style>
#admin {
  padding-top: 12%;
  margin: 2%;
}
.head {
  color: antiquewhite;
}
</style>