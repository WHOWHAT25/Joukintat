<template>
  <div class="about_us tint">
    <div class="about_container">
      <div class="about_text">
        <p class="about_upperTitle">наши способности</p>
        <h1 class="about_title">УСЛУГИ</h1>
        <div class="line"></div>
      </div>
    </div>
    <div class="service-container">
      <div class="service" v-for="i in services">
        <div class="icon">
          <img :src="i.link">
        </div>
        <h2>{{i.name}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurServices",

  data() {
    return {
      services: [
        {link: "/img/TatooIcon.png", name: "ТАТУИРОВКА"},
        {link: "/img/SpeakIcon.png", name: "КОНСУЛЬТАЦИЯ"},
        {link: "/img/OverlapIcon.png", name: "ПЕРЕКРЫТИЕ"},
        {link: "/img/GamesIcon.png", name: "GAME-BREAK"},
      ],
    }
  }
}

</script>

<style scoped>
.about_us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  padding-top: 30px;
  padding-bottom: 20px;
  background-image: url("../../public/img/TatooBack.jpg");
  background-position: center ;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  max-width: 100%;
  padding-inline: 50px;
}
.tint {
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
}
.about_container {
  display: flex;
  flex-direction: column;
}
.about_text {
  padding-bottom: 2%;
}
.about_title {
  font-size: 40px;
}
.about_upperTitle {
  font-size: 14px;
  font-family: Roboto-thin;
}
.line {
  height: 2px;
  width: 100px;
  background: #ff8562;
  margin: 15px auto 0 auto;
}
.service-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.service {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-height: 300px;
  max-width: 300px;

  font-family: Roboto-thin;
  font-size: 14px;
  color: white;
  margin-inline: 50px;
}
.icon {
  display: flex;
  justify-content: center;
  max-height: 200px;
  max-width: 200px;
  border: solid 2px #ff8562;
  border-radius: 100%;
  margin: 20px;
  padding: 25px;
}
.icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>