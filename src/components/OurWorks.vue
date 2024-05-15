<template>
  <div class="our_works">
    <div class="about_tatoo">
      <p class="about_upperTitle">наше творчество</p>
      <h1 class="about_title">ПОРТФОЛИО</h1>
      <div class="line"></div>
    </div>
    <div class="tatoos">
      <div class="tatoo" v-for="i in tatoos">
        <img :src="i.link">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurWorks",

  data() {
    return {
      tatoos: [
        {link: "/img/tatka1.jpeg"},
        {link: "/img/tatka2.jpeg"},
        {link: "/img/tatka3.jpg"},
        {link: "/img/tatka4.jpeg"},
        {link: "/img/tatka5.jpeg"},
        {link: "/img/tatka6.jpeg"},
        {link: "/img/tatka7.jpeg"},
        {link: "/img/tatka9.jpg"},
        {link: "/img/tatka10.jpg"},
        {link: "/img/tatka11.jpg"},
      ],
    }
  }
}
</script>

<style scoped>
.our_works {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 50px;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 20px;
}
.about_tatoo {
  padding-bottom: 2%;
}
.about_title {
  font-size: 50px;
  color: white;
}
.about_upperTitle {
  font-size: 18px;
  font-family: Roboto-thin;
  color: white;
}
.line {
  height: 2px;
  width: 100px;
  background: #ff8562;
  margin: 15px auto 0 auto;
}
.tatoos {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.tatoo {
  max-height: 230px;
  max-width: 230px;
}
.tatoo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.tatoo img:hover {
  transform: scale(1.5);
}
@media screen and (max-width: 1024px) {
  .our_works {
    max-width: 1024px;
  }
  .about_title {
    font-size: 35px;
  }
  .about_upperTitle {
    font-size: 16px;
  }
  .line {
    height: 1px;
    width: 90px;
    margin: 10px auto 0 auto;
  }
  .tatoos {
    gap: 15px;
  }
  .tatoo {
    max-height: 210px;
    max-width: 210px;
  }
  .tatoo img:hover {
    transform: none;
  }
}
@media screen and (max-width: 768px) {
  .our_works {
    max-width: 768px;
  }
  .about_title {
    font-size: 25px;
  }
  .about_upperTitle {
    font-size: 12px;
  }
  .line {
    height: 1px;
    width: 80px;
    margin: 5px auto 0 auto;
  }
  .tatoos {
    gap: 10px;
  }
  .tatoo {
    max-height: 150px;
    max-width: 150px;
  }
  .tatoo img:hover {
    transform: none;
  }
}
</style>