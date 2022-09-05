<template>
  <div v-if="products">
    <!-- <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div
        v-for="product in products"
        :key="product.product_id"
        class="carousel-inner"
      >
        <div class="carousel-item active" data-bs-interval="2000">
          <img :src="product.imgURL" class="d-block w-100" alt="..." />
        </div>
         <div class="carousel-item" data-bs-interval="2000">
          <img src="..." class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> -->
    <div v-for="product in products" :key="product.product_id">
      <h1>{{ product.name }}</h1>
      <img :src="product.imgURL" alt="" />
    </div>
  </div>
  <!-- <main>
    <figure class="rellax">
      <img
        src="https://i.postimg.cc/2j1K4rPC/evan-lee-3-CGcm-WDf-QNw-unsplash.jpg
"
        alt="Me coding"
      />
      <figcaption class="rellax" data-rellax-speed="1">
        Museo d'Arte Contemporanea
      </figcaption>
    </figure>
    <figure class="rellax">
      <img
        src="https://i.postimg.cc/yYqvc9mT/pavel-nekoranec-I-QKQLMIKs-unsplash.jpg
"
        alt="Bronte Beach, Australia"
      />
      <figcaption class="rellax" data-rellax-speed="1">
        National Etruscan Museum
      </figcaption>
    </figure>
    <figure class="rellax">
      <img
        src="https://i.postimg.cc/255wrxYC/milada-vigerova-Cuz-XP5e-FZb4-unsplash.jpg
"
      />
      <figcaption class="rellax" data-rellax-speed="1">
        Galleria Doria Pamphilj
      </figcaption>
    </figure>
  </main> -->

  <!-- <button class="arrow right">
    <svg width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve">
      <polyline
        fill="none"
        stroke="#FFFFFF"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        points="
	45.63,75.8 0.375,38.087 45.63,0.375 "
      />
    </svg>
  </button>
  <button class="arrow left">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="60px"
      height="80px"
      viewBox="0 0 50 80"
      xml:space="preserve"
    >
      <polyline
        fill="none"
        stroke="#FFFFFF"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        points="
	0.375,0.375 45.63,38.087 0.375,75.8 "
      />
    </svg>
  </button> -->
</template>
<script>
export default {
  // data: () => ({
  //   icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  // }),
  mounted() {
    this.$store.dispatch("Getproducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans|Playfair+Display:400,400i,700,700i,900,900i");

* {
  box-sizing: border-box;
  border-radius: 5px;
}

main {
  margin: 0;
  background-color: #eee;
  background-image: url(https://i.postimg.cc/T1R240BX/christopher-czermak-Pam-FFHL6f-VY-unsplash.jpg);
  background-size: cover;
}

main {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100vw 100vw 100vw;
  width: 300vw;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
}

figure {
  max-width: 50vw;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.8);
  padding: 2em;
  border: 1px solid #ddd;
  box-shadow: 0 0 2em -0.5em #aaa;
  position: relative;
}

figure img {
  max-width: 100%;
  max-height: 70vh;
}

figure figcaption {
  font-family: "Playfair Display";
  font-weight: 900;
  font-size: 3em;
  font-style: italic;
  text-align: right;
  text-shadow: 0 0 1em #555;
  text-shadow: 0 0 0.5em white;
  position: absolute;
  right: -2rem;
  bottom: -2rem;
}

.helper {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  text-align: center;
  font-family: "Nunito Sans";
  opacity: 0.45;
  font-size: 1.2em;
  transition: opacity, 0.15s;
}
.helper:hover {
  opacity: 1;
}
button {
  -webkit-appearance: none;
  background: transparent;
  border: 0;
  outline: 0;
}

svg {
  padding: 5px;
}

.arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -45px;
  margin-left: -35px;
  width: 70px;
  height: 90px;
}

.left {
  left: 90%;
  position: fixed;
}

.right {
  right: 90%;
  position: fixed;
}

.left:hover polyline,
.left:focus polyline {
  stroke-width: 3;
}

.left:active polyline {
  stroke-width: 6;
  transition: all 100ms ease-in-out;
}

.right:hover polyline,
.right:focus polyline {
  stroke-width: 3;
}

.right:active polyline {
  stroke-width: 6;
  transition: all 100ms ease-in-out;
}

polyline {
  transition: all 250ms ease-in-out;
}
.site-footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #737373;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-icons a.dribbble:hover {
  background-color: #ea4c89;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
</style>