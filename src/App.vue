<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-dark py-3 d-flex justify-content-between align-items-center header-transparent scroll-behavior: smooth"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://i.postimg.cc/8kh2yY5M/Untitled-design-6-removebg-preview.png"
          alt=""
          class="d-inline-block align-text-top"
          id="brand-galassia"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
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
#brand-galassia{
  width: 200px;
  height: 220px;
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
router-link:hover {
  color: #000;
}
</style>