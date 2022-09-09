import { createStore } from 'vuex'

const GalassiaUrl = "https://lj-capstone.herokuapp.com/";
console.log(GalassiaUrl);

export default createStore({
  state: {
    user: null,
    products: null,
    product: null,
    users: null,
    token: null,
    asc: true,
    cart: [],
  },
  getters: {},
  mutations: {
    setProducts(state, values) {
      state.products = values;
    },
    setProduct(state, values) {
      state.products = values;
    },
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, values) {
      state.users = values;
    },
    setToken(state, token) {
      state.token = token;
    },
    setCart(state, cart) {
      state.cart = cart;
    },
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
    clearCart: (state, cart) => {
      state.cart = cart;
    },
  },
  actions: {
    Getproducts: async (context) => {
      const res = await fetch(`${GalassiaUrl}/products/${id}`)
        .then((res) => res.json())
        .then((products) => {
          console.log(products);
          context.commit("setProducts", products);
        });
      console.log(res);
    },
    Getproduct: async (context) => {
      const res = await fetch(`${GalassiaUrl}/product/${id}`)
        .then((res) => res.json())
        .then((product) => {
          console.log(product);
          context.commit("setProduct", product);
        });
      console.log(res);
    },
    Register: async (context, payload) => {
      fetch(`${GalassiaUrl}/users/register`, {
        method: "POST",
        body: JSON.stringify({
          fullname: payload.fullname,
          email: payload.email,
          password: payload.password,
          phone: payload.phone,
          userRole: "customer",
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((payload) => console.log(payload));
      alert("User successfully registered, you may now sign in");
    },
    Login: async (context, payload) => {
      fetch(`${GalassiaUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            // Saveing token to the store
            context.commit("setToken", data.token);

            // Once token
            // Verify Route
            fetch(`${GalassiaUrl}/users/users/verify`, {
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": data.token,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                context.commit("setUser", data.user);
                alert("Logged in successfully");
                router.push({
                  name: "profile",
                });
              });
          }
        });
    },
    GetUsers: async (context) => {
      const res = await fetch("https://lj-capstone.herokuapp.com/users")
        .then((res) => res.json())
        .then((usersdata) => {
          console.log(usersdata);
          context.commit("setUsers", usersdata);
        });
      console.log(res);
    },
    GetUser: async (context) => {
      const res = await fetch("https://lj-capstone.herokuapp.com/users/:id")
        .then((res) => res.json())
        .then((userdata) => {
          console.log(userdata);
          context.commit("setUser", userdata);
        });
      console.log(res);
    },
    // GET A SINGLE PROGRAM BY ID
    getProduct: async (context, id) => {
      fetch(`${GalassiaUrl}/products/${id}`)
        .then((res) => res.json())
        .then((product) => {
          context.commit("setProducts", product);
        });
    },
    getCart: async (context) => {
      fetch(`${GalassiaUrl}/products`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            context.commit("setProducts", data);
          }
        });
    },
    // ADD PRODUCT TO CART
    addToCart: async (context, id) => {
      console.log(id);
      alert("ADDED PROGRAM TO CART");
    },

    // DELETE PRODUCT FROM CART
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter(
        (product) => product.product_id != id
      );
      context.commit("removeFromCart", newCart);
    },

    // CHECKOUT
    deleteCart: async (context, id) => {
      const emptyCart = context.state.cart.filter(
        (product) => product.id != id
      );
      context.commit("clearCart", emptyCart);
      alert("ORDER SUCCESSFULLY PLACED");
    },
    // DELETE PROGRAM USING ID
    deleteProduct: async (context, payload) => {
      fetch(`${GalassiaUrl}/products/${payload.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": payload.token,
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getProducts"));
    },
  },
  modules: {},
});
