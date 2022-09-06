import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    products: null,
    users: null,
  },
  getters: {},
  mutations: {
    setProducts(state, values) {
      state.products = values;
    },
    setUsers(state, values) {
      state.users = values;
    },
  },
  actions: {
    Getproducts: async (context) => {
      const res = await fetch("https://lj-capstone.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => {
          console.log(products);
          context.commit("setProducts", products);
        });
      console.log(res);
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
  },
  modules: {},
});
