<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-dark py-3 d-flex justify-content-between align-items-center header-transparent scroll-behavior: smooth"
    id="navigation"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://i.postimg.cc/GpdQhXpN/Untitled-design-8-removebg-preview.png"
          alt=""
          width="130"
          hieght="140"
          class="d-inline-block align-text-top"
          id="brand-galassia"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link mx-2 active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2" to="/products"
              >Catalogue</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item-2">
            <router-link
              type="button"
              class="btn btn-primary rounded-pill"
              to="/login"
              >Login</router-link
            >
          </li>
          <li class="nav-item-2">
            <router-link
              type="button"
              class="btn btn-primary rounded-pill"
              to="/register"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans|Playfair+Display:400,400i,700,700i,900,900i");

body {
  margin: 0;
  padding: 0;
  font-family: "Playfair Display";
}
.navbar-nav {
  margin-bottom: 10%;
  gap: 20px;
}
/*START OF NAVBAR*/
.navbar-brand {
  /* transform: rotate(350deg);*/
  font-family: fira sans;
  font-size: 30px;
}
.nav-item {
  font-size: 20px;
}
.nav-item-2 {
  font-size: 20px;
  gap: 20px;
}
router-link:hover {
  color: #000;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .footer .content,
  .footer {
    font-size: 14px;
  }
}
@media (orientation: landscape) and (max-height: 500px) {
  .footer {
    position: unset;
  }
}
</style>