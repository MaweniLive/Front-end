<template>
  <div class="home" id="landing-img">
    <div class="skewed">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
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
#landing-img {
  background-image: url(https://i.im.ge/2022/09/03/ObmONy.Untitled-design-5.png);
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.skewed {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #cfe7ff;
  z-index: 0;
  transform: skewY(26deg);
  transform-origin: top left;
}
</style>