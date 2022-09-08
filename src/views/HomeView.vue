<template>
  <section id="Landing">
    <div class="l-display">
      <h1 class="landing-head">GALASSIA MODA</h1>
      <h3 class="landing-head1">
        For admirers of the Renaissance, the Uffizi Gallery is among Florence,
        Italy's greatest art museums. You really must see the Uffizi Gallery
        while you are in Italy.
      </h3>
    </div>
    <div class="row">
      <div class="col-md-6"></div>
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style>
* {
  margin: 0;
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
  font-family: "Playfair Display";
  background: linear-gradient(to right, hsl(98 100% 62%), hsl(204 100% 59%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
.laning-head1 {
  font-family: "Playfair Display";
  text-align: center;
}
#inquiry-form {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/FsRv6f6S/julian-irigoyen-xeaq-Kvv-M2r-Q-unsplash.jpg);
  min-height: 100vh;
  background-position: center;
  background-size: cover;
}
.row {
  --bs-gutter-x: 0rem !important;
}
@media only screen and (max-width: 1000px) {
  body {
    background-color: #071825;
    /* padding-left: 10px;
    padding-right: 10px; */
  }
}
</style>