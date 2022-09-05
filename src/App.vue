<template>
  <nav
    class="navbar"
  >
    <div class="container-fluid bfixed-top navbar-expand-lg navbar-dark py-3 d-flex justify-content-between align-items-center header-transparent scroll-behavior: smooth">
      <router-link class="navbar-brand" to="/">
        <img
          src="https://i.im.ge/2022/09/03/ObmIJ8.Galassia-2-removebg-preview.png"
          alt=""
          width="340"
          height="350"
          class="d-inline-block"
        />
      </router-link>

    </div>
  </nav>
  <router-view />
</template>

<style>
#navbarNavDropdown {
  margin-left: 20%;
  margin-bottom: 8%;
  color: white;
}
#nav-direct {
  display: flex;
  justify-content: center;
}
</style>