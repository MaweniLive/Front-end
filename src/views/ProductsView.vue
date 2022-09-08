<template>
  <section id="products-section">
    <h1 class="display-head">See some of our most well-known artworks here.</h1>
    <p class="display-head1 d-flex justify-content-center">
      The "Gallery of the Academy of Florence," <p class="d-flex justify-content-center">also known as the Galleria
      dell'Accademia di Firenze, is a museum of art in Florence, Italy.</p>
    </p>
    <div class="container">
      <div class="row">
        <div id="listings" class="listings"></div>
      </div>
    </div>
  </section>
  <div id="app" class="footer">
    <v-app id="inspire">
      <v-footer dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
            accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
export default {
  methods: {
    getproduct: fetch("https://lj-capstone.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        document.querySelector("#listings").innerHTML = "";
        data.forEach((product, index) => {
          document.querySelector("#listings").innerHTML += `
      <div id="${index}" class="col">
               <div class="bucket">
                   <img
                   id="admin-img"
                   class="proj_img"
                   src="${product.imgURL}"
                   />
                   <div class="overlay">
                  <div class="text-product">
                      <h4>${product.name}</h4>
                <p>${product.category}</p>
                <p>${product.description}</p>
                <ul class="icons">
                  <li>
                    <i class="fa-solid fa-arrow-down-wide-short">:${product.quantity}</i>
                    <span></span><span></span><span></span><span></span>
                    <i class="fa-sharp fa-solid fa-screwdriver-wrench">:${product.made}</i>
                    </li>
                  </ul>
                <div class="icons">
                  </div>
              </div>
            </div>
         </div>
        `;
        });
      }),
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans|Playfair+Display:400,400i,700,700i,900,900i");

body {
  margin: 0;
  padding: 0;
  font-family: "Playfair Display";
}
* {
  margin-bottom: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #030e17;
}
html,
body {
  overflow-x: hidden;
}
#products-section {
  padding-top: 120px;
}
.btn-nd {
  margin-left: 0%;
}
#btn-nd {
  margin-left: 0%;
}
.icons i {
  margin: 8px;
}
.btn:hover {
  color: rgb(0, 0, 0);
}
a:hover {
  color: black;
}
.icons p {
  font-size: 12px;
  margin: 8px;
}
.icons {
  display: flex;
  flex-wrap: nowrap;
  object-fit: contain;
}
#admin-img {
  width: 20rem;
}
ul{
  list-style-type: none;
  object-fit: fill ;
}
a {
  /* color: var(--bs-link-color); */
  text-decoration: none;
  color: white;
}
.admin-btn {
  margin-top: 20px;
}
#Landing {
  background: linear-gradient(#0000009f, #000000b0),
  url(https://i.postimg.cc/nzcBmYdr/mk-s-U74-Ol-S8-ANGI-unsplash.jpg);
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  display: table;
  justify-content: center;
  color: white;
  overflow-x: hidden;
  text-align: center;
}
.l-display {
  display: table-cell;
  vertical-align: middle;
  padding: 0 30px;
}
.landing-head {
  font-family: auto;
}
#inquiry-form {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/FsRv6f6S/julian-irigoyen-xeaq-Kvv-M2r-Q-unsplash.jpg);
  min-height: 100vh;
  background-position: center;
  background-size: cover;
}
footer {
  background-color: black;
  color: white;
}
.contact {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.footer {
  background-color: #000304;
  height: 150px;
  display: table;
  width: 100%;
}
/* #discover {
  min-height: 100vh;
} */
#card {
  margin-left: 10%;
  margin-right: 2rem;
  width: 80%;
  height: 10rem;
  margin-top: -4rem;
  background-color: #081b2b;
  color: white;
  margin-bottom: 2rem;
}
#card-content {
  opacity: 1;
}
#search-button {
  width: 5rem;
}
.btn-conatiner {
  display: flex;
  justify-content: center;
}
#card {
  margin-left: 10%;
  margin-right: 2rem;
  width: 80%;
  height: 10rem;
  margin-top: -4rem;
}
#card-content {
  opacity: 1;
}




.row {
  --bs-gutter-x: 0rem !important;
}
.fter .row {
  text-align: center;
}
.fter {
  display: table-cell;
  vertical-align: middle;
}

.futer {
  padding: 80px;
  padding-top: 70px;
  padding-bottom: 70px;
}
.futer h5 {
  padding-bottom: 30px;
}
.big {
  font-size: 30px;
}
.socials {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 20px;
  padding-right: 50px;
}
.copyright {
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  padding-right: 80px;
}

.bucket {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 400px;
  position: relative;
  margin: 10px;
}
.proj_img {
  display: block;
  width: 25rem !important;
  height: 20rem;
  object-fit: cover;
  border: 6px solid white;
  border-radius: 6px;
  /* box-shadow: 8px 8px 15px #e4e4e4; */
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20rem;
  width: 25rem;
  /* opacity: 0.2; */
  transition: 0.3s ease;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  color: #03111c;
}
.bucket:hover .overlay {
  opacity: 0.1;
  /* border-bottom: 1px solid #000; */
}
.listings {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 30px;
}

.text-product {
  text-align: center;
  position: relative;
  top: 0;
  color: white;
  margin-top: 90px;
}
.sorting {
  display: flex;
  border-radius: 50px;
  width: 6rem;
}
tbody#admin-listings {
  color: white;
}
td:hover {
  color: white;
}
.display-head {
  font-family: auto;
  color: white !important;
  text-align: center;
}
.socials i:hover {
  color: #004274;
}
@media only screen and (max-width: 1000px) {
  #card {
    height: fit-content;
  }
  body {
    background-color: #071825;
    /* padding-left: 10px;
    padding-right: 10px; */
  }
  .socials {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding-top: 20px;
    padding-right: 88px;
  }
  .admin-btn {
    margin-top: 20px;
    padding-left: 56px;
  }
  tr {
    display: flex;
    flex-direction: column;
  }
}
.card-admin {
  margin-left: 10%;
  margin-right: 2rem;
  width: 80%;
  height: 10rem;
  margin-top: -4rem;
  background-color: #04131e;
  color: white;
  margin-bottom: 2rem;
}
div#card-content {
  background-color: #030f18;
  color: white;
}
</style>