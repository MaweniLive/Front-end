<template>
  <div class="users">
    <h2>Users</h2>
    <table class="table">
      <tr>
        <th>User_id</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Passsword</th>
        <th>Phone</th>
        <th>User Role</th>
      </tr>
      <tr v-for="user in users" :key="user.user_id">
        <td>{{ user.user_id }}</td>
        <td>{{ user.fullname }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.userRole }}</td>
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
<style></style>