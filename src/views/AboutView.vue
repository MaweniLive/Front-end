<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="galassia-brand d-flex justify-content-center">
            <p>
              <span class="brand-name">G</span>
              <span class="brand-name">a</span>
              <span class="brand-name">l</span>
              <span class="brand-name">a</span>
              <span class="brand-name">s</span>
              <span class="brand-name">s</span>
              <span class="brand-name">i</span>
              <span class="brand-name">a.</span>
              <span class="brand-name">Moda</span>
            </p>
          </h2>
        </div>
        <div class="col-lg-6">
          <div class="about-img">
            <img
              src="https://i.postimg.cc/3JBfhNGC/fmr-y-Byt-RGvr-V6-I-unsplash.jpg"
              alt=""
              style="width: 500px; height: 520px"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="content">
            <div class="row">
              <div class="col-lg-12">
                <div class="header">
                  <h2 class="galassia-title">Everything About Us</h2>
                </div>
                <div class="about-details">
                  <h3 class="about-head">
                    The "Gallery of the Academy of Florence," also known as the
                    Galleria dell'Accademia di Firenze, is a museum of art in
                    Florence, Italy. It is well known for being the location of
                    David, a sculpture by Michelangelo. It also houses more
                    Michelangelo statues and a sizable collection of paintings
                    by Florentine painters, most of which date from the 1300s to
                    the 1600s.
                  </h3>
                  <div class="col-lg-12" id="galassia-list">
                    <ul
                      class="px-0"
                      style="list-style-type: none"
                      id="about-lists"
                    >
                      <li>
                        <strong>NAME:</strong
                        ><span><span>GALASSIA MODA</span></span>
                      </li>
                      <li>
                        <strong>BULIT:</strong
                        ><span><span>09/10/1809</span></span>
                      </li>
                      <li>
                        <strong>Genre:</strong><span><span>ART</span></span>
                      </li>
                      <li>
                        <strong>Location:</strong
                        ><span><span>ITALY</span></span>
                      </li>
                      <li>
                        <strong>OPENING TIMES:</strong
                        ><span><span>08AM-4PM</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
.galassia-brand {
  font-size: 50px;
  color: rgba(234, 240, 246, 0.8);
  text-align: center;
  filter: blur(0.1rem);
  transform: scale(calc(1 / var(--blur)), 1000);
  text-decoration: line-through;
}
.brand-name {
  color: transparent;
  animation: blur 10s ease-out infinite;
  -webkit-animation: blur 10s ease-out infinite;
}

.brand-name:nth-child(1) {
  animation-delay: 0.1s;
  -webkit-animation-delay: 0.1s;
}
.brand-name:nth-child(2) {
  animation-delay: 0.2s;
  -webkit-animation-delay: 0.2s;
}
.brand-name:nth-child(3) {
  animation-delay: 0.3s;
  -webkit-animation-delay: 0.3s;
}
.brand-name:nth-child(4) {
  animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
}
.brand-name:nth-child(5) {
  animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
}
.brand-name:nth-child(6) {
  animation-delay: 0.6s;
  -webkit-animation-delay: 0.6s;
}
.brand-name:nth-child(7) {
  animation-delay: 0.7s;
  -webkit-animation-delay: 0.7s;
}

@keyframes blur {
  0% {
    text-shadow: 0 0 100px #fff;
    opacity: 0;
  }
  5% {
    text-shadow: 0 0 90px #fff;
  }
  15% {
    opacity: 1;
  }
  20% {
    text-shadow: 0 0 0px #fff;
  }
  80% {
    text-shadow: 0 0 0px #fff;
  }
  85% {
    opacity: 1;
  }
  95% {
    text-shadow: 0 0 90px #fff;
  }
  100% {
    text-shadow: 0 0 100px #fff;
    opacity: 0;
  }
}

@-webkit-keyframes blur {
  0% {
    text-shadow: 0 0 100px #fff;
    opacity: 0;
  }
  5% {
    text-shadow: 0 0 90px #fff;
  }
  15% {
    opacity: 1;
  }
  20% {
    text-shadow: 0 0 0px #fff;
  }
  80% {
    text-shadow: 0 0 0px #fff;
  }
  85% {
    opacity: 1;
  }
  95% {
    text-shadow: 0 0 90px #fff;
  }
  100% {
    text-shadow: 0 0 100px #fff;
    opacity: 0;
  }
}

.galassia-title {
  font-family: "Playfair Display";
  background: linear-gradient(to right, hsl(98 100% 62%), hsl(204 100% 59%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: start;
  font-size: 60px;
}
.about-head {
  text-align: start;
  color: aliceblue;
}
.content {
  gap: 20px;
}

#galassia-list {
  text-align: start;
  color: aliceblue;
  gap: 10px;
}
#about {
  position: relative;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: fit;
  padding-top: 110px;
}
.about-img {
  margin-left: 10%;
  filter: opacity(50%);
  filter: url(#blur);
  filter: blur(6px);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='3');
  transition: 1s;
}
.about-img:hover {
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');
  filter: blur(0px);
}
.about-title {
  text-align: center;
  padding-bottom: 30px;
}
.about-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}
</style>